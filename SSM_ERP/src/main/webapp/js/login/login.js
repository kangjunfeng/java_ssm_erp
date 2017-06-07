$("#login").click(function() {
	var uname = $("#username");
	var pwd = $("#password");
	var display = $("#randiv").css('display');
	var rcode = $("#randomcode");

	if (display == 'none') {
		if ($.trim(uname.val()) == "") {
			$('#username_span').css('display','block');
			$("#passwordspan").html("");
			$("#userspan")
					.html(
							"<font color='red'>用户名不能为空！</font>");
			uname.focus();
		} else if ($.trim(pwd.val()) == "") {
			$('#username_span').css('display','none');
			$('#password_span').css('display','block');
			$("#userspan").html("");
			$("#passwordspan").html(
					"<font color='red'>密码不能为空！</font>");
			pwd.focus();
		} else {
			$('#password_span').css('display','none');
			$("#userspan").html("");
			$("#passwordspan").html("");
			$
					.ajax({
						url : '${baseurl}ajaxLogin',// 跳转到 action  
						data : {
							username : uname.val(),
							password : pwd.val(),
						},
						type : 'post',
						cache : false,
						dataType : 'json',
						success : function(data) {
							if (data.msg == 'account_error') {
						console.log("account_erroe.");
								$("#errorspan")
										.html(
												"<font color='red'> 用户不存在！</font>");
								rcode_flag = 1;
								$("#randiv").show();
							} else if (data.msg == 'password_error') {
								$("#errorspan")
										.html(
												"<font color='red'> 密码错误！</font>");
								rcode_flag = 1;
								$("#randiv").show();
							} else if (data.msg == 'authentication_error') {
								$("#errorspan")
										.html(
												"<font color='red'> 您没有授权！</font>");
								rcode_flag = 1;
								$("#randiv").show();
							} else {
								location.href = "${baseurl}home";
							}
						},
						error : function() {
							// view("异常！");  
							alert("异常！");
						}
					});
		}
	} else {
		$("#errorspan").html("");
		if ($.trim(uname.val()) == "") {
			$("#passwordspan").html("");
			$("#userspan")
					.html(
							"<font color='red'>用户名不能为空！</font>");
			uname.focus();
		} else if ($.trim(pwd.val()) == "") {
			$("#userspan").html("");
			$("#passwordspan").html(
					"<font color='red'>密码不能为空！</font>");
			pwd.focus();
		} else if ($.trim(rcode.val()) == "") {
			$("#userspan").html("");
			$("#randomcode_span")
					.html(
							"<font color='red'>验证码不能为空！</font>");
			rcode.focus();
		} else {
			$("#userspan").html("");
			$("#passwordspan").html("");
			$("#randomcode_span").html("");
			$
					.ajax({
						url : '${baseurl}ajaxLogin',// 跳转到 action  
						data : {
							username : uname.val(),
							password : pwd.val(),
							randomcode : rcode.val(),
						},
						type : 'post',
						cache : false,
						dataType : 'json',
						success : function(data) {
							if (data.msg == 'account_error') {
								$("#errorspan")
										.html(
												"<font color='red'> 用户不存在！</font>");
								rcode_flag = true;
								randomcode_refresh();
							} else if (data.msg == 'password_error') {
								$("#errorspan")
										.html(
												"<font color='red'> 密码错误！</font>");
								rcode_flag = true;
								randomcode_refresh();
							} else if (data.msg == 'randomcode_error') {
								$("#errorspan")
										.html(
												"<font color='red'> 验证码错误！</font>");
								rcode_flag = true;
								randomcode_refresh();
							} else if (data.msg == 'authentication_error') {
								$("#errorspan")
										.html(
												"<font color='red'> 您没有授权！</font>");
								rcode_flag = true;
								randomcode_refresh();
							} else {
								location.href = "${baseurl}home";
							}
						},
						error : function() {
							// view("异常！");  
							alert("异常！");
						}
					});
		}
	}
});

//刷新验证码
//实现思路，重新给图片的src赋值，后边加时间，防止缓存
function randomcode_refresh() {
	$("#randomcode_img").attr('src','${baseurl}validatecode.jsp?time' + new Date().getTime());
}