var label=document.getElementById("color").addEventListener("mouseover", labelOn);
var label=document.getElementById("color").addEventListener("mouseout", labelOff);
var a=document.getElementById("sl");
function labelOn(){
    a.style.color="#C70039"
    a.style.textDecorationColor="#C70039"
}
function labelOff(){
    a.style.color="black"
    a.style.textDecorationColor="black"
}
/*---------------------------------------------------------*/
document.getElementById("pop-btn").addEventListener("mouseover", popOver);
function popOver(){
    document.getElementById("pop-btn").style.letterSpacing="1px"
    document.getElementById("pop-btn").style.color="aqua"
    document.getElementById("pop-btn").style.border="aqua 2px solid"
    document.getElementById("pop-btn").style.width="170px"
    document.getElementById("pop-btn").style.left="520px"
    document.getElementById("s2").style.left="335px"
    document.getElementById("s3").style.left="765px"
    document.getElementById("solo-1").style.top="185px"
    document.getElementById("solo-2").style.top="465px"
}
document.getElementById("pop-btn").addEventListener("mouseout", NOTpopOver);
function NOTpopOver(){
    document.getElementById("pop-btn").style.letterSpacing="2px"
    document.getElementById("pop-btn").style.color="black"
    document.getElementById("pop-btn").style.border="black 2px solid"
    document.getElementById("pop-btn").style.width="160px"
    document.getElementById("pop-btn").style.left="525px"
    document.getElementById("s2").style.left="350px"
    document.getElementById("s3").style.left="750px"
    document.getElementById("solo-1").style.top="200px"
    document.getElementById("solo-2").style.top="450px"
}
/*---------------------------------------------------------*/
document.getElementById("email").addEventListener("focus", focused);
function focused(){
    document.getElementById("label-email").style.top="-10px"
    document.getElementById("label-email").style.left="5px"
    document.getElementById("label-email").style.opacity="1"
}
document.getElementById("email").addEventListener("blur", blured);
function blured(){
    document.getElementById("label-email").style.top="15px"
    document.getElementById("label-email").style.left="20px"
    document.getElementById("label-email").style.opacity=".3"
}
/*---------------------------------------------------------*/
const hamburger_menu_icon_bottom=document.getElementById("hmib");
var hamburger_det=document.getElementById("empty").addEventListener("mouseover", hovered);
var hamburger_det=document.getElementById("empty").addEventListener("mouseout", nothovered);
function hovered(){
    hamburger_menu_icon_bottom.style.transform="scaleX(0.5)"
    hamburger_menu_icon_bottom.style.transformOrigin="4px"
    hamburger_menu_icon_bottom.style.left="40px"
}
function nothovered(){
    hamburger_menu_icon_bottom.style.transform="scaleX(1)"
}
/*---------------------------------------------------------*/
document.getElementById("det").addEventListener("mouseover", det)
function det(){
    document.getElementById("fake").style.border="1px #C70039 solid"
}
document.getElementById("det").addEventListener("mouseout", det2)
function det2(){
    document.getElementById("fake").style.border="1px black solid"
}
document.getElementById("cb").addEventListener("mouseover", det3)
function det3(){
    document.getElementById("fake").style.border="1px #C70039 solid"
}
document.getElementById("cb").addEventListener("mouseout", det4)
function det4(){
    document.getElementById("fake").style.border="1px black solid"
}
/*---------------------------------------------------------*/
document.getElementById("det").addEventListener("click", check)
function check(){
    if (document.getElementById("checkbox").checked == true){
        document.getElementById("checkbox").checked = false
    }else{
        document.getElementById("checkbox").checked = true
    }
}
/*---------------------------------------------------------*/
document.getElementById("ext").addEventListener("click", extClick)
function extClick(){
    document.getElementById("s-body").style.left="-50%"
    document.getElementById("s-body").style.transition="left .3s"
    document.getElementById("s-blur").style.opacity="0"
    document.getElementById("s-blur").style.transition="opacity .5s"
    setTimeout(index, 500)
    function index(){
        document.getElementById("s-blur").style.zIndex="-1"
    }
}
document.getElementById("empty").addEventListener("click", listClick)
function listClick(){
    document.getElementById("s-body").style.left="1.8%"
    document.getElementById("s-body").style.transition="left .5s .2s"
    document.getElementById("s-blur").style.opacity=".7"
    document.getElementById("s-blur").style.zIndex="10"
}
document.getElementById("s-blur").addEventListener("click", blurClick)
function blurClick(){
    document.getElementById("s-body").style.left="-50%"
    document.getElementById("s-body").style.transition="left .3s"
    document.getElementById("s-blur").style.opacity="0"
    document.getElementById("s-blur").style.transition="opacity .5s"
    setTimeout(index, 500)
    function index(){
        document.getElementById("s-blur").style.zIndex="-1"
    }
}
/*---------------------------------------------------------*/
document.getElementById("p-ext").addEventListener("click", pExtClick)
function pExtClick(){
    document.getElementById("p-blur").style.opacity="0"
    document.getElementById("p-blur").style.transition="opacity .5s"
    document.getElementById("p-body").style.height="0vh"
    document.getElementById("p-body").style.transition="height .2s"
    setTimeout(index, 500)
    setTimeout(display, 100)
    function index(){
        document.getElementById("p-blur").style.zIndex="-1"
    }
    function display(){
        document.getElementById("content").style.display="none"
    }
}
document.getElementById("pop-btn").addEventListener("click", pListClick)
function pListClick(){
    document.getElementById("p-blur").style.opacity=".7"
    document.getElementById("p-blur").style.zIndex="10"
    document.getElementById("p-body").style.height="90vh"
    document.getElementById("p-body").style.transition="height .5s .2s"
    setTimeout(display, 320)
    function display(){
        document.getElementById("content").style.display="block"
    }
}
document.getElementById("p-blur").addEventListener("click", pBlurClick)
function pBlurClick(){
    document.getElementById("p-blur").style.opacity="0"
    document.getElementById("p-blur").style.transition="opacity .5s"
    document.getElementById("p-body").style.height="0vh"
    document.getElementById("p-body").style.transition="height .2s"
    setTimeout(index, 500)
    setTimeout(display, 100)
    function index(){
        document.getElementById("p-blur").style.zIndex="-1"
    }
    function display(){
        document.getElementById("content").style.display="none"
    }
}