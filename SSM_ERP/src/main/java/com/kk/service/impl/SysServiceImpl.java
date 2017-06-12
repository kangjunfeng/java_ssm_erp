package com.kk.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kk.dmain.customize.ActiveUser;
import com.kk.domain.authority.SysPermission;
import com.kk.domain.authority.SysPermissionExample;
import com.kk.domain.authority.SysUser;
import com.kk.domain.authority.SysUserExample;
import com.kk.mapper.authority.SysPermissionMapper;
import com.kk.mapper.authority.SysPermissionMapperCustom;
import com.kk.mapper.authority.SysUserMapper;
import com.kk.service.SysService;

/**
 * 认证和授权的服务接口实现
 *
 * @author  kk
 * @version  0.0.1
 */
@Service
public class SysServiceImpl implements SysService {

	@Autowired
	private SysUserMapper sysUserMapper;
	
	@Autowired
	private SysPermissionMapperCustom sysPermissionMapperCustom;
	
	@Autowired
	private SysPermissionMapper sysPermissionMapper;

	@Override
	public ActiveUser authenticat(String userName, String password) throws Exception {
		/**
		  * 认证过程：根据用户身份（账号）查询数据库，如果查询不到用户不存在,对输入的密码和数据库密码 进行比对，如果一致，认证通过
		  */
		//根据用户账号查询数据库
		SysUser sysUser = this.getSysUserByName(userName);
		
		if(sysUser == null){
			return null;
		}
		
		//对输入的密码 和数据库密码 进行比对，如果一致，认证通过
		if(!password.equals(sysUser.getPassword())){
			return null;
		}
		//得到用户id
		String userid = sysUser.getId();
		//根据用户id查询菜单 
		List<SysPermission> menus =this.findMenuListByUserId(userid);
		
		//根据用户id查询权限url
		List<SysPermission> permissions = this.findPermissionListByUserId(userid);
		
		//认证通过，返回用户身份信息
		ActiveUser activeUser = new ActiveUser();
		activeUser.setUserid(sysUser.getId());
		activeUser.setUsername(sysUser.getUsername());//用户名称
		
		//放入权限范围的菜单和url
		activeUser.setMenus(menus);
		activeUser.setPermissions(permissions);
		
		return activeUser;
	}

	public SysUser getSysUserByUserId(String userid) throws Exception {
		// TODO Auto-generated method stub
		SysUserExample sysUserExample = new SysUserExample();
		SysUserExample.Criteria criteria = sysUserExample.createCriteria();
		criteria.andUsernameEqualTo(userid);
		
		List<SysUser> list = sysUserMapper.selectByExample(sysUserExample);
		
		if(list!=null && list.size()==1){
			return list.get(0);
		}	
		
		return null;
	}

	@Override
	public SysUser getSysUserByName(String username) throws Exception {
		// TODO Auto-generated method stub
		
		SysUserExample sysUserExample = new SysUserExample();
		SysUserExample.Criteria criteria = sysUserExample.createCriteria();
		criteria.andUsernameEqualTo(username);
		
		List<SysUser> list = sysUserMapper.selectByExample(sysUserExample);
		
		if(list!=null && list.size()==1){
			return list.get(0);
		}	
		
		return null;
	}

	@Override
	public List<SysPermission> findMenuListByUserId(String userid) throws Exception {
		// TODO Auto-generated method stub
		return sysPermissionMapperCustom.findMenuListByUserId(userid);
	}

	@Override
	public List<SysPermission> findPermissionListByUserId(String userid) throws Exception {
		// TODO Auto-generated method stub
		String permission = this.sysPermissionMapperCustom.findPermissionByUserId(userid);
		if(permission != null){
			String[] permissionIds = permission.split(",");
			List<Long> ids = new ArrayList<Long>();
			for(int i=0;i<permissionIds.length;i++){
				ids.add(Long.valueOf(permissionIds[i]));
			}
			SysPermissionExample example = new SysPermissionExample();
			SysPermissionExample.Criteria criteria = example.createCriteria();
			criteria.andIdIn(ids);
			return sysPermissionMapper.selectByExample(example);
		}
		return null;
	}

}
