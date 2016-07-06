/**
 * Created by Administrator on 2015/8/14.
 */
window.onload=function(){
  /*
   *焦点轮播图方法
   */
  var slider=document.getElementById('slider');
  var sList=document.getElementById('slider-list');
  var arrowBtn=document.getElementById('arrow-btn').getElementsByTagName('li');
  var prev=document.getElementById('prev');
  var next=document.getElementById('next');
  var index=1; //存放当前图片对应的小圆点
  var animated=false;
  var interval=3000;
  var timer;

  function animate(offset){
    animated = true;
    var newLeft = parseInt(sList.style.left) + offset;
    var time=300; //动画时间
    var interval=10; //间隔时间
    var length=offset/(time/interval); //每次位移的长度

    function go(){//递归函数
      if((length < 0 && parseInt(sList.style.left) > newLeft) ||
        (length > 0 && parseInt(sList.style.left) < newLeft)){
          sList.style.left = length + parseInt(sList.style.left) + 'px';
          setTimeout(go,interval);//setTimeout 执行一次
      }else{
        animated=false;
        sList.style.left = newLeft + 'px';
        if(newLeft > -730){
          sList.style.left = -2920 + 'px';
        }
        if(newLeft < -2920){
          sList.style.left = -730 + 'px';
        }
      }
    }
    go();
  }
  function showButton(){
    for(i=0;i<arrowBtn.length;i++){
      if(arrowBtn[i].className == 'arrow-on'){
        arrowBtn[i].className = '';
        break;
      }
    }
    arrowBtn[index-1].className = 'arrow-on';
  }
  //箭头点击切换
  prev.onclick = function(){
    if(animated){
      return;
    }
    if(index == 1){ //当到第1张图片时再点击将index重置为4，即返回最后一张图片
      index = 4;
    }else{
      index -= 1;
    }
    showButton();
    animate(730);
  }
  next.onclick = function(){
    if(animated){
      return;
    }
    if(index == 4){
      index = 1;
    }else{
      index += 1;
    }
    showButton();
    animate(-730);
  }
  //小圆点悬浮切换
  for(var i = 0;i < arrowBtn.length;i++){
    arrowBtn[i].onmouseover = function(){
      if (animated) {
        return;
      }
      if(this.className == 'arrow-on')
        return;
      var myIndex = parseInt(this.getAttribute('index'));
      var offset = -730 * (myIndex - index);
      animate(offset);
      index = myIndex;
      showButton();
    }
  }
  //自动播放
  function play(){
    timer=setInterval(function(){next.onclick();},interval);
  }
  function stop(){
    clearInterval(timer);//清除定时器
  }
  slider.onmouseover=stop;
  slider.onmouseout=play;
  play();

  /*
   *侧边树形主导航菜单
   */
//  var ilist = document.getElementById('side-menu').getElementsByClassName('item-li');
//  var h=document.getElementById('side-menu').offsetTop;
//  for(var c=0;c<ilist.length;c++){
//    ilist[c].onmouseover = function(){
//      var i = this.offsetTop;
//      //
//      //
//    }
//  }

  /*
   *选项卡切换方法
   */
  var ftab = document.getElementById("f-tab").getElementsByTagName("li");
  var main = document.getElementById("tab-content").getElementsByClassName("main");
  if(ftab.length != main.length)
    return;
  for(var i = 0;i<ftab.length;i++){
    ftab[i].id=i;
    ftab[i].onmouseover=function(){
      for(var j=0;j<ftab.length;j++){
        ftab[j].className = "";
        main[j].style.display = "none";
      }
      this.className = "on-2";
      main[this.id].style.display = "block";
    }
  }
//            var tid=document.getElementsByClassName("f-tab");
//            var tcid=document.getElementsByClassName("tab-content");
//            alert(tid.length);
//            for(var a=0,b=0;a<tid.length,b<tcid.length;a++,b++){
//                var ftab=tid[a].getElementsByTagName("li");
//                var main=tcid[b].getElementsByTagName("section");
//                if(ftab.length != main.length)
//                    return;
//                for(var i = 0;i<ftab.length;i++){
//                    ftab[i].id=i;
//                    ftab[i].onmouseover=function(){
//                        for(var j=0;j<ftab.length;j++){
//                            ftab[j].className = "";
//                            main[j].style.display = "none";
//                        }
//                        this.className = "on-2";
//                        main[this.id].style.display = "block";
//                    }
//                }
//            }
//               alert(main.length);
}
