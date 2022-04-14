//1.
const element1=document.getElementById("text");
console.log(element1);

//2.
const element2=document.getElementsByTagName("h1");
console.log(element2);

//3.
const element3=document.getElementsByClassName("box");
console.log(element3);

//4.
element2[0].innerText="Hello World";
console.log(element2[0].innerText);

//5.
function changeDirection(){

        let element4=document.getElementsByClassName("flex-container");
        element4[0].style.flexDirection="column";
    }

//6.
element2.id="heading";
element2[0].style.color="red";
console.log(element2[0]);

//7.
function changeText(){
    const content=document.getElementsByTagName("button");
    content[0].innerText="Welcome to Elevation Academy";
}

//8.
let clock=setInterval(function clockTime(){//setInterval() can be used to update the time continuously
    let dat=new Date();
    let time=dat.toLocaleTimeString();
    document.getElementById('showClock').innerText=time;
},1000);

//9.
let x = document.getElementById("year1").value;
let y = document.getElementById("year2").value;
