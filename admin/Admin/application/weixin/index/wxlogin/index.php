<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title></title>
<link rel="stylesheet" href="//cdn.bootcss.com/bootstrap/3.3.4/css/bootstrap.min.css">
<script src="//cdn.bootcss.com/jquery/1.11.2/jquery.min.js"></script>
<script src="//cdn.bootcss.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
</head>
<body>
</body>
  <script>
   
  	function getQueryString(name) {     //获取链接里的t数据
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]); return null;
	}
    var yqm = getQueryString("yqm");
    if (yqm) {
    	window.location.href="http://bjladmin.devs/index.php/weixin/index/wxLogin/yqm/"+yqm;
    }else{
    	window.location.href="http://bjladmin.devs/index.php/weixin/index/wxLogin";
    }
  </script>
</html>
