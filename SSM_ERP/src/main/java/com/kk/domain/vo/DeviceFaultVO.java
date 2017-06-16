package com.kk.domain.vo;

import com.kk.domain.DeviceFault;

public class DeviceFaultVO extends DeviceFault{
	
	private String deviceName;
	
	public String getDeviceName() {
		return deviceName;
	}

	public void setDeviceName(String deviceName) {
		this.deviceName = deviceName;
	}
}