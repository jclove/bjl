<?php if (!defined('THINK_PATH')) exit(); /*a:2:{s:91:"D:\phpstudy_pro\WWW\baijias\admin\Admin\public/../application/index\view\commonse\toop.html";i:1541310253;s:87:"D:\phpstudy_pro\WWW\baijias\admin\Admin\public/../application/index\view\user\user.html";i:1541310252;}*/ ?>
<section id="main-content">
	<section class="wrapper">
		<ol class="breadcrumb">
			<li><a href="<?php echo Url('Index/index'); ?>"><span
					class="glyphicon glyphicon-home" aria-hidden="true"
					style="color: #f00"></span></a></li>
			<li class="active"><font><font>玩家列表</font></font></li>
		</ol>
		<div class="typo-agile">

			<div class="col-sm-6 input-group" style="margin-left: 200px">
					<form action='' method='get' style="float:left;">
						<input style="width: 185px; height: 33px" type="text"
							class="input-sm form-control" value='<?php echo \think\Request::instance()->get('keyword'); ?>'
							name="keyword" /> <span class="input-group-btn">
							<button class="btn btn-sm btn-default" type="submit">
								搜索(ID)</button>
						</span>
					</form>
					<form action='' method='get' style="float:right;">
						<input style="width: 185px; height: 33px" type="text"
							class="input-sm form-control" value='<?php echo \think\Request::instance()->get('name'); ?>'
							name="name" /> <span class="input-group-btn">
							<button class="btn btn-sm btn-default" type="submit">
								搜索(用户名)</button>
						</span>
					</form>
			</div>

			<div class="bs-docs-example">
				<table class="table table-hover">
					<thead>
						<tr>
							<th data-breakpoints="xs">ID</th>
							<th>昵称</th>	
							<th>用户余额</th>
							<th>下注详情</th>
							<th>上级ID</th>
							<th>充值</th> 
							<th ><font>账号状态</font></th>
							<!-- <th ><font>代理权限</font></th> -->
							<!-- <th ><font>喇叭权限</font></th> -->
							<th>减余额</th>
						</tr>
					</thead>

				<?php if(is_array($list) || $list instanceof \think\Collection || $list instanceof \think\Paginator): $i = 0; $__LIST__ = $list;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>

					<tr data-expanded="true">
						<td><font><?php echo $vo['id']; ?></font></td>
						<td style="width: 100px"><?php echo $vo['nickname']; ?></td>
						<td><?php echo $vo['user_money']; ?></td>
						<td><a href="<?php echo Url('User/xiang',array('id'=>$vo['id'])); ?>"><span
								class="label label-warning">查看</span></a>
						</td>
						<td>
							<p>一级：<?php echo $vo['first_parent_id']; ?>  / 二级：<?php echo $vo['second_parent_id']; ?></p>
							<p>三级：<?php echo $vo['three_parent_id']; ?>  /  四级：<?php echo $vo['four_parent_id']; ?></p>
							<p>五级：<?php echo $vo['five_parent_id']; ?>  /  六级：<?php echo $vo['six_parent_id']; ?></p>
							<p>七级：<?php echo $vo['seven_parent_id']; ?>  /  八级：<?php echo $vo['eight_parent_id']; ?></p>
							<p>九级：<?php echo $vo['nine_parent_id']; ?>  /  十级：<?php echo $vo['ten_parent_id']; ?></p>
						</td>
						<td> 
							<form class="form-horizontal bucket-form" method="post" action="">
								<input type="text" style="width: 60px; height: 30px;"
									name="chongz" /> 
									<input type="hidden" name="uid" value="<?php echo $vo['id']; ?>" />
								<button type="submit" class="btn btn-danger">充值</button>
							</form>
						</td> 
						<td><?php if($vo['state'] == 1): ?> <span
								class="label label-info">使用中</span> <?php else: ?><span
								class="label label-danger"> 已禁用 </span><?php endif; ?> <span
							style="color: #ccc; font-size: 20px">/</span> <a
							href="<?php echo Url('User/state',array('id'=>$vo['id'])); ?>"><span
								class="label label-info">修改</span></a></td>
						<td> 
							<form class="form-horizontal bucket-form" method="post" action="<?php echo Url('User/jianqian'); ?>">
								<input type="text" style="width: 60px; height: 30px;"
									name="chongz" /> <input type="hidden" name="uid"
									value="<?php echo $vo['id']; ?>" />
								<button type="submit" class="btn btn-danger">减</button>
							</form>
						</td> 	
					</tr>
					<?php endforeach; endif; else: echo "" ;endif; ?>
					</tbody>
				</table>
				<?php echo $list->render(); ?>
			</div>
		</div>
	</section>