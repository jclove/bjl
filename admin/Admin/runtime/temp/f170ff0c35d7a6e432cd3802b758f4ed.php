<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:91:"D:\phpstudy_pro\WWW\baijias\admin\Admin\public/../application/index\view\commonse\toop.html";i:1541310253;}*/ ?>
<!DOCTYPE html>
<head>
<title>Home</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="" />
<script src="__STATIC__/laydate/laydate.js"></script>	
<script type="application/x-javascript">
	
	
	 addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } 


</script>
<!-- bootstrap-css -->
<link rel="stylesheet" href="__STATIC__/Admin/css/bootstrap.min.css">
<!-- //bootstrap-css -->
<!-- Custom CSS -->
<link href="__STATIC__/Admin/css/style.css" rel='stylesheet' type='text/css' />
<link href="__STATIC__/Admin/css/style-responsive.css" rel="stylesheet" />
<!-- font CSS -->
<link href='http://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>
<!-- font-awesome icons -->
<link rel="stylesheet" href="__STATIC__/Admin/css/font.css"
	type="text/css" />
<link href="__STATIC__/Admin/css/font-awesome.css" rel="stylesheet">
<link rel="stylesheet" href="__STATIC__/Admin/css/morris.css"
	type="text/css" />
<!-- calendar -->
<link rel="stylesheet" href="__STATIC__/Admin/css/monthly.css">
<!-- //calendar -->
<!-- //font-awesome icons -->
<script src="/static/Admin/js/jquery2.0.3.min.js"></script>
<script src="/static/Admin/js/raphael-min.js"></script>
<script src="/static/Admin/js/morris.js"></script>
<script type="text/javascript" charset="utf-8" src="/static/ueditor/ueditor.config.js"></script>
        <script type="text/javascript" charset="utf-8" src="/static/ueditor/ueditor.all.min.js"></script>
        <script type="text/javascript" charset="utf-8" src="/static/ueditor/lang/zh-cn/zh-cn.js"></script>
</head>
<body>

	<header class="header fixed-top clearfix">
		<!--logo start-->
		<div class="brand">
			<a href="<?php echo Url('Index/index'); ?>" class="logo"> VISITORS </a>
			<div class="sidebar-toggle-box">
				<div class="fa fa-bars"></div>
			</div>
		</div>

		<div class="top-nav clearfix">
			<!--search & user info start-->
			<ul class="nav pull-right top-menu">

				<!-- user login dropdown start-->
				<li class="dropdown"><a data-toggle="dropdown"
					class="dropdown-toggle" href="#" aria-expanded="false"> <img
						alt="" src="/static/Admin/images/2.png"> <span
						class="username"><?php echo \think\Session::get('adminusername'); ?></span>
						<b class="caret"></b>
				</a>
					<ul class="dropdown-menu extended logout">
					<?php if($root['status'] == 1): ?>
					<li><a href="<?php echo Url('Config/adduser'); ?>"><i class="fa fa-cog"></i><font><font>
										添加</font></font></a></li>
						<li><a href="<?php echo Url('Config/set'); ?>"><i class="fa fa-cog"></i><font><font>
										修改</font></font></a></li>
					<?php else: endif; ?>					
						<li><a href="<?php echo Url('Login/logout'); ?>"><i class="fa fa-key"></i><font><font>
										退出</font></font></a></li>
					</ul></li>
				<!-- user login dropdown end -->

			</ul>
			<!--search & user info end-->
		</div>
	</header>
	<!--header end-->
	<!--sidebar start-->
	<aside>
		<div id="sidebar" class="nav-collapse">
			<div class="leftside-navigation">
				<ul class="sidebar-menu" id="nav-accordion" style="margin-bottom:100px">
					<?php if($root['status'] == 1): ?>
					<li><a href="<?php echo Url('Data/order'); ?>">下注统计</a></li>
					<li><a href="<?php echo Url('Config/guanliy'); ?>">管理员列表</a></li>
					<!-- <li><a href="<?php echo Url('User/robot'); ?>">机器人列表</a></li> -->
					<!-- <li class="sub-menu"><a href="<?php echo Url('User/congzhi'); ?>">管理员充值记录</a></li> -->
					<li><a href="<?php echo Url('Config/config'); ?>">系统配置</a></li>
					<li><a href="<?php echo Url('User/user'); ?>">用户统计</a></li>
					<li><a href="<?php echo Url('Data/tixian'); ?>">提现记录</a></li>
					<!-- <li><a href="<?php echo Url('Data/cz1history'); ?>">充值记录</a></li> -->
					<li><a href="<?php echo Url('Data/cz1history'); ?>">充值记录</a></li>
					<!-- <li><a href="<?php echo Url('Data/zzhistory'); ?>">用户转账记录</a></li> -->
					<!-- <li><a href="<?php echo Url('Config/gameSM'); ?>">游戏说明</a></li> -->
					<!-- <li><a href="<?php echo Url('Config/kefu'); ?>">充值客服</a></li> -->
					<!-- <li><a href="<?php echo Url('Config/kefuer'); ?>">提现客服</a></li> -->
					<!-- <li><a href="<?php echo Url('Data/notice'); ?>">喊话</a></li> -->
					<!-- <li><a href="<?php echo Url('Config/kaidian'); ?>">开点设置</a></li> -->
					<?php else: ?>
					<!-- <li><a href="<?php echo Url('Data/xiang'); ?>">下注统计</a></li> -->
					<?php endif; ?>
					
					
				</ul>
			</div>
			<!--  sidebar menu end -->
		</div>
	</aside>

	</section>

	<script src="/static/Admin/js/bootstrap.js"></script>
	<script src="/static/Admin/js/jquery.dcjqaccordion.2.7.js"></script>
	<script src="/static/Admin/js/scripts.js"></script>
	<script src="/static/Admin/js/jquery.slimscroll.js"></script>
	<script src="/static/Admin/js/jquery.nicescroll.js"></script>
	<!--[if lte IE 8]><script language="javascript" type="text/javascript" src="js/flot-chart/excanvas.min.js"></script><![endif]-->
	<script src="/static/Admin/js/jquery.scrollTo.js"></script>
</body>
</html>