<%
	String path_css = request.getContextPath();
	String basePath_css = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path_css;
%>

<link rel="stylesheet" type="text/css" href="<%=basePath_css %>/js/jquery/jquery-easyui-1.5.1/themes/default/easyui.css"/>
<link rel="stylesheet" type="text/css" href="<%=basePath_css %>/js/jquery/jquery-easyui-1.5.1/themes/icon.css"/>
<link rel="stylesheet" type="text/css" href="<%=basePath_css %>/css/index/index.css"/>