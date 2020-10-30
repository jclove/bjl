<?php if (!defined('THINK_PATH')) exit(); /*a:2:{s:91:"D:\phpstudy_pro\WWW\baijias\admin\Admin\public/../application/index\view\commonse\toop.html";i:1541310253;s:89:"D:\phpstudy_pro\WWW\baijias\admin\Admin\public/../application/index\view\data\tixian.html";i:1541310253;}*/ ?>
<section id="main-content">
	<section class="wrapper">
		<ol class="breadcrumb">
			<li><a href="<?php echo Url('Index/index'); ?>"><span
					class="glyphicon glyphicon-home" aria-hidden="true"
					style="color: #f00"></span></a></li>
			<li class="active">提现统计</li>
		</ol>
		<div class="table-agile-info">
			<div class="panel panel-default">
                            
                            <!--- 搜索位置 -->
                    <div class="col-sm-6 input-group" style="margin-left: 200px">
					<form action='' method='get' style="float:left;margin:10px 0">
						<input style="width: 185px; height: 33px;" type="text"
							class="input-sm form-control" value='<?php echo \think\Request::instance()->get('keyword'); ?>'
							name="keyword" /> <span class="input-group-btn">
							<button class="btn btn-sm btn-default" type="submit">
								搜索(ID)</button>
						</span>
					</form>
					<form class="form-horizontal bucket-form" method="get" action="" style="margin-left:50px;float:left">
                               <select name="tx_type"  style="width:90px;height:30px;margin:10px 0"   >
                               		 <option  > - - - -</option>
                                       <option value="2" <?php if(\think\Request::instance()->get('tx_type') == 2): ?>selected<?php else: endif; ?>>佣金订单</option>   
                                       <option  value="1" <?php if(\think\Request::instance()->get('tx_type') == 1): ?>selected<?php else: endif; ?>>金额订单</option>
                               </select>
                               <button type="submit"  class="btn btn-danger">搜索</button>
                        </form>
					<form class="form-horizontal bucket-form" method="get" action="" style="float:right">
                               <select name="status"  style="width:90px;height:30px;margin:10px 0"   >
                               		 <option  > - - - -</option>
                                       <option value="3" <?php if(\think\Request::instance()->get('status') == 3): ?>selected<?php else: endif; ?>>待处理订单</option>
                                       <option value="2" <?php if(\think\Request::instance()->get('status') == 2): ?>selected<?php else: endif; ?>>失败订单</option>   
                                       <option  value="1" <?php if(\think\Request::instance()->get('status') == 1): ?>selected<?php else: endif; ?>>成功订单</option>
                               </select>
                               <button type="submit"  class="btn btn-danger">搜索</button>
                        </form>

			</div>
                  <div style="margin-left:20px;">提出总金额：<b style="color:red;"><?php echo $txMoney; ?></b></div>          
				<div>
					<table class="table" >
						<thead>
							<tr>
								<th>编号</th>
								<th data-breakpoints="xs">用户ID</th>
								<th>提现金额</th>
								<th>提现时间</th> 
								<th>提现类型</th> 
								<th data-breakpoints="xs sm md" data-title="DOB"><font>备注</font></th>
								<th>状态</th> 
							</tr>
						</thead>
						<tbody>
							<?php if(empty($list) || (($list instanceof \think\Collection || $list instanceof \think\Paginator ) && $list->isEmpty())): ?>
							<tr>
								<td colspan='7' style="text-align: center">暂无记录 </td>
							</tr>
							<?php endif; if(is_array($list) || $list instanceof \think\Collection || $list instanceof \think\Paginator): $i = 0; $__LIST__ = $list;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
							<tr data-expanded="true">
								<td><?php echo $vo['id']; ?></td>
								<td><font><?php echo $vo['user_id']; ?></font></td>
								<td><?php echo $vo['money']; ?></td>
								<td><?php echo date("Y-m-d H:i:s",$vo['add_time']); ?></td>
								<td>
								<?php if($vo['tx_type'] == 1): ?>
									<span class="label label-danger">余额提现</span>
								<?php else: ?>
									<span class="label label-warning">佣金提现</span>
								<?php endif; ?></td>
								<td><?php echo $vo['bz']; ?></td>
								<td>
									<?php if($vo['status'] == 1): ?>
										<span class="label label-danger">提现成功</span>
									<?php elseif($vo['status'] == 2): ?>
										<span class="label label-success">提现失败</span>
									<?php else: ?>
										<span style="color:red">待处理</span>
										<a href="<?php echo Url('Data/saveTx',array('id'=>$vo['id'],'status'=>2)); ?>" class="btn btn-xs btn-danger">拒绝提现</a>
										<a href="<?php echo Url('Data/saveTx',array('id'=>$vo['id'],'status'=>1)); ?>" class="btn btn-xs btn-info">完成提现</a>
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