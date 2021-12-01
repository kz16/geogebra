window.onload = function() {
    for(var i=0; i<10; i++){
        var si = i.toString();
        var ggbid = document.getElementById("ggb"+si);
        if(ggbid){
            var para={
                "width":ggbid.offsetWidth, 
                "height":ggbid.offsetHeight,
                "enableRightClick":false, 
                "enableShiftDragZoom":false, 
                "enableLabelDrags":false, 
                "borderColor":"white", 
                "ggbBase64":ggbid.innerText
            };
            var applet = new GGBApplet(para, '5.0');
            applet.inject('ggb'+si);
        }
    }
}; 