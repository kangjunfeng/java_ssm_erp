package com.kk.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/first")
public class FirstController {

	@RequestMapping("/login")
	public String login()throws Exception{
		return "login";
	}
	
	@RequestMapping("/index")
	public String index()throws Exception{
		return "index";
	}
}
