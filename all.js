//Dom抓取
var list=document.querySelector('.list');

function update(){
  var str=
  '<li><div class="xBox x-1">x</div><div class="xBox x-2">x</div>'+
  '<div class="xBox x-3">x</div><div class="xBox x-4">x</div>'+
  '<div class="titleBox"><h1>九九乘法表</h1>'+
  '<span>MULTIPLICATION CHART</span></div></li>';

  for(i=2; i<10; i++){
    var content=
    '<li><div class="numBox">'+i+ '</div><ul class="times left"><li>'+
    i+' x 1 = '+ (i*1) + '</li><li>'+ 
    i+' x 2 = '+ (i*2) + '</li><li>'+
    i+' x 3 = '+ (i*3) + '</li></ul><ul class=" times right"><li>'+


    i+' x 4 = '+ (i*4) + '</li><li>'+
    i+' x 5 = '+ (i*5) + '</li><li>'+
    i+' x 6 = '+ (i*6) + '</li><li>'+
    i+' x 7 = '+ (i*7) + '</li><li>'+
    i+' x 8 = '+ (i*8) + '</li><li>'+
    i+' x 9 = '+ (i*9) + '</li></ul></li>';
    
    str+=content;
  }
  list.innerHTML=str;
}

update();