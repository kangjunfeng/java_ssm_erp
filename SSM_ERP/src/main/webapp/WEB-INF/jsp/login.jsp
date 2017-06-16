<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ include file="/WEB-INF/jsp/commons/common_js.jsp"%>
<%
	String path = request.getContextPath(); 
	String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/"; 	
%>
<html>
<head>
<base href="<%=basePath %>"/>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="copyright" content="Copyright 2017" />
<meta name="Author" content="KK" />
<meta name="keywords" content="生产管理系统--生产进度,设备管理,工艺监控,物料监控,人员监控,质量监控" />
<meta name="description" content="制造装备物联及生产管理中间件/系统登陆页面" />
<title>制造物联中间件系统登录页面</title>
<link rel="stylesheet" type="text/css" href="css/login/style.css" />
<link rel="stylesheet" type="text/css" href="css/login/login.css" />
<script type="text/javascript" src="js/login/placeholder.js"></script>
<script type="text/javascript" src="js/login/login.js"></script>
</head>

<body>
	<div class="main">
		<div class="header hide"> 管理系统  </div>
		<div class="content">
			<div class="title hide">管理系统登录</div>
			<form name="login" action="#" method="post">
				<fieldset>
					<!--USERNAME -->
					<div>
						<div class="input">
							<input class="input_all name" name="name" id="username" placeholder="用户名" type="text"
								   onFocus="this.className='input_all name_now';"
								   onBlur="this.className='input_all name'" maxLength="24" />
						</div>
						<div id="username_span"style="display:none;padding-bottom:7px;">
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id="userspan"></span>
						</div>
							
					</div>
					
					<!-- PASSWORD -->
					<div>
						<div class="input">
							<input class="input_all password" name="password" id="password" type="password"
								   placeholder="密码" onFocus="this.className='input_all password_now';"
								   onBlur="this.className='input_all password'" maxLength="24" />
						</div>
						
						<div id="password_span"style="display:none;margin:0 0 0 0;padding:0 0 0 0;">
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id="passwordspan"></span>
						</div>
	
						<div style="margin-bottom:12px">
							<div id="randiv" style="display:block;margin-left:98px;">
								验证码：<input id="randomcode" name="randomcode" size="8" />
								<img id="randomcode_img" src="${basePath}first/validatecode" alt=""
									width="56" height="20" align='absMiddle' /> 
								<a href="javascript:randomcode_refresh()">刷新</a>
							</div>
							<div style="margin-left:98px;">
								<span id="randomcode_span"></span>
							</div>
						</div>
					</div>
					
		  			<!-- REMEMBERME -->					
					<div class="checkbox">
						<input type="checkbox" name="remember" id="remember" checked="checked"/>
						<label for="remember">
							<span>记住密码</span>
						</label>
						<span id="errorspan" style="margin-left:88px;"></span>
					</div>

					<!-- LOGIN -->
					<!-- 
						<div class="enter">
						<input class="button hide" name="submit" type="submit" value="登录" />
						</div>  
					-->
					<div>
						<a  id="login" class="button hide">登录</a>
					</div> 
				</fieldset>
			</form>
		</div>
	</div>
</body>
</html>