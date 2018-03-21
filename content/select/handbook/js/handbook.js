var network = localStorage.getItem("network");

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return decodeURI(r[2]); return null; //返回参数值
}
var scoll = getUrlParam('?scoll');
var mikey = getUrlParam('?mikey');



var str = ["行驶里程","燃油滤清器","机油滤清器","制动液","变速箱油","汽油添加剂","机油","火花塞","空调滤清器","防冻液","空气滤清器","转向助力油","正时皮带"]
$table = $("<table>");
$.each(str,function(key,value){
	$tr = $("<tr>");
	$("<td>").html(value).appendTo($tr);
	$tr.appendTo($table)
});
$(".contentleft").html($table)



$("#loading").show();
$.ajax({
	type:"post",
	url:network+"/Mattrio/MaintenanceCycleInterface/getMcTable",
	data:{
		"mikey":mikey,
		"mileage":scoll
	},
	dataType:"json",
	cache: false,
	crossDomain: true == !(document.all),
	success:function(data){
		// console.log(data);
		$("#loading").hide();
		if(data == [] || data.length == 0){
			$(".contentleft").hide();
			$(".contenttop").show();
			return false;
		}

		$.each(data,function(key,value){
				$("<td>").html(" "+value.mileage+"km ").appendTo(".tr");
				var $td0 = $("<td></td>");
				if(value.list[0][486] == "换"){
					$("<span>").html("换").appendTo($td0);
				}else{
					$("<span>").html("--").appendTo($td0);
				}
				$td0.appendTo(".tr0");

				var $td1 = $("<td></td>");
				if(value.list[1][1072] == "换"){
					$("<span>").html("换").appendTo($td1);
				}else{
					$("<span>").html("--").appendTo($td1);
				}
				$td1.appendTo(".tr1");

				var $td2 = $("<td></td>");
				if(value.list[5][3953] == "换"){
					$("<span>").html("换").appendTo($td2);
				}else{
					$("<span>").html("--").appendTo($td2);
				}
				$td2.appendTo(".tr2");

				var $td3 = $("<td></td>");
				if(value.list[10][1769] == "换"){
					$("<span>").html("换").appendTo($td3);
				}else{
					$("<span>").html("--").appendTo($td3);
				}
				$td3.appendTo(".tr3");

				var $td4 = $("<td></td>");
				if(value.list[4][3955] == "换"){
					$("<span>").html("换").appendTo($td4);
				}else{
					$("<span>").html("--").appendTo($td4);
				}
				$td4.appendTo(".tr4");

				var $td5 = $("<td></td>");
				if(value.list[2][3952] == "换"){
					$("<span>").html("换").appendTo($td5);
				}else{
					$("<span>").html("--").appendTo($td5);
				}
				$td5.appendTo(".tr5");

				var $td6 = $("<td></td>");
				if(value.list[9][1208] == "换"){
					$("<span>").html("换").appendTo($td6);
				}else{
					$("<span>").html("--").appendTo($td6);
				}
				$td6.appendTo(".tr6");

				var $td7 = $("<td></td>");
				if(value.list[7][760] == "换"){
					$("<span>").html("换").appendTo($td7);
				}else{
					$("<span>").html("--").appendTo($td7);
				}
				$td7.appendTo(".tr7");

				var $td8 = $("<td></td>");
				if(value.list[8][3954] == "换"){
					$("<span>").html("换").appendTo($td8);
				}else{
					$("<span>").html("--").appendTo($td8);
				}
				$td8.appendTo(".tr8");

				var $td9 = $("<td></td>");
				if(value.list[11][399] == "换"){
					$("<span>").html("换").appendTo($td9);
				}else{
					$("<span>").html("--").appendTo($td9);
				}
				$td9.appendTo(".tr9");

				// var $td10 = $("<td></td>");
				// if(value.list[6][4839] == "换"){
				// 	$("<span>").html("换").appendTo($td10);
				// }else{
				// 	$("<span>").html("--").appendTo($td10);
				// }
				// $td10.appendTo(".tr10");

				var $td11 = $("<td></td>");
				if(value.list[3][4838] == "换"){
					$("<span>").html("换").appendTo($td11);
				}else{
					$("<span>").html("--").appendTo($td11);
				}
				$td11.appendTo(".tr11");

				var $td12 = $("<td></td>");
				if(value.list[6][2691] == "换"){
					$("<span>").html("换").appendTo($td12);
				}else{
					$("<span>").html("--").appendTo($td12);
				}
				$td12.appendTo(".tr12");

		});
		$(".tr td:first").css("color","#E7161A");
		$.each($(".contentbottom td span"),function(key,value){
			if($(this).html() == "换"){
				$(this).css({"color":"#E7161A","font-size":"16px"})
			}else if($(this).html() == "--"){
				$(this).css({"color":"green","font-size":"16px"})
			}
		})
	},error:function(data){
		//console.log(data);
	}
})








