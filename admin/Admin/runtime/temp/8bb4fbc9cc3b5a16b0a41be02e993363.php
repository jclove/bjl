<?php if (!defined('THINK_PATH')) exit(); /*a:2:{s:91:"D:\phpstudy_pro\WWW\baijias\admin\Admin\public/../application/index\view\commonse\toop.html";i:1541310253;s:91:"D:\phpstudy_pro\WWW\baijias\admin\Admin\public/../application/index\view\config\config.html";i:1541310253;}*/ ?>
<section id="main-content">
		<section class="wrapper">
			<ol class="breadcrumb">
				<li><a href="<?php echo Url('Index/index'); ?>"><span class="glyphicon glyphicon-home" aria-hidden="true" style="color:#f00"></span></a></li>
				<li class="active"><font><font>系统配置</font></font></li>
			</ol>
			<div class="typo-agile">

				<div class="bs-docs-example">
					<table class="table table-hover">
						<thead>
							<tr>
								<th data-breakpoints="xs"><font>ID</font></th>
								<th><font>配置名称(<b style="color:red;">庄,闲,和 三者概率 相加 务必 等于100%</b>)</font></th>
								<th data-breakpoints="xs"><font>操作</font></th>
							</tr>
						</thead>
						<?php if(is_array($url) || $url instanceof \think\Collection || $url instanceof \think\Paginator): $i = 0; $__LIST__ = $url;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
						<tr data-expanded="true">
							<td><?php echo $vo['id']; ?></td>
							<td><?php echo $vo['name']; ?></td>
							<td><?php echo $vo['values']; ?>
								 <span	style="color: #ccc; font-size: 20px">/</span>
									 <a href="<?php echo Url('Config/add',array('id'=>$vo['id'])); ?>">
									<span class="label label-info">修改</span></a>
							</td>
						</tr>
						<?php endforeach; endif; else: echo "" ;endif; if(is_array($order) || $order instanceof \think\Collection || $order instanceof \think\Paginator): $i = 0; $__LIST__ = $order;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
						<tr data-expanded="true">
							<td><?php echo $vo['id']; ?></td>
							<td><?php echo $vo['name']; ?></td>
							<td><?php echo $vo['values']; ?>
								 <span	style="color: #ccc; font-size: 20px">/</span>
									 <a href="<?php echo Url('Config/add',array('id'=>$vo['id'])); ?>">
									<span class="label label-info">修改</span></a>
							</td>
						</tr>
						<?php endforeach; endif; else: echo "" ;endif; if(is_array($system) || $system instanceof \think\Collection || $system instanceof \think\Paginator): $i = 0; $__LIST__ = $system;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
						<tr data-expanded="true">
							<td><?php echo $vo['id']; ?></td>
							<td><?php echo $vo['name']; ?></td>
							<td>
								<?php if($vo['values'] == 1): ?>
									<span class="label label-success">开启中</span>
								<?php else: ?>
									<span class="label label-danger">关闭中</span>
								<?php endif; ?>
								 <span	style="color: #ccc; font-size: 20px">/</span>
									 <a href="<?php echo Url('Config/run1',array('id'=>$vo['id'])); ?>">
									<span class="label label-info">修改</span></a>
							</td>
						</tr>
						<?php endforeach; endif; else: echo "" ;endif; if(is_array($ststem) || $ststem instanceof \think\Collection || $ststem instanceof \think\Paginator): $i = 0; $__LIST__ = $ststem;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
						<tr data-expanded="true">
							<td><?php echo $vo['id']; ?></td>
							<td><?php echo $vo['name']; ?></td>
							<td><?php echo $vo['values']; ?>%
								
								 <span	style="color: #ccc; font-size: 20px">/</span>
									 <a href="<?php echo Url('Config/add',array('id'=>$vo['id'])); ?>">
									<span class="label label-info">修改</span></a>
							</td>
						</tr>
						<?php endforeach; endif; else: echo "" ;endif; if(is_array($rebate) || $rebate instanceof \think\Collection || $rebate instanceof \think\Paginator): $i = 0; $__LIST__ = $rebate;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
						<tr data-expanded="true">
							<td><?php echo $vo['id']; ?></td>
							<td><?php echo $vo['name']; ?></td>
							<td><?php echo $vo['values']; ?>%
								 <span	style="color: #ccc; font-size: 20px">/</span>
									 <a href="<?php echo Url('Config/add',array('id'=>$vo['id'])); ?>">
									<span class="label label-info">修改</span></a>
							</td>
						</tr>
						<?php endforeach; endif; else: echo "" ;endif; ?>
					</table>
				</div>
			</div>
		</section>