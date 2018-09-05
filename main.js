x=screen.width;
y=screen.height;
z=(x-510);
//300
var delay=100;
var timerID="";
var delta=5;
var a=1;

function open_new_window(url)
{ 
  new_window = window.open(url,'window_name','toolbar=0,menubar=0,resizable=1,dependent=0,status=0,width=400,height=420,left=25,top=25');
}

function open_pop(url)
{
  new_pop = window.open(url,'pop','scrollbars=1,toolbar=0,menubar=0,resizable=1,dependent=0,status=0,width=500,height=500,left=1,top=1');
}

function open_data(url) {
  window.open(url,'lyrics','width=700,height=500,left='+(x/2-350)+',top='+(y/2-250)+',statusbar=0,menubar=1,scrollbars=1');
}

function open_poster(theURL) {
  window.open(theURL,'poster','width=440,height=670,left='+(x/2-220)+',top='+(y/2-335)+',scrollbars=1,resizable=1,statusbar=0');
}

var ie4 = false;
if (document.all) { ie4 = true; }

function getObject(id) {
 if (ie4) { return document.all[id]; }
 else { return document.getElementById(id); }
}

function start(elm) {
  for (i=1;i<=9;i++) {
    j=i.toString();
    elcat='cat'+i;
	elsub='scat'+i;
    var d = getObject(elcat);
	var e = getObject(elsub);
	f = 's'+elm;
	var g = getObject(f);
	var h = getObject(elm);
    if (e && e!=g) e.style.display="none";
    if (d && d!=h) d.style.color="#00355D"
  }
  
  var f = getObject(elm);
  k='s'+elm;
  var g = getObject(k);
  if (g) {
   if (g.style.display=="none") {
    g.style.display="block";
    f.style.color="#000000";   
   } else {
    g.style.display="none";
    f.style.color="#00355D";
   }
  } else {
   f.style.color="#000000";
  }
}

function startn(){
 if (timerID=="") {
	 timerID= setInterval("move()",delay);
	} else {
	 clearInterval(timerID);
	 timerID="";
 }
}

function stopn(){
 clearInterval(timerID);
 timerID="";
}

function move(){
if (a<2) x=1;
if (a>z) x=0;

if (x==0) a=a-delta; else a=a+delta;
getObject('news').style.right= a + "px";
}
