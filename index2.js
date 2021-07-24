var canvas = document.querySelector('#canvas_bg');
var canvas_obs = document.querySelector('#canvas_obs');
var power_1 = document.querySelector('#powerup_slow');
var power_2 = document.querySelector('#powerup_life');
var life_active = document.querySelector('#life');
var slow = document.querySelector('#slow');
// var canvas_powers = document.querySelector('#canvas_obs');
canvas.fillStyle = 'black';
canvas.width = window.innerWidth
canvas.height = window.innerHeight
canvas_obs.width = window.innerWidth
canvas_obs.height = window.innerHeight
// canvas_powers.width = window.innerWidth
// canvas_powers.height = window.innerHeight
var x = canvas.width / 2;
var y = canvas.height / 2;
var background = canvas.getContext('2d');
const img = new Image();
var powerup = canvas_obs.getContext('2d');
// const power_1 = new Image();
// const power_2 = new Image();
// power_2.src = 'life_icon.png';
// power_1.src = 'slow_icon.png';
img.src = 'bg.jpg';

document.addEventListener('resize', function () {
    y = innerHeight / 2;
    x = innerWidth / 2;
    background.drawImage(img, 0, 0, x, (y * 2) / 3);
    background.drawImage(img, x, 0, x, (y * 2) / 3);
    background.drawImage(img, 0, (y * 4) / 3, x, (y * 2) / 3);
    background.drawImage(img, x, (y * 4) / 3, x, (y * 2) / 3);
    console.log('img');
    box.fillStyle = 'blue';
    box.fillRect(x, t - 50, 50, 50);
})

img.onload = function () {
    // powerup.drawImage(power_1,x,2*y/3+10,40,40);
    background.drawImage(img, 0, 0, x, (y * 2) / 3);
    background.drawImage(img, x, 0, x, (y * 2) / 3);
    background.drawImage(img, 0, (y * 4) / 3, x, (y * 2) / 3);
    background.drawImage(img, x, (y * 4) / 3, x, (y * 2) / 3);
    console.log('img');
}
var box = canvas_obs.getContext('2d')
var obs1 = canvas_obs.getContext('2d');
var obs2 = canvas_obs.getContext('2d');
var obs3 = canvas_obs.getContext('2d');
var obs4 = canvas_obs.getContext('2d');
var obs_ball = canvas_obs.getContext('2d');
var b1, b2, b3, b4;
var ran;
var p = 0;
var score = 0;
var speed = 8;
var score_disp = document.querySelector('#score');
var hiscore_disp = document.querySelector('#hiscore_disp');
var hiscore_value = localStorage.getItem('hiscore_value');
if (hiscore_value === null) {
    hiscore_value = 0;
    hiscore_disp.innerHTML = 'high score:' + hiscore_value;
}
else {
    hiscore_disp.innerHTML = 'high score:' + hiscore_value;
}

function spawn(k) {
    if (k == '0') {
        console.log('ob1');
        b1 = 2 * x;
        obs1.fillStyle = 'pink';
        obs1.fillRect(2 * x, (y * 4) / 3, 100, (y * 2) / 3)
        animate_obsb1();
    }
    else if (k == '1') {
        console.log('ob2');
        b2 = 2 * x;
        obs2.fillStyle = 'pink';
        obs2.fillRect(2 * x, (y * 4) / 3, 100, (y * 2) / 3)
        animate_obsb2();
    }
    else if (k == '2') {
        console.log('ob3');
        b3 = 2 * x;
        obs3.fillStyle = 'gray';
        obs3.fillRect(2 * x, 0, 100, (y * 2) / 3)
        animate_obsu1();
    }
    else if (k == '3') {
        console.log('ob4');
        b4 = 2 * x;
        obs4.fillStyle = 'gray';
        obs4.fillRect(2 * x, 0, 100, (y * 2) / 3)
        animate_obsu2();
    }
    if (score % 5 == 0 && score >= 5) {
        animate_ball();
    }
    if (score % 5 == 0 && score >= 5) {
        speed += 1;
    }
    if (score % 5 == 0 && score > 0) {
        power_ups(Math.floor(Math.random() * 3));
        // power_ups(2);
    }
}
function animate_obsb1() {
    if(t==4*y/3-1){
        box.fillStyle = 'blue';
        box.fillRect(x - 50, t - 50, 50, 50);
    }
    if(t == (2 * y) / 3 + 1)
    {
        box.fillStyle = 'blue';
        box.fillRect(x - 50, t, 50, 48);
    }
    bot = requestAnimationFrame(animate_obsb1)
    obs1.clearRect(b1 + speed + 1, (y * 4) / 3, 99, (y * 2) / 3);
    obs1.fillStyle = 'pink';
    obs1.fillRect(b1, (y * 4) / 3, 100, (y * 2) / 3);
    b1 -= speed;
    check(t, b1, 1);
    if (b1 <= x - 104 && b1 >= x - (103 + speed)) {
        ran = Math.floor(Math.random() * 3);
        while (ran == 0) {
            ran = Math.floor(Math.random() * 3);
        }
        spawn(ran);
    }
    if (b1 <= -112) {
        cancelAnimationFrame(bot);
        score++;
        score_disp.innerHTML = 'score:' + score;
    }
}
function animate_obsb2() {
    if(t==4*y/3-1){
        box.fillStyle = 'blue';
        box.fillRect(x - 50, t - 50, 50, 50);
    }
    if(t == (2 * y) / 3 + 1)
    {
        box.fillStyle = 'blue';
        box.fillRect(x - 50, t, 50, 48);
    }
    bot = requestAnimationFrame(animate_obsb2)
    obs2.clearRect(b2 + speed + 1, (y * 4) / 3, 99, (y * 2) / 3);
    obs2.fillStyle = 'pink';
    obs2.fillRect(b2, (y * 4) / 3, 100, (y * 2) / 3);
    b2 -= speed;
    check(t, b2, 1);
    if (b2 <= x - 104 && b2 >= x - (103 + speed)) {
        ran = Math.floor(Math.random() * 3);
        while (ran == 1) {
            ran = Math.floor(Math.random() * 3);
        }
        spawn(ran);
    }
    if (b2 <= -112) {
        cancelAnimationFrame(bot);
        score++;
        score_disp.innerHTML = 'score:' + score;
    }
}
function animate_obsu1() {
    if(t==4*y/3-1){
        box.fillStyle = 'blue';
        box.fillRect(x - 50, t - 50, 50, 50);
    }
    if(t == (2 * y) / 3 + 1)
    {
        box.fillStyle = 'blue';
        box.fillRect(x - 50, t, 50, 48);
    }
    bot = requestAnimationFrame(animate_obsu1)
    obs3.clearRect(b3 + speed + 1, 0, 99, (y * 2) / 3);
    obs3.fillStyle = 'pink';
    obs3.fillRect(b3, 0, 100, (y * 2) / 3);
    check(t, b3, 2);
    b3 -= speed;
    if (b3 <= x - 104 && b3 >= x - (103 + speed)) {
        ran = Math.floor(Math.random() * 3);
        while (ran == 2) {
            ran = Math.floor(Math.random() * 3);
        }
        spawn(ran);
    }
    if (b3 <= -112) {
        cancelAnimationFrame(bot);
        score++;
        score_disp.innerHTML = 'score:' + score;
    }
}
function animate_obsu2() {
    if(t==4*y/3-1){
        box.fillStyle = 'blue';
        box.fillRect(x - 50, t - 50, 50, 48);
    }
    if(t == (2 * y) / 3 + 1)
    {
        box.fillStyle = 'blue';
        box.fillRect(x - 50, t, 50, 50);
    }
    bot = requestAnimationFrame(animate_obsu2)
    obs4.clearRect(b4 + speed + 1, 0, 99, (y * 2) / 3);
    obs4.fillStyle = 'pink';
    obs4.fillRect(b4, 0, 100, (y * 2) / 3);
    check(t, b4, 2);
    b4 -= speed;
    if (b4 <= x - 104 && b4 >= x - (103 + speed)) {
        ran = Math.floor(Math.random() * 3);
        while (ran == 3) {
            ran = Math.floor(Math.random() * 3);
        }
        spawn(ran);

    }
    if (b4 <= -112) {
        cancelAnimationFrame(bot);
        score++;
        score_disp.innerHTML = 'score:' + score;
    }
}
function move() {

    if (p % 2 == '0') {
        if (t == (4 * y) / 3 - 1) {
            animate_top();
            setTimeout(() => {
                p++;
            }, 500)
            if (p == '0') {
                start.style.display = 'none';
                spawn('0');
            }
        }
    }
    else if (p % 2 == '1') {
        if (t == (2 * y) / 3 + 1) {
            animate_bottom();
            setTimeout(() => {
                p++;
            }, 500)
        }
    }
}

var t = (4 * y) / 3 - 1;
function animate_top() {
    box.clearRect(x - 50, t +6, 55, 6);
    let ani = requestAnimationFrame(animate_top)
    box.fillStyle = 'blue';
    box.fillRect(x - 50, t - 50, 50, 50);
    t -= 6;
    if (t <= (2 * y) / 3 + 50) {
        cancelAnimationFrame(ani);
        jump.play();
        t = (2 * y) / 3 + 1;
    }
}
function animate_bottom() {
    box.clearRect(x - 51, t - 6, 55, 6);
    let ani_b = requestAnimationFrame(animate_bottom)
    box.fillStyle = 'blue';
    box.fillRect(x - 50, t, 50, 50);
    t += 6;
    if (t >= (4 * y) / 3 - 50) {
        cancelAnimationFrame(ani_b);
        jump.play();
        t = (4 * y) / 3 - 1;
    }
}
function check(box_y, obstable_x, up_bottom) {
    if (box_y + 50 >= (4 * y) / 3 + 5) {
        if (x - 50 >= obstable_x && x - 50 <= obstable_x + 100 && up_bottom == 1) {
            if(life==0)
            {cancelAnimationFrame(bot);
            stop();
            death.play();}
            else
            {life--;}
        }
    }
    else if (box_y - 10 <= (2 * y) / 3) {
        if (x - 50 >= obstable_x && x - 50 <= obstable_x + 100 && up_bottom == 2) {
            if(life==0)
            {cancelAnimationFrame(bot);
            stop();
            death.play()}
            else
            {life--;
                if(life<=10){
                    life_active.innerHTML ='X0';
                }}
        }
    }
}

function stop() {
   
     canvas_obs.style.display = 'none';
    canvas.style.display = 'none';
    score_popup.innerHTML = 'score:' + score;
    popup.style.display = 'grid';
    if (score > hiscore_value) {
        hiscore_value = score;
        hiscore_disp.innerHTML = 'high score:' + hiscore_value;
        localStorage.setItem('hiscore_value', hiscore_value);
    }
}
ball_x_coor = 2 * x;
ball_y_coor = 2 * y / 3 + 20;
temp_ball = 5;
function animate_ball() {
    let ani_ball = requestAnimationFrame(animate_ball);
    box.clearRect(ball_x_coor - 25, ball_y_coor - 25, 50, 51);
    obs_ball.beginPath();
    obs_ball.fillStyle = 'red';
    obs_ball.arc(ball_x_coor, ball_y_coor, 20, 0, 2 * Math.PI);
    obs_ball.fill();
    if (ball_x_coor <= x + 21 && ball_x_coor >= x - 71) {
        if (ball_y_coor >= t - 71 && ball_y_coor <= t + 21) {
            
            if(life==0){
                stop();
                death.play()
            }
            else{life--;
            if(life<=10){
                life_active.innerHTML ='X0';
            }}
        }

    }

    ball_y_coor += temp_ball;
    ball_x_coor -= 5;

    if (ball_y_coor >= 4 * y / 3 - 22) {
        temp_ball = -temp_ball;
    }
    if (ball_y_coor <= 2 * y / 3 + 22) {
        temp_ball = -temp_ball;
    }


    if (ball_x_coor <= -25) {
        cancelAnimationFrame(ani_ball);
        ball_x_coor = 2 * x;
        ball_y_coor = Math.floor(Math.random() * (2 * y / 3 - 50)) + 2 * y / 3 + 20;
        temp_ball = 5;
    }
}
var power_x_pos = 2 * x;
var temp_power = 1;
power_y_slow = 4*y/3-50;
power_y_life = y;
 var life =0;
//  animate_power_slow()
function animate_power_slow() {
    // console.log('1-power')
    power_ani_var = requestAnimationFrame(animate_power_slow)
    powerup.clearRect(power_x_pos, power_y_slow, 50, 40)
    powerup.drawImage(power_1, power_x_pos, power_y_slow, 40, 40);
    power_x_pos -=8;
    if(power_x_pos <= x && power_x_pos >= x - 90){
        if (power_y_slow >= t - 90 && power_y_slow<= t) {
            speed-=3;
            slow_sound.play();
            slow.innerHTML ='X1';
            setTimeout(() =>{
                slow.innerHTML = 'X0';
            },4000)
            // powerup.drawImage(power_1,2*x-100,20, 50, 50);
            powerup.clearRect(power_x_pos, power_y_slow, 50, 40)
            cancelAnimationFrame(power_ani_var)
            power_x_pos = 2 * x - 40;
            power_y_slow = (2 * y / 3) + Math.floor(Math.random() * ((2 * y / 3) - 40));
        }
    }
    if (power_x_pos <= -45) {
        cancelAnimationFrame(power_ani_var)
        power_x_pos = 2 * x - 40;
        power_y_slow = (2 * y / 3) + Math.floor(Math.random() * ((2 * y / 3) - 40));
    }
}

function animate_power_life() {
    // console.log('2-power')
    power_ani_var = requestAnimationFrame(animate_power_life)
    powerup.clearRect(power_x_pos, power_y_life , 50, 40)
    powerup.drawImage(power_2, power_x_pos, power_y_life, 40, 40);
    power_x_pos -=8;
    if(power_x_pos <= x && power_x_pos >= x - 90){
        if (power_y_life >= t - 90 && power_y_life <= t) {
            console.log('life');
            power.play();
            life+=20;
            setTimeout(() =>{
                life=0;
                life_active.innerHTML = 'X0';
            },12000)
            life_active.innerHTML ='X1';
            // powerup.drawImage(power_2,2*x-100,20, 50, 50);
            powerup.clearRect(power_x_pos, power_y_life , 50, 40)
            cancelAnimationFrame(power_ani_var)
            power_x_pos = 2 * x - 40;
            power_y_life = (2 * y / 3) + Math.floor(Math.random() * ((2 * y / 3) - 40));
        }
    }
    if (power_x_pos <= -45) {
        cancelAnimationFrame(power_ani_var)
        power_x_pos = 2 * x - 40;
        power_y_life = (2 * y / 3) + Math.floor(Math.random() * ((2 * y / 3) - 40));
    }
}
// animate_power_life()
// animate_power_slow()


function power_ups(no_of) {
    console.log(no_of);
    if (no_of == 0) {
        console.log("nope");
    }
    else if (no_of == 2) {
        animate_power_slow();
    }
    else if (no_of == 1) {
        
        animate_power_life();
    }

}

