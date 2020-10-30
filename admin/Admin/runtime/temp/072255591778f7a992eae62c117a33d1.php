<?php if (!defined('THINK_PATH')) exit(); /*a:2:{s:91:"D:\phpstudy_pro\WWW\baijias\admin\Admin\public/../application/index\view\commonse\toop.html";i:1541310253;s:93:"D:\phpstudy_pro\WWW\baijias\admin\Admin\public/../application/index\view\data\cz1history.html";i:1541310253;}*/ ?>
<section id="main-content">
	<section class="wrapper">
		<ol class="breadcrumb">
			<li><a href="<?php echo Url('Index/index'); ?>"><span
					class="glyphicon glyphicon-home" aria-hidden="true"
					style="color: #f00"></span></a></li>
			<li class="active">充值记录</li>
		</ol>
		<div class="table-agile-info">
			<div class="panel panel-default">
                        	<form action='' method='get'  style="width:25%;float:left;">
								<input style="width: 185px; height: 33px" type="text" class="input-sm form-control" value='<?php echo \think\Request::instance()->get('uid'); ?>' name="uid" />
								<span class="input-group-btn">
									<button class="btn btn-sm btn-default" type="submit">搜索(ID)</button>
								</span>
							</form>
                            <!--- 搜索位置 -->
                            <form action="" method="get" style="width:35%;float:left;">
                                <span>时间查询 : </span><input type="text" style="width:130px;height:30px;" name="times" class="laydate-icon" id="demo" value="<?php echo \think\Request::instance()->get('times'); ?>" />
                           - - - <input type="text" style="width:130px;height:30px;" class="laydate-icon" name="timed" id="demo1" value="<?php echo \think\Request::instance()->get('timed'); ?>" />
                            <?php if(!(empty($uid) || (($uid instanceof \think\Collection || $uid instanceof \think\Paginator ) && $uid->isEmpty()))): ?>
                               		<input type="hidden" name="uid" value="<?php echo $uid; ?>">
                               <?php endif; ?>
                            <button type="submit"  class="btn btn-danger">搜索</button>
                           </form>
                            <form class="form-horizontal bucket-form" method="get" action="" style="width:10%;float:left">
                                        <select name="se"  style="width:60px;height:30px;margin:10px 0"   >
                                        		 <option  > - - - -</option>
                                                <option value="6" <?php if(\think\Request::instance()->get('se') == 6): ?>selected<?php else: endif; ?>>今天</option>   
                                                <option  value="1" <?php if(\think\Request::instance()->get('se') == 1): ?>selected<?php else: endif; ?>>昨天</option>
                                                <option value="2" <?php if(\think\Request::instance()->get('se') == 2): ?>selected<?php else: endif; ?>>本周</option>
                                                <option value="3" <?php if(\think\Request::instance()->get('se') == 3): ?>selected<?php else: endif; ?>>上周</option>
                                                <option value="4" <?php if(\think\Request::instance()->get('se') == 4): ?>selected<?php else: endif; ?>>本月</option>
                                                <option  value="5" <?php if(\think\Request::instance()->get('se') == 5): ?>selected<?php else: endif; ?>>上月</option>

                                        </select>
                                        <?php if(!(empty($uid) || (($uid instanceof \think\Collection || $uid instanceof \think\Paginator ) && $uid->isEmpty()))): ?>
                               		<input type="hidden" name="uid" value="<?php echo $uid; ?>">
                               <?php endif; ?>
                                               <button type="submit"  class="btn btn-danger">搜索</button>
                        </form>
                        <form class="form-horizontal bucket-form" method="get" action="" style="width:10%;float:left">
                               <select name="status"  style="width:90px;height:30px;margin:10px 0"   >
                               		 <option  > - - - -</option>
                                       <option value="2" <?php if(\think\Request::instance()->get('status') == 2): ?>selected<?php else: endif; ?>>失败订单</option>   
                                       <option  value="1" <?php if(\think\Request::instance()->get('status') == 1): ?>selected<?php else: endif; ?>>成功订单</option>
                               </select>
                               <?php if(!(empty($uid) || (($uid instanceof \think\Collection || $uid instanceof \think\Paginator ) && $uid->isEmpty()))): ?>
                               		<input type="hidden" name="uid" value="<?php echo $uid; ?>">
                               <?php endif; ?>
                                      <button type="submit"  class="btn btn-danger">搜索</button>
                        </form>
                            <div style="clear: both"></div>
                            <script>
                                    ;!function(){
                                    laydate({
                                       elem: '#demo',
                                       format: 'YYYY-MM-DD',
                                      min: '2010-01-01 00:00:00', //设定最小日期为当前日期
                                      max: laydate.now(), //最大日期
                                    })
                                    laydate({
                                      elem: '#demo1',
                                      format: 'YYYY-MM-DD',
                                      min: '2010-01-01 00:00:00', //设定最小日期为当前日期
                                      max: laydate.now(), //最大日期
                                    })


                                    }();
                                </script>
                            
				<div>
					<div style="margin-left:20px;">充值总金额：<b style="color:red;"><?php echo $czMoney; ?></b>&nbsp;&nbsp;&nbsp;&nbsp;后台总退分：<b style="color:red;"><?php echo $ztMoney; ?></b></div>
					<table class="table" >
						<thead>
							<tr>
								<th>编号</th>
						    	<th>用户ID</th>
								<th><font>金额</font></th>
								<th>时间</th>
								<th>类型</th>
								<th style="width:200px">备注</th>
								<th>操作</th>
							</tr>
						</thead>
						<tbody>
							<?php if(empty($list) || (($list instanceof \think\Collection || $list instanceof \think\Paginator ) && $list->isEmpty())): ?>
							<tr>
								<td colspan='7' style="text-align: center">暂无记录<br>
							</tr>
							<?php endif; if(is_array($list) || $list instanceof \think\Collection || $list instanceof \think\Paginator): $i = 0; $__LIST__ = $list;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
							<tr data-expanded="true">
									<td><?php echo $vo['id']; ?></td>
							   	    <td><?php echo $vo['user_id']; ?></td>
									<td><?php echo $vo['money']; ?></td>	
									<td><?php echo date("Y-m-d H:i:s",$vo['add_time']); ?></td>
									<td>
										<?php if($vo['type'] == 0): ?>
											<span class="label label-danger">后台操作</span>
										<?php elseif($vo['type'] == 1): ?>
											<span class="label label-info">支付宝</span>
										<?php elseif($vo['type'] == 2): ?>
											<span class="label label-success">QQ钱包</span>
										<?php elseif($vo['type'] == 3): ?>
											<span class="label label-warning">微信支付</span>
										<?php endif; ?>
									</td>
									<td style="color:red"><?php echo $vo['bz']; ?></td>
									<td>
										<?php if($vo['status'] == 1): ?>
											<span class="label label-danger">成功</span>
										<?php else: ?>
											<span class="label label-info">未成功</span>	
										<?php endif; ?>
									</td>
							</tr>

							<?php endforeach; endif; else: echo "" ;endif; ?>
						</tbody>
					</table>
					<?php echo $list->render(); ?>
				</div>
			</div>
		</div>

	</section>