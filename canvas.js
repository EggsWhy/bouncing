let canvas = document.querySelector('canvas');

canvas.height =  window.innerHeight;
canvas.width = window.innerWidth;

let c = canvas.getContext('2d');

c.fillStyle = 'blue';
c.fillRect(0, 0, 100, 50);


c.beginPath();
c.moveTo(200,200);
c.lineTo(400,400);
c.lineTo(600,100);
c.stroke();

// for (i=0; i<100; i++){
//     let x = Math.random()*window.innerWidth;
//     let y = Math.random()*window.innerHeight;
//     let r = Math.random()*50+1

//     c.beginPath();
//     c.fillStyle = 'blue';
//     c.arc(x,y,r,0,Math.PI*2,false);
//     c.stroke();
// }




class Circle {

    constructor(x, y, dx, dy, r) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.r = r;
        this.colour = randomColour()
    }

    draw(){
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        c.fillStyle = this.colour;
        c.fill()

        this.update();
    };

    update(){
        if (this.x + this.r >= innerWidth || this.x - this.r <= 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.r >= innerHeight || this.y - this.r <= 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

    };
}

function randomColour() {
    return (
      "rgba(" +
      Math.round(Math.random() * 250) +
      "," +
      Math.round(Math.random() * 250) +
      "," +
      Math.round(Math.random() * 250) +
      "," +
      Math.ceil(Math.random() * 10) / 10 +
      ")"
    );
  }

let circleArray = [];

for (let i=0; i<50; i++){

    var r = Math.random()*30+1;
    var x = Math.random()*(innerWidth-r*2)+r;
    var y = Math.random()*(innerHeight-r*2)+r;
    var dx = (Math.random()-0.5)*10;
    var dy = (Math.random()-0.5)*10;
    
    circleArray.push(new Circle(x, y, dx, dy, r));
}

console.log(circleArray)

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);

    for (let i=0; i<circleArray.length; i++){
        circleArray[i].draw()
    }
}

animate();




















// function Circle(x, y, dx, dy, r){
//     this.x = x;
//     this.y = y;
//     this.dx = dx;
//     this.dy = dy;
//     this.r = r;

//     this.draw = function(){
//         c.beginPath();
//         c.arc(this.x, this.y, this.r , 0 , Math.PI*2 , false);
//         c.stroke();
//     }

//     this.update = function(){
//         if (this.x + this.r >=innerWidth || this.x - this.r <=0){
//             this.dx = -this.dx;
//         }
    
//         if (this.y + this.r >=innerHeight || this.y - this.r <=0){
//             this.dy =- this.dy;
//         }
    
//         this.x += this.dx;
//         this.y += this.dy;

//         this.draw()
//     }
// }






// class Circle {
//     constructor(x, y, dx, dy, r) {
//         this.x = x;
//         this.y = y;
//         this.dx = dx;
//         this.dy = dy;
//         this.r = r;

//         this.draw = function () {
//             c.beginPath();
//             c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
//             c.stroke();
//         };

//         this.update = function () {
//             if (this.x + this.r >= innerWidth || this.x - this.r <= 0) {
//                 this.dx = -this.dx;
//             }

//             if (this.y + this.r >= innerHeight || this.y - this.r <= 0) {
//                 this.dy = -this.dy;
//             }

//             this.x += this.dx;
//             this.y += this.dy;
//         };
//     }
// }












// var x = Math.random()*innerWidth;
// var y = Math.random()*innerHeight;
// var dx = (Math.random()-0.5)*10;
// var dy = (Math.random()-0.5)*10;
// var r = 30;

// function animate()  {
//     requestAnimationFrame(animate);
//     c.clearRect(0,0,innerWidth,innerHeight);

//     c.beginPath();
//     c.arc(x,y,r,0,Math.PI*2,false);
//     c.stroke();


//     if (x+r>=innerWidth || x-r<=0){
//         dx = -dx;
//     }

//     if (y+r>=innerHeight || y-r<=0){
//         dy =- dy;
//     }

//     x += dx;
//     y += dy;
// }

// animate();
















