var bg_strech = "/blog/images/bg/strech.svg"
var bg_top = "/blog/images/bg/top.svg"
var bg_bottom = "/blog/images/bg/bottom.svg"
var bg_scroll = "/blog/images/bg/scroll.svg"

function  background(){
	var container = $("<div>").attr("style", "left: 0px; top: 0px; overflow: hidden; margin: 0px; padding: 0px; z-index: -999999; position: fixed; width: 100%;  height: 100%;").attr("id","background");
	var strech = $("<img>").attr("style", "width: 100%; height: 100%; left: 0px; top: 0px;").attr("id","bg_strech").attr("src",bg_strech);
	var top = $("<img>").attr("style","position: absolute; margin: 0px; padding: 0px; border: none; max-height: none; max-width: none; z-index: -999990; width: 100%; left: 0px; top: 0px;").attr("id","bg_top").attr("src",bg_top);
	var bottom = $("<img>").attr("style"," margin: 0px; padding: 0px; border: none; max-height: none; max-width: none; z-index: -999990; width: 100%; left: 0px; bottom: 0px;").attr("id","bg_bottom").attr("src",bg_bottom);
	var scroll = $("<img>").attr("style","position: fixed; margin: 0px; padding: 0px; border: none; max-height: none; max-width: none; z-index: -999980; width: 100%; left: 0px; top: 0px;").attr("id","bg_scroll").attr("src",bg_scroll);

	if($("#post-flg").length>0){
		var idx = random(backArray.length - 1);
		//var idx = backArray.length - 1;
		$.backstretch(backRoot + backArray[idx]);
		//console.log("/images/background/" + backArray[idx]);
		$("body").append(bottom.css({"opacity":"0"}));
	}else{
		container.append(strech);
		$("body").append(container).append(bottom).append(top).append(scroll);
	}
}


