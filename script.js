

var c = document.querySelector("canvas");
console.dir(c);
var ctx = c.getContext("2d");
var color = document.querySelector("#inpColor");
var PickColor;

var i;

function Click() {
    Change();
    setInterval(function () {


      ctx.clearRect(0,0,c.width,c.height);

        for (var i= 0; i < 150; i++) {

            ctx.beginPath();
            // ctx.clearRect(0,0,c.width,c.height);
            // ctx.strokeStyle = "white";
            var x = parseInt(Math.random() * c.width);
            var y = parseInt(Math.random() * c.height);
            ctx.arc(x, y, 40, 0, Math.PI * 2, true);
            ctx.stroke();
        }
        
    }, 1000)


}


function Change () {  
   PickColor = color.value;
   ctx.strokeStyle = PickColor;
}

