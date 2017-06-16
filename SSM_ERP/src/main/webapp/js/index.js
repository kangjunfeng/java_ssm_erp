$(document).ready(function() {
	/* Schedule Manager Tree onClick Event */
	$('#scheduleMonitor').tree({
		onClick : function(node) {
			if ($('#scheduleMonitor').tree("isLeaf", node.target)) {
				var tabs1 = $("#tabs");
				var tab1 = tabs1.tabs("getTab", node.text);
				if (tab1) {
					tabs1.tabs("select", node.text);
				} else {
					tabs1.tabs('add', {
						title : node.text,
						href : node.attributes.url,
						closable : true,
						bodyCls : "content"
					});
				}
			}
		}
	});
		
	/* Device Manager Tree onClick Event */
	$('#deviceMonitor').tree({
		onClick : function(node) {
			/* debugger; */
			if ($('#deviceMonitor').tree("isLeaf", node.target)) {
				var tabs2 = $("#tabs");
				var tab2 = tabs2.tabs("getTab", node.text);
				if (tab2) {
					tabs2.tabs("select", node.text);
				} else {
					tabs2.tabs('add', {
						title : node.text,
						href : node.attributes.url,
						closable : true,
						bodyCls : "content"
					});
				}
			}
		}
	});
		
	/* Material Manager Tree onClick Event */
	$('#materialMonitor').tree({
		onClick : function(node) {
			if ($('#materialMonitor').tree("isLeaf", node.target)) {
			var tabs2 = $("#tabs");
				var tab2 = tabs2.tabs("getTab", node.text);
				if (tab2) {
					tabs2.tabs("select", node.text);
				} else {
					tabs2.tabs('add', {
						title : node.text,
						href : node.attributes.url,
						closable : true,
						bodyCls : "content"
					});
				}
			}
		}
	});
	
	/* qualify Manager Tree onClick Event */
	$('#qualifyMonitor').tree({
		onClick : function(node) {
			if ($('#qualifyMonitor').tree("isLeaf", node.target)) {
				var tabs1 = $("#tabs");
				var tab1 = tabs1.tabs("getTab", node.text);
				if (tab1) {
					tabs1.tabs("select", node.text);
				} else {
					tabs1.tabs('add', {
						title : node.text,
						href : node.attributes.url,
						closable : true,
						bodyCls : "content"
					});
				}
			}
		}
	});
	
	/* Technology Manager Tree onClick Event */
	$('#technologyMonitor').tree({
		onClick : function(node) {
			if ($('#technologyMonitor').tree("isLeaf", node.target)) {
				var tabs3 = $("#tabs");
				var tab3 = tabs3.tabs("getTab", node.text);
				if (tab3) {
					tabs3.tabs("select", node.text);
				} else {
					tabs3.tabs('add', {
						title : node.text,
						href : node.attributes.url,
						closable : true,
						bodyCls : "content"
					});
				}
			}
		}
	});
	
	/* Device Manager Tree onClick Event */
	$('#employeeMonitor').tree({
		onClick : function(node) {
			/* debugger; */
			if ($('#deviceMonitor').tree("isLeaf", node.target)) {
				var tabs2 = $("#tabs");
				var tab2 = tabs2.tabs("getTab", node.text);
				if (tab2) {
					tabs2.tabs("select", node.text);
				} else {
					tabs2.tabs('add', {
						title : node.text,
						href : node.attributes.url,
						closable : true,
						bodyCls : "content"
					});
				}
			}
		}
	});
	
	/* Sys Manager Tree onClick Event */
	$('#sysManager').tree({
		onClick : function(node) {
			if ($('#sysManager').tree("isLeaf", node.target)) {
				var tabs3 = $("#tabs");
				var tab3 = tabs3.tabs("getTab", node.text);
				if (tab3) {
					tabs3.tabs("select", node.text);
				} else {
					tabs3.tabs('add', {
						title : node.text,
						href : node.attributes.url,
						closable : true,
						bodyCls : "content"
					});
				}
			}
		}
	});	
})

var allItem = [
	["计划进度","订单管理","客户管理","产品管理","作业管理","生产计划管理","生产派工管理"], 
	["设备管理","设备台账","设备种类","设备例检","设备故障","设备维修"],
	["工艺监控","工艺","工艺要求","工艺计划","工序"],
	["物料监控","物料信息","物料收入","物料消耗"],
	["质量监控","不合格品管理","成品计量质检","成品计数质检","工序计量质检","工序计数质检"],
	["人员监控","部门管理","员工管理"]
];

function isContains(str, substr) {
	return new RegExp(substr).test(str);
}
		
//HomeFuncSearch
function doSearch(value){
	var subItem;
	var ifElseContain = false;
	for (var i = 0; i < allItem.length; i++) {
	for (var j = 0; j < allItem[i].length; j++) {
		subItem = allItem[i][j];
		if(isContains(subItem,value) && value!=""){
			ifElseContain=true;
			if(j==0){
				switch(i){
					case 0 : 
						$('#HomeFuncAccordion').accordion('select',allItem[0][0]);
						var node = $('#scheduleMonitor').tree('find',11);
						$('#scheduleMonitor').tree('expandTo', node.target).tree('select', node.target);
						break;
					case 1 :
						$('#HomeFuncAccordion').accordion('select',allItem[1][0]);
						var node = $('#deviceMonitor').tree('find',21);
						$('#deviceMonitor').tree('expandTo', node.target).tree('select', node.target);
						break;
					case 2 :
						$('#HomeFuncAccordion').accordion('select',allItem[2][0]);
						var node = $('#technologyMonitor').tree('find',31);
						$('#technologyMonitor').tree('expandTo', node.target).tree('select', node.target);
						break;
					case 3 :
						$('#HomeFuncAccordion').accordion('select',allItem[3][0]);
						var node = $('#materialMonitor').tree('find',41);
						$('#materialMonitor').tree('expandTo', node.target).tree('select', node.target);
						break;
					case 4 :
						$('#HomeFuncAccordion').accordion('select',allItem[4][0]);
						var node = $('#qualifyMonitor').tree('find',51);
						$('#qualifyMonitor').tree('expandTo', node.target).tree('select', node.target);
						break;
					case 5 :
						$('#HomeFuncAccordion').accordion('select',allItem[5][0]);
						var node = $('#employeeMonitor').tree('find',61);
						$('#employeeMonitor').tree('expandTo', node.target).tree('select', node.target);
						break;
					default:
						break; 
				}
			}else if(j>0){
				var k = (i+1)*10+j;
				switch(i){
					case 0 : 
						$('#HomeFuncAccordion').accordion('select',allItem[0][0]);
						var node = $('#scheduleMonitor').tree('find',k);
						$('#scheduleMonitor').tree('expandTo', node.target).tree('select', node.target);
						break;
					case 1 :
						$('#HomeFuncAccordion').accordion('select',allItem[1][0]);
						var node = $('#deviceMonitor').tree('find',k);
						$('#deviceMonitor').tree('expandTo', node.target).tree('select', node.target);
						break;
					case 2 :
						$('#HomeFuncAccordion').accordion('select',allItem[2][0]);
						var node = $('#technologyMonitor').tree('find',k);
						$('#technologyMonitor').tree('expandTo', node.target).tree('select', node.target);
						break;
					case 3 :
						$('#HomeFuncAccordion').accordion('select',allItem[3][0]);
						var node = $('#materialMonitor').tree('find',k);
						$('#materialMonitor').tree('expandTo', node.target).tree('select', node.target);
						break;
					case 4 :
						$('#HomeFuncAccordion').accordion('select',allItem[4][0]);
						var node = $('#qualifyMonitor').tree('find',k);
						$('#qualifyMonitor').tree('expandTo', node.target).tree('select', node.target);
						break;
					case 5 :
						$('#HomeFuncAccordion').accordion('select',allItem[5][0]);
						var node = $('#employeeMonitor').tree('find',k);
						$('#employeeMonitor').tree('expandTo', node.target).tree('select', node.target);
						break;
					default:
						break; 
				}
				
			}
			break;
		}
	}
	
	if(ifElseContain==true){
		break;
	}

	}
} 