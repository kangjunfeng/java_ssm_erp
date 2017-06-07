<%
	String basePath_css =request.getContextPath();
	String path_css = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+basePath_css;
 %>
 
<link rel="stylesheet" type="text/css" href="<%=path_css %>/js/jquery/jquery-easyui-1.4.1/themes/default/easyui.css"/>
<link rel="stylesheet" type="text/css" href="<%=path_css %>/js/jquery/jquery-easyui-1.4.1/themes/icon.css"/>
<link rel="stylesheet" type="text/css" href="<%=path_css %>/css/index/index.css"/>