var choices=[['手机','数码','影音','配件'],
			['电脑','网络','办公','打印'],
			['家电','厨卫','生活','个户'],
			['园艺','家具','家纺','家饰'],
			['彩妆','面部','身体','香水'],
			['男装','女装','内衣','其他'],
			['女包','男包','女鞋','男鞋'],
			['运动','户外','装备','服饰'],
			['儿童','婴儿','食品','玩具'],
			['乐器','家宠','收藏','鲜花'],
			['保健','理疗','药品','眼镜'],
			['果蔬','礼品','粮油','特产'],
			['文艺','生活','科技','教育'],]

var totalchoice=document.getElementById('totalchoice');
for(var i=0;i<13;i++){
	var trs=document.createElement('tr');
	totalchoice.appendChild(trs);
	for (var j = 0; j < 4; j++) {
		var td=document.createElement('td');
		td.setAttribute('width','42px');
		trs.appendChild(td);
		var a=document.createElement('a');
		a.href='#';
		td.appendChild(a);
		a.innerHTML=choices[i][j];
		a.setAttribute('class','choicesTxt');
	}
}

// 轮播图
function animate(obj,json,callback) {//json对应的是一种对象的格式
		clearInterval(obj.timer)
		obj.timer= setInterval(function () {
			var isStop=true;
			for (var attr in json) {
				if (attr=="opacity") {
				 var now=parseInt(getStyle(obj,attr)*100);
				}else{
					var now=parseInt(getStyle(obj,attr));
				}
				var speed=(json[attr]-now)/15;
				speed=speed>0?Math.ceil(speed):Math.floor(speed);
				if (attr=="opacity") {
				 	obj.style[attr]=(now+speed)/100;
				}else{
					obj.style[attr]=now+speed+'px';
				}
				var current=now+speed;
				if (json[attr]!==current) {
					isStop=false;
				} 
				if (isStop) {
				clearInterval(obj.timer)
				callback && callback();//判断要是传了callback，则调用callback
				}		
			}			
		},20);
	}
		function getStyle(obj,style) {	//获取某个元素的某个值
			if (getComputedStyle(obj)) {
				return getComputedStyle(obj)[style];
			}else{
				obj.currentStyle[style];
			}	
	}
var chongzhifeiyong=document.getElementById('chongzhifeiyong')
var chongzhifeiyongchilds=document.getElementById('chongzhifeiyong').children;
var duiyingqianshu=document.getElementById('duiyingqianshu');
chongzhifeiyong.onchange=function(){
	duiyingqianshu.innerHTML="¥"+this.value;
} 

window.onload=function(){
	var header=document.getElementsByClassName('header')[0];
	window.onscroll=function(){
		var st=document.documentElement.scrollTop || document.body.scrollTop;
		if(st>130){
			header.style.position='fixed';
		}
		else{
			header.style.position='static';
		}
	}
}