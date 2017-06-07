<%@ taglib uri="http://java.sun.com/jsp/jstl/core"  prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt"  prefix="fmt"%>
<%
	String basePath_js =request.getContextPath();
	String path_js = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+basePath_js;
 %>
 
<c:set var="baseurl" value="${pageContext.request.contextPath}/"/>

<script type="text/javascript" src="<%=path_js %>/js/jquery/jquery-easyui-1.4.1/jquery.min.js"></script>

<script type="text/javascript" src="<%=path_js %>/js/jquery/jquery-easyui-1.4.1/jquery.easyui.min.js"></script>

<script type="text/javascript" src="<%=path_js %>/js/jquery/common.js"></script>

<script type="text/javascript" src="<%=path_js %>/js/jquery/datagrid-filter.js"></script>

<script type="text/javascript" src="<%=path_js %>/js/jquery/jquery-easyui-1.4.1/locale/easyui-lang-zh_CN.js"></script>