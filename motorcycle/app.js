var c = document.createElement("canvas");
var ctx = c.getContext("2d");
c.width = window.innerWidth - 1;
c.height = window.innerHeight - 15;
document.body.appendChild(c);

// 画面を前に進ませる速度
var screenSpeed = 0;
// 道の高さの最大値（小さいと平坦・大きいと凸凹）
const ROAD_LINE_MAX_VALUE = 300;

// 道の高さを表す配列（数値）
var roadValue = [];
while (roadValue.length < ROAD_LINE_MAX_VALUE) {
    while (roadValue.includes(val = Math.floor(Math.random() * ROAD_LINE_MAX_VALUE)));
    roadValue.push(val);
}

// 道の凸凹を滑らかにする関数
var roadLine = (a,b,c) => a + (b-a) * (1 - Math.cos(c * Math.PI))/2;
var noise = x => {
    x = x * 0.01 % ROAD_LINE_MAX_VALUE;
    let noiseValue = roadLine(roadValue[Math.floor(x)], roadValue[Math.ceil(x)], x - Math.floor(x));
    // たまに値がバグる
    if(isNaN(noiseValue)) {
        noiseValue = 5;
    }
    return noiseValue
}

var player = new function() {
    this.x = c.width/4;
    this.y = 100;
    this.ySpeed = 5;
    this.rot = 0;
    this.rSpeed = 0;
    this.isGround = false;
    this.img = new Image();
    this.img.src = 'moto.png';

    this.draw = function() {
        // playerの今いる位置
        var p1 = c.height - noise(screenSpeed + this.x) * 0.25;

        // playerを地面に落とす
        if ( p1 -15 > this.y) {
            this.ySpeed += 0.1;
            this.isGround = false;
        } else {
            this.ySpeed -= this.y - (p1 - 12);
            this.y = p1 - 12;
            this.isGround = true;
        }

        let angle = Math.atan2(((c.height - noise(screenSpeed + 5 + this.x) * 0.25) - 11) - this.y, (this.x + 5) - this.x);
        this.y += this.ySpeed;
        if(this.isGround) {
            this.rot -= (this.rot - angle) * 0.5;
            this.rSpeed = this.rSpeed - (angle - this.rot);
        }

        // this.rSpeed += 0.05;
        // this.rot -= this.rSpeed * 0.1;
        if(this.rot > Math.PI) {
            this.rot = -Math.PI;
        }
        if(this.rot < -Math.PI) {
            this.rot = Math.PI;
        }

        ctx.save();
        ctx.translate(this.x, this.y);
        if(this.isGround) {
            ctx.rotate(this.rot);
        }
        ctx.drawImage(this.img, -35, -35, 55, 55);
        ctx.restore();
    }

    this.jump = function() {
        if (this.isGround) {
            this.ySpeed -= 1.5;
            this.y += 2;
            this.isGround = false;
        }

        ctx.save();
        // ctx.translate(this.x, this.y);
        // ctx.rotate(this.rot);
        ctx.drawImage(this.img, -35, -35, 55, 55);
        ctx.restore();
    }

    // this.status = function() {
    //     console.log("x      :" , this.x);
    //     console.log("y      :" , this.y);
    //     console.log("ySpeed :" , this.ySpeed);
    //     console.log("rot    :" , this.rot);
    //     console.log("rSpeed :" , this.rSpeed);
    //     console.log("isGround:" , this.isGround);

    //     console.log("------------------");
    // }
}

function loop() {
    // 画面が小さい時はやや遅くする
    if (c.width <= 500) {
        screenSpeed += 4;
    } else {
        screenSpeed += 5;
    }
    ctx.fillStyle = "#17f";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(0, c.height);
    for (let i = 0 ; i < c.width ; i++) {
        ctx.lineTo(i, c.height - noise(screenSpeed + i) * 0.25);
    }
    ctx.lineTo(c.width, c.height);
    ctx.fill();

    player.draw();
    requestAnimationFrame(loop);
}
loop();

const startDate = new Date();
function playTime() {
    document.getElementById("times").innerHTML = parseInt((new Date().getTime() - startDate.getTime()) / 1000) + " seconds."
    this.setTimeout("playTime()", 1000);

}
playTime();

window.addEventListener('keyup', function() {
    player.jump();
});
window.addEventListener('touchstart', function() {
    player.jump();
});