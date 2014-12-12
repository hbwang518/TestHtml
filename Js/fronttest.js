function test() {

    alert("test button");

    //alert($("#btnbody", parent.parent.document.body).val());

    //alert($("#banner", parent.parent.document.body).contents().find("#btnBanner").val());

    //alert($("#banner", parent.parent.document.body).contents().find("#user-tabs > ul > li.selected").attr("id"));
    alert(document.cookie);
    alert(window.parent.parent.globalVar);
    //alett(window.parent.parent.Fronter.Util.Config.get('customerUser'));
    //alert(globalVar);
    //alert(Fronter.Util.Config.get('customerUser'));
}

var globalVar = "aaaa";

function frameLoaded(obj) {
    var src = $("#memberframe").attr("src");
    if (src.indexOf("http://cn.bing.com") > -1) {
        alert("globalVar" + globalVar);
        return;
    }
    var win = obj;
    var idArray = "";
    //alert($("#bdButton", win.contentDocument).attr("id"));
    alert("enter");
    $("input:checkbox[id^='id']", win.contentDocument).each(function () {
        var idStr = $(this).attr("id");
        idStr = idStr.substr("2");
        idArray = "," + idStr;
    });
    if (idArray.length > 0) {
        idArray = idArray.substr(1);
    }
    globalVar += idArray;
    $("#memberframe").attr("src", "http://cn.bing.com");    
    alert(idArray);
}