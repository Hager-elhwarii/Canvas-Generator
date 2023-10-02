

let c = document.querySelector("canvas");
let ctx = c.getContext("2d");
let color = document.querySelector("#color");
let PickColor;
let i;

const Click = ()=> {
    Change();
    setInterval( ()=> {

      ctx.clearRect(0,0,c.width,c.height);

        for (let i= 0; i < 150; i++) {

            ctx.beginPath();
            let x = parseInt(Math.random() * c.width);
            let y = parseInt(Math.random() * c.height);
            ctx.arc(x, y, 40, 0, Math.PI * 2, true);
            ctx.stroke();
        }
        
    }, 1000)


}


const Change = ()=> {  
   PickColor = color.value;
   ctx.strokeStyle = PickColor;
}

