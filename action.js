var z=document.querySelectorAll(".e");
var i=0,i1=0;
var j=180,j1=180;
for(var i=0;i<4;i++)
{
  z[i].style.position='absolute';
}
setInterval(full,30);
function full()
{

  var x,y,x1,y1;
  x=6+13.5165*Math.cos(i*(Math.PI)/180);
  y=12+23.5165*Math.sin(i*(Math.PI)/180);
  x1=6+13.5165*Math.cos(j*(Math.PI)/180);
  y1=12+23.5165*Math.sin(j*(Math.PI)/180);
  z[0].style.top=y+'vh';
  z[0].style.left=x+'vw';
  z[1].style.top=y1+'vh';
  z[1].style.left=x1+'vw';
    i++;
    j++;
}
setInterval(full2,60);
function full2()
{

  var x,y,x1,y1;
  x=10+32.5165*Math.cos(i1*(Math.PI)/180);
  y=32+39.5165*Math.sin(i1*(Math.PI)/180);
  x1=10+32.5165*Math.cos(j1*(Math.PI)/180);
  y1=32+39.5165*Math.sin(j1*(Math.PI)/180);
  z[2].style.top=y+'vh';
  z[2].style.left=x+'vw';
  z[3].style.top=y1+'vh';
  z[3].style.left=x1+'vw';
    i1++;
    j1++;
}
