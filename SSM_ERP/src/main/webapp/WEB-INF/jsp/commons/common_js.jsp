<%@ taglib uri="http://java.sun.com/jsp/jstl/core"  prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt"  prefix="fmt"%>

<%
	String path_js = request.getContextPath();
	String basePath_js = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path_js;
%>

<script type="text/javascript" src="<%=basePath_js %>/js/jquery/common.js"></script>

<script type="text/javascript" src="<%=basePath_js %>/js/jquery/datagrid-filter.js"></script>

<script type="text/javascript" src="<%=basePath_js %>/js/jquery/jquery-easyui-1.5.1/jquery.min.js"></script>

<script type="text/javascript" src="<%=basePath_js %>/js/jquery/jquery-easyui-1.5.1/jquery.easyui.min.js"></script>

<script type="text/javascript" src="<%=basePath_js %>/js/jquery/jquery-easyui-1.5.1/locale/easyui-lang-zh_CN.js"></script>

