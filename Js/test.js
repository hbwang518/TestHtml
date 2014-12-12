//$(function () {
//    $("#testDiv").css("background-color", "red");
//    alert($("body").height());
//    $("#handinFrame").height($("#handinFrame").contents().find("html").height());
//    $("#handinFrame").height($("#handinFrame").contents().find("html").height());


//})

$(function () {
    //$("#testDiv").css("background-color", "red");
    //alert($("body").width() + "--" + $("body").height());
    //$("#frame2").width($("body").width());
    //$("#frame2").height($("body").height());
    alert("begin");
    alert($("#banner", parent.parent.document.body).contents().find("#user-tabs > ul > li.selected").attr("id"));
    alert(window.parent.parent.Fronter.Util.Config.get('customerUser'));
    alert("end");

    alert(document.cookie);

    var idArray = "";
    $("input:checkbox[id='id1234']", "#frame3").each(function () {
        var idStr = $(this).attr("id");
        idStr = idStr.substr("2");
        idArray = "," + idStr;
    });
    if (idArray.length > 0) {
        idArray = idArray.substr(1);
    }

    alert(idArray);
});

