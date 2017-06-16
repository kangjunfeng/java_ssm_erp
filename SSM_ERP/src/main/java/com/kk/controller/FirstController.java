package com.kk.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.kk.domain.authority.SysPermission;
import com.kk.domain.customize.ActiveUser;
import com.kk.service.SysService;


@Controller
@RequestMapping("/first")
public class FirstController {
	@Autowired
	private SysService sysService;
	
	@RequestMapping("/login")
	public String login()throws Exception{
		return "login";
	}
	
	@RequestMapping("/validatecode")
	public String verify()throws Exception{
		return "validate/validatecode";
	}
	
	//首页
	@RequestMapping("/index")
	public String home(HttpSession session, Model model)throws Exception{
		//从shiro的session中取activeUser
//		Subject subject = SecurityUtils.getSubject();
//		//取身份信息
//		ActiveUser activeUser = (ActiveUser) subject.getPrincipal();
//		
//		List<SysPermission> permissionList = null;
//		
//		try {
//			permissionList = sysService.findPermissionListByUserId(activeUser.getUserid());
//		} catch (Exception e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		
//		List<String> sysPermissionList = new ArrayList<String>();
//		if(permissionList != null){
//			for(int i=0;i<permissionList.size();i++){
//				sysPermissionList.add(permissionList.get(i).getPercode());
//			}
//		}
//
//		//通过model传到页面
//		model.addAttribute("activeUser", activeUser);
//		/*model.addAttribute("sysPermissionsList", sysPermissionsList);*/
//		
//		//session
//		session.setAttribute("sysPermissionList", sysPermissionList);
		
		return "index";
	}
}
