const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle="pink";
ctx.fillRect(0,0, canvas.width, canvas.height);

//Min cirkel 
class circle {
    constructor(ctx, x, y) {
        this.ctx=ctx; 
        this.x=x; 
        this.y=y;
        this.speed=5; 
    }

    update() {
        document.onkeypress=function(evt){
            var charCode=evt.keyCode || evt.which; 
            var charStr =String.fromCharCode(charCode);

            if (charStr==="w") {
                this.moveUp(); 
            }

            if (charStr === "a") {
                this.moveLeft();
            }

            if (charStr === "d") {
                this.moveRight();
            }

            if (charStr === "s") {
                this.moveDown();
            }
        }.bind(this);
    }

    draw() {
        this.ctx.fillStyle = "black";
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI);
        this.ctx.stroke();
    }

    moveLeft() {
        this.x -= this.speed;
    }

    moveRight() {
        this.x += this.speed;
    }

    moveUp() {
        this.y -= this.speed;
    }

    moveDown() {
        this.y += this.speed;
    }
}; 

const myCircle=new circle(ctx,20,20);

function animate() {
    ctx.fillStyle="pink";
    ctx.fillRect(0,0, canvas.width, canvas.height);
    myCircle.update(); 
    myCircle.draw();

    requestAnimationFrame(animate); 
}

animate();

