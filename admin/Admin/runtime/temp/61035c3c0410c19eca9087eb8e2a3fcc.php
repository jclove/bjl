<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:89:"D:\phpstudy_pro\WWW\baijias\admin\Admin\public/../application/index\view\login\index.html";i:1604028423;}*/ ?>
<!DOCTYPE html>
<head>
<title>Login</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="" />
<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
<!-- bootstrap-css -->
<link rel="stylesheet" href="__STATIC__/Admin/css/bootstrap.min.css" >
<!-- //bootstrap-css -->
<!-- Custom CSS -->
<link href="__STATIC__/Admin/css/style.css" rel='stylesheet' type='text/css' />
<link href="__STATIC__/Admin/css/style-responsive.css" rel="stylesheet"/>
<!-- font CSS -->
<link href='http://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>
<!-- font-awesome icons -->
<link rel="stylesheet" href="__STATIC__/Admin/css/font.css" type="text/css"/>
<link href="__STATIC__/Admin/css/font-awesome.css" rel="stylesheet"> 
<!-- //font-awesome icons -->
<script src="__STATIC__/Admin/js/jquery2.0.3.min.js"></script>
<script src="__STATIC__/Admin/jquery-1.8.3.min.js"></script>
</head>
<body>
<div class="log-w3">
<div class="w3layouts-main">
	<h2><font><font>现在登录</font></font></h2>
		<form>
		<div id='show_error' style='color:#ff0;text-align:center'></div>
			<input type="text" class="ggg" id="username" placeholder="用户名">
			<input type="password" class="ggg" id="password" placeholder="密码">
			
				<font><font><input id='form1' type="submit" value="登录" name="login"></font></font>
		</form>
</div>
</div>
</body>
</html>

<script>
              $(function () {
                $('#form1').click(function () {
                    //获取数据
                    var username = $('#username').val();
                    var password = $('#password').val();
                    if (username == '') {
                        $('#show_error').html('用户名不能为空');
                        $('#username').focus();
                        return false;
                    }
                    if (password == '') {
                        $('#show_error').html('密码不能为空');
                        $('#password').focus();
                        return false;
                    }
              
                  $.ajax({
                        url: "<?php echo url('Login/dologin'); ?>",
                        type: 'post',
                        data: {'username': username, 'password': password},
                        dataType:'json',
                        success: function (d) {
                            if (d.num == 1) {
                                location.href = "<?php echo url('Index/index'); ?>";
                            } else {
                            	 $('#show_error').html(d.msg);
                            }
                        },
                        error: function(XMLHttpRequest, textStatus, errorThrown) {
                           /*  alert(XMLHttpRequest.status);
                            alert(XMLHttpRequest.readyState);
                            alert(textStatus); */
                           
                                location.href = "<?php echo url('Index/index'); ?>";
                          
                        }
                    }); 
                    return false;//禁用 form表单自身的提交 
                });
            });  
        </script>