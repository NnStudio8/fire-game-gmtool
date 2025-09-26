<?php
// 显示所有错误，方便调试
ini_set('display_errors', 1);
error_reporting(E_ALL);

// 数据库连接配置
$servername = "localhost";
$username = "ysjba";
$password = "10086abc";
$dbname = "ag_region";



// 创建数据库连接
$conn = mysqli_connect($servername, $username, $password, $dbname);

// 检查连接是否成功
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 获取用户输入
    $username = $_POST['username'];
    $password = $_POST['password'];
    // 正则表达式模式：以1开头，后面跟着10个数字
    $pattern = '/^1[3-9]\d{9}$/';

// 使用preg_match进行正则判断
    if (preg_match($pattern, $username)) {
		
    } else {
        echo "手机号格式不正确。";
		exit();
    }
	
	// 判断密码长度是否大于等于 6 位
	if (strlen($password) < 6) {
		echo "密码长度至少六位。";
	}
    $confirm_password = $_POST['confirm_password'];

    // 检查密码和确认密码是否匹配
    if ($password !== $confirm_password) {
        echo "密码和确认密码不匹配。";
    } else {
        // 密码加密
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);

        // 检查用户名是否已存在
        $sql = "SELECT * FROM dbaccount WHERE AccountName = " . $username;
        $result = $conn->query($sql);

// 检查查询是否成功
        if ($result === false) {
            // 输出错误信息
            die("查询失败: " . $conn->error);
        }

        if ($result->num_rows > 0) {
            echo "用户名已存在，请选择其他用户名。";
        } else {
            // 插入新的用户数据
            $sql = "INSERT INTO dbaccount (AccountName, PlaAuthType, AccountCreateTime, ChannelName, DeviceID, StaticName) VALUES ($username, 1, 1720465516, 'dodsdk', $password, 'dodsdk')";

            $result = $conn->query($sql);
            //echo $sql;
            // 检查查询是否成功
            if ($result === false) {
                // 输出错误信息
                die("查询失败: " . $conn->error);
            }
            if ($result) {
                echo "注册成功！";
            } else {
                echo "注册失败，请稍后再试。";
            }
        }
    }
}

// 关闭数据库连接
$conn->close();
?>
