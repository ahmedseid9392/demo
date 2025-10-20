
// function StopWatch(){
//     var getDate=new Date();
//     var time1 = getDate.toLocaleTimeString();
    
    //hour1.innerHTML=time1;
//    time1.toString();
//    var [hour,minute,seconde]=time1.split(' ');
//    console.log(hour);
//    console.log(minute);

// }
// start.addEventListener('click',()=>{
//     setInterval (StopWatch,0);
// })
// stop.addEventListener('click',()=>{
//     setInterval (StopWatch,1);
// })
// let start=document.getElementById("start");
// let stop=document.getElementById("stop");
// let reset=document.getElementById("reset");
// var hour =document.getElementById("hour");
// var minute =document.getElementById("minute");
// var seconde =document.getElementById("seconde");
// start=()=>{
// const clock=new Date();
// const hour1=clock.getHours();
// const minute1=clock.getMinutes();
// const seconde1=clock.getSeconds();

// hour.innerHTML=hour1;
// minute.innerHTML=minute1;
// seconde.innerHTML=seconde1;
  
// }
// setInterval(start,0);
//analog clock
var hour2 =document.querySelector(".hour2");
var minute2 =document.querySelector(".minute2");
var seconde2 =document.querySelector(".seconde2");

function analogclock(){
    const date=new Date();
    const seco=date.getSeconds()/60;
    const min=(seco+date.getMinutes())/60;

    const hour3=(min+date.getHours())/12;
    rotateClockHand(seconde2,seco);
    rotateClockHand(minute2,min);
    rotateClockHand(hour2,hour3);


}
function rotateClockHand(element,rotation){
    element.style.setProperty('--rotate',rotation * 360);
}
setInterval(analogclock,1000);



