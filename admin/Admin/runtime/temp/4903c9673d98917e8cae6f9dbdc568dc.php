<?php if (!defined('THINK_PATH')) exit(); /*a:2:{s:91:"D:\phpstudy_pro\WWW\baijias\admin\Admin\public/../application/index\view\commonse\toop.html";i:1541310253;s:92:"D:\phpstudy_pro\WWW\baijias\admin\Admin\public/../application/index\view\config\guanliy.html";i:1541310253;}*/ ?>
<section id="main-content">
	<section class="wrapper">
		<ol class="breadcrumb">
			<li><a href="<?php echo Url('Index/index'); ?>"><span
					class="glyphicon glyphicon-home" aria-hidden="true"
					style="color: #f00"></span></a></li>
			<li class="active">管理员列表</li>
		</ol>
		<div class="table-agile-info">
			<div class="panel panel-default">
                            
                            <!--- 搜索位置 -->
                    <div class="col-sm-3" style="margin-left: 600px">
				<div class="input-group">
					<form action='' method='get'>
						<input style="width: 185px; height: 33px" type="text"
							class="input-sm form-control" value='<?php echo \think\Request::instance()->get('keyword'); ?>'
							name="keyword" /> <span class="input-group-btn">
							<button class="btn btn-sm btn-default" type="submit">
								搜索(ID)</button>
						</span>
					</form>
				</div>

			</div>
                            
				<div>
					<table class="table" ui-jq="footable"
						ui-options="{
        &quot;paging&quot;: {
          &quot;enabled&quot;: true
        },
        &quot;filtering&quot;: {
          &quot;enabled&quot;: true
        },
        &quot;sorting&quot;: {
          &quot;enabled&quot;: true
        }}">
						<thead>
							<tr>
							<th>编号</th>
								<th data-breakpoints="xs">昵称</th>
								<th>类型</th>
								 <th>操作</th> 
							</tr>
						</thead>
						<tbody>
							<?php if(empty($list) || (($list instanceof \think\Collection || $list instanceof \think\Paginator ) && $list->isEmpty())): ?>
							<tr>
								<td colspan='4' style="text-align: center">暂无记录<br>
									<br> <a href="<?php echo Url('Index/index'); ?>"><button type="button"
											class="btn btn-danger">
											<font>返回</font>
										</button></a></td>
							</tr>
							<?php endif; if(is_array($list) || $list instanceof \think\Collection || $list instanceof \think\Paginator): $i = 0; $__LIST__ = $list;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
							<tr data-expanded="true">
								<td><?php echo $vo['id']; ?></td>
								<td><font><?php echo $vo['username']; ?></font></td>
								<td><?php if($vo['status'] == 0): ?>普通管理员<?php else: ?><span style="color:red">超级管理员</span><?php endif; ?></td>
								<td>
								<?php if($vo['status'] == 0): ?>
								<a href="<?php echo Url('Config/delete',array('id'=>$vo['id'])); ?>">删除</a>
								<?php else: endif; ?>
								</td>
							</tr>

							<?php endforeach; endif; else: echo "" ;endif; ?>
						</tbody>
					</table>
					
				</div>
			</div>
		</div>

	</section>