var j = 5;
var left = document.getElementById("spanl");
var right = document.getElementById("spanr");
var choiceimgs = document.getElementById("choicesmallimg").children;
var pp0big = document.getElementById("pp0big");
var imglookbig = document.getElementById("bigger");
var i = 0;
left.onclick = function(){
    choiceimgs[i].style.border="2px solid white";
    i++;
    if(i == choiceimgs.length){
        i = i%choiceimgs.length;
    }
    choiceimgs[i].style.border="2px solid #ff9003";
    pp0big.src = "../images/pp"+i+".jpeg";
    imglookbig.src = "../images/pp"+i+".jpeg";
}
right.onclick = function(){
    choiceimgs[i].style.border="2px solid white";
    if(i == 0){
        i = choiceimgs.length-1;
    }
    else{
        i--;
    }
    choiceimgs[i].style.border="2px solid #ff9003";
    pp0big.src = "../images/pp"+i+".jpeg";
    imglookbig.src = "../images/pp"+i+".jpeg";
}
var btn150 = document.getElementById("btn150");
var btn200 = document.getElementById("btn200");
var choisnml = document.getElementById("choisnml");
btn150.onclick = function(){
    btn200.style.border = "1px solid white";
    btn200.style.backgroundImage = "url()";
    btn150.style.border = "1px solid #ff0655";
    btn150.style.backgroundImage = "url(../images/duigou.png)";
    choisnml.innerText = '"150ml"';
}
btn200.onclick = function(){
    btn150.style.border = "1px solid white";
    btn150.style.backgroundImage = "url()";
    btn200.style.border = "1px solid #ff0655";
    btn200.style.backgroundImage = "url('../images/duigou.png')";
    choisnml.innerText = '"200ml"'
}
var minusnum = document.getElementById("minusnum");
var addnum = document.getElementById("addnum");
var numberall = document.getElementById("numberall");
var temp = 1;
minusnum.onclick = function(){
    if(temp == 1){
        alert("已为起始数量！");
    }
    else{
        temp--;
        numberall.value = temp;
    }
}

addnum.onclick = function(){
    if(temp == j){
        alert("数量已达到最大值");
    }
    else{
        temp++;
        numberall.value = temp;
    }
}
var max_1 = document.getElementById("max_1");
var addcar = document.getElementById("addcar");
var max = document.getElementById("max");
addcar.onclick = function(){
    max_1.style.display ="block";
    max.style.opacity = "0.3";
}
var xbtn = document.getElementById("xbtn");
var fbtn2=document.getElementById('fbtn2');
xbtn.onclick = function(){
    max_1.style.display ="none"
    max.style.opacity = "1";
}
fbtn2.onclick=function(){
    max_1.style.display="none";
    max.style.opacity="1";
}

var appear = document.getElementById("appear");
var biggerbox = document.getElementById("biggerbox");
var box = document.getElementById("second");
var bigwhole = document.getElementById("bigwhole");
var fangdabiggerall = document.getElementById("fangdabiggerall");
var box_3 = document.getElementById("max");
var realbig = document.getElementById("realbig");
var kuaikuai=document.getElementById('kuaikuai');
kuaikuai.onmouseover = function(){
    appear.style.display = "block";
    biggerbox.style.display = "block";
}
kuaikuai.onmouseout = function(){
    appear.style.display = "none";
    biggerbox.style.display = "none";
}
kuaikuai.onmousemove = function(ev){
    var scrollPos;  
    if (window.pageYOffset) {  
    scrollPos = window.pageYOffset; }  
    else if (document.compatMode && document.compatMode != 'BackCompat')  
    { scrollPos = document.documentElement.scrollTop; }  
    else if (document.body) { scrollPos = document.body.scrollTop; }  
    var oL=ev.clientX-box.offsetLeft-bigwhole.offsetLeft-fangdabiggerall.offsetLeft-box_3.offsetLeft-realbig.offsetLeft-appear.offsetWidth/2;
    var oT=ev.clientY+scrollPos-box.offsetTop-bigwhole.offsetTop-fangdabiggerall.offsetTop-box_3.offsetTop-realbig.offsetTop-appear.offsetHeight/2;
    var oMaxw=kuaikuai.offsetWidth-appear.offsetWidth;
    var oMaxh=kuaikuai.offsetHeight-appear.offsetHeight;
     
    oL=oL>oMaxw?oMaxw:oL<0?0:oL;
    oT=oT>oMaxh?oMaxh:oT<0?0:oT;
    appear.style.left=oL+'px';
    appear.style.top=oT+'px';


    var scale = imglookbig.offsetHeight/kuaikuai.offsetHeight;
    imglookbig.style.left = -oL*scale+'px';
    imglookbig.style.top = -oT*scale+'px';
    
}


     