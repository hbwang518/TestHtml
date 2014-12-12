

function showFrameDiv(url) {
    $("#contentFrame").width($("body").width());
    //$("#contentFrame").height(1100);
    $("#goToTopDiv").hide();
    $("#mainDiv").hide();
    $("#frameDiv").show();
    $("#contentFrame").attr("src", url);

    $("body").scrollTop(0);
    $("body").css("overflow", "hidden");
    $("frameDiv").height($(window).height() - 220);
    //alert($(window).height());
}

function SetWinHeight(obj)
{
    var win=obj;
    if (document.getElementById) {
        
        if (win && !window.opera) {
            
            if (win.contentDocument && win.contentDocument.body.offsetHeight) {
                //alert(win.contentDocument.body.offsetHeight);
                
                win.height = win.contentDocument.body.offsetHeight + 100;
                win.width = win.contentDocument.body.offsetWidth;
                $(win.contentDocument.body).css("overflow", "hidden");
                //alert($("#innerButton", win.contentDocument).val());

                //alert($(".navigational", win.contentDocument).height());
                //alert($(".navigational", win.contentDocument).length > 0); 
                //alert($("input#innerButton", win.contentDocument).length > 0); 
                //alert($("input#innerButton", win.contentDocument).val());
                $("input#innerButton", win.contentDocument).click(function () {
                    alert("out innter button click");
                });
                alert("aa");
            }
            else if (win.Document && win.Document.body.scrollHeight) {
                alert("bb");
                win.height = win.Document.body.scrollHeight;
            }
        }
    }
}