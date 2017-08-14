console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML =' NEW VALUE';
var img = document.getElementById('web');
 var marginleft = 0 ;
 function moveleft (){
     marginleft = marginleft + 1;
     img.style.marginleft = marginleft + 'px';

 }
 img.onclick = function(){
     var interval = setInterval(moveright,50);
 };