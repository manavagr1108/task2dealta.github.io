var canvas = document.querySelector('canvas')
console.log(canvas);
canvas.fillStyle = '#808080';
canvas.width = window.innerWidth
canvas.height = window.innerHeight
 var x= canvas.width/2;
 var y= canvas.height/2;
 
 const background = canvas.getContext('2d');
//  background.fillStyle = 'gray';
//  background.fillRect(0,y-120,2*x,170);

 var box = canvas.getContext('2d');
 box.fillStyle = 'blue';
 box.fillRect(x,y,50,50);
var p='0';
var path1 = canvas.getContext('2d');
 path1.fillStyle = 'black';
 path1.fillRect(0,y+51,2*x,2*y);

 var path2 = canvas.getContext('2d');
 path2.fillStyle = 'black';
 path2.fillRect(0,0,2*x,y-120);


var start = document.getElementById('start');
function move(){
    
    if (p%2=='0'){
        
       if(t==y)
        { animate_top();
       setTimeout(()=>{
           p++;
       },1000)
       if(p=='0'){
           start.style.display = 'none';
           spawn('1');
        // setInterval(spawn,5000);
       }}
        
    }
    else if(p%2=="1"){
        
        if(t==y-120)
        {animate_bottom();
        setTimeout(()=>{
            p++;
        },1000)
    }}
}

var t=y;
function animate_top(){
    box.clearRect(0,y-121,x*2,171);
    let ani=requestAnimationFrame(animate_top)
        
        box.fillStyle = 'blue';
        box.fillRect(x,t,50,50);
 
        t-=4;
        
        if(t==y-120){
            cancelAnimationFrame(ani);
            jump.play();
        }  
}
function animate_bottom(){
    box.clearRect(0,y-121,x*2,171);
    let ani_b=requestAnimationFrame(animate_bottom)
        
        box.fillStyle = 'blue';
        box.fillRect(x,t,50,50);
 
        t+=4;
        
        if(t==y){
            cancelAnimationFrame(ani_b);
            jump.play();
        }  
}
var obs1 = canvas.getContext('2d');
var obs2 = canvas.getContext('2d');
var obs3 = canvas.getContext('2d');
var obs4 = canvas.getContext('2d');
var score = canvas.getContext('2d');

// spawn();
var speed=0;
var b=2*x;
var s= 2*x;
var sco=0;
var score = document.getElementById('score');
var hscoretab = document.getElementById('hiscore')
var hscore = localStorage.getItem("hscore");
if (hscore === null) {
    hscore = 0;
    localStorage.setItem("hscore",hscore);
    hscoretab.innerHTML='highscore :' + hscore;
}
else
{
    hscoretab.innerHTML='highscore:' +hscore;
}

function spawn(k)
{
//  requestAnimationFrame(spawn);
    if(k=='1')
         {
            //  console.log('ob1');
            b=2*x;
            s= 2*x;
            obs1.fillRect(2*x,y+51,100,y+51)
            animate_obsb1();
            console.log('1')
            animate_obsb2();               
        }
    else if(k=='2'||k=='0'){
        // console.log('ob2');
        b=2*x;
        s= 2*x;
        obs3.fillStyle ='gray';
        obs3.fillRect(2*x,0,100,y-120)
        animate_obsu1();
        console.log('2')
        animate_obsu2();
        }
}

function animate_obsb1(){
    
    bot=requestAnimationFrame(animate_obsb1)
    obs1.fillStyle= 'gray';
    obs1.fillRect(b,y+51,100,y+51);
    b-=8+speed;

    check1(x,t,b,s);
    if(b==0){
        cancelAnimationFrame(bot); 
        sco++;
        score.innerHTML = 'score:' + sco;       
    }
}
var ran;
function animate_obsb2(){
    
    bot_2=requestAnimationFrame(animate_obsb2)
    obs2.fillStyle= 'black';
    obs2.fillRect(s+200,y+51,100,y+51);
    s-=8+speed;
    
    if(s==-200){
        cancelAnimationFrame(bot_2);
        ran=Math.floor(Math.random()*2)
        console.log(ran)
        spawn(ran);
    }
}
function animate_obsu1(){
    
    bot=requestAnimationFrame(animate_obsu1)
    obs3.fillStyle= 'gray';
    obs3.fillRect(b,0,100,y-120);
    b-=8+speed;
    check2(x,t,b,s);
    
    if(b==0){
        cancelAnimationFrame(bot);
        sco++;
        score.innerHTML = "score:" + sco; 
        
    }
}
function animate_obsu2(){
    
    bot_2=requestAnimationFrame(animate_obsu2)
    obs4.fillStyle= 'black';
    obs4.fillRect(s+200,0,100,y-120);
    s-=8+speed;
    
    if(s==-200){
        cancelAnimationFrame(bot_2);
        // speed+=2;
        ran=Math.floor(Math.random()*2)
        console.log(ran)
        spawn(ran);
    }
}

function check1(bx,by,ox,ox2)
{ 
    if(ox-(bx+25)<=0&&(y)-(by+2)<=0&&ox2-bx<=0&&bx-ox<=200){
        console.log('game over');
        cancelAnimationFrame(bot);
        cancelAnimationFrame(bot_2);
        gameover();
        death.play();
    }
    
}
function check2(bx,by,ox,ox2)
{ 
    if(ox-(bx+25)<=0&&(by)-(y-120)<=0&&ox2-bx<=0&&bx-ox<=200){
        console.log('game over');
        cancelAnimationFrame(bot);
        cancelAnimationFrame(bot_2)
        gameover();
        death.play();
    }
    
}

function gameover()
{
    canvas.style.display = 'none';
    popup.style.display = 'grid';
    scor.innerHTML = 'score :' + sco;
    if(sco>hscore){
        hscore = sco;
        hscoretab.innerHTML = "hiscore:" + hscore;
        localStorage.setItem("hscore",sco);
    }

}

