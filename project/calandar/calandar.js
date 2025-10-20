let date1=document.getElementById("date"); 
let month1=document.getElementById("month"); 
let year1=document.getElementById("year");
let day=document.getElementById("day");  
let time1=document.getElementById("time"); 
function calandar(){
let cal=new Date();
const string1=cal.toString();
let [dayweek,month,day1,year,time,timezone,timezonename]=string1.split(' ');



month1.innerHTML=`${month}`;
date1.innerHTML=`${day1}`;
year1.innerHTML=`${year}`;
day.innerHTML=`${dayweek}`;
time1.innerHTML=`${time}`;

let date0=document.getElementById("date1");
let date2=document.getElementById("date2");
let date3=document.getElementById("date3");
let date4=document.getElementById("date4");
let date5=document.getElementById("date5");
let date6=document.getElementById("date6");
let date7=document.getElementById("date7");
let date8=document.getElementById("date8");
let date9=document.getElementById("date9");
let date10=document.getElementById("date10");
let date11=document.getElementById("date11");
let date12=document.getElementById("date12");
let date13=document.getElementById("date13");
let date14=document.getElementById("date14");
let date15=document.getElementById("date15");
let date16=document.getElementById("date16");
let date17=document.getElementById("date17");
let date18=document.getElementById("date18");
let date19=document.getElementById("date19");
let date20=document.getElementById("date20");
let date21=document.getElementById("date21");
let date22=document.getElementById("date22");
let date23=document.getElementById("date23");
let date24=document.getElementById("date24");
let date25=document.getElementById("date25");
let date26=document.getElementById("date26");
let date27=document.getElementById("date27");
let date28=document.getElementById("date28");
let date29=document.getElementById("date29");
let date30=document.getElementById("date30");
let date31=document.getElementById("date31");


if(day1==1){
    date0.style.backgroundColor='blue';  
}
else if(day1==2){
    date2.style.backgroundColor='blue';
}
else if(day1==3){
    date3.style.backgroundColor='blue';
}
else if(day1==4){
    date4.style.backgroundColor='blue';
}
else if(day1==5){
    date5.style.backgroundColor='blue';
}
else if(day1==6){
    date6.style.backgroundColor='blue';
}
else if(day1==7){
    date7.style.backgroundColor='blue';
}
else if(day1==8){
    date8.style.backgroundColor='blue';
}
else if(day1==9){
    date9.style.backgroundColor='blue';
}
else if(day1==10){
    date10.style.backgroundColor='blue';
}
else if(day1==11){
    date11.style.backgroundColor='blue';
}
else if(day1==12){
    date12.style.backgroundColor='blue';
}
else if(day1==13){
    date13.style.backgroundColor='blue';
}
else if(day1==14){
    date14.style.backgroundColor='blue';
}
else if(day1==15){
    date15.style.backgroundColor='blue';
}
else if(day1==16){
    date16.style.backgroundColor='blue';
}
else if(day1==17){
    date17.style.backgroundColor='blue';
}
else if(day1==18){
    date18.style.backgroundColor='blue';
}
else if(day1==19){
    date19.style.backgroundColor='blue';
}
else if(day1==20){
    date20.style.backgroundColor='blue';
}
else if(day1==21){
    date21.style.backgroundColor='blue';
}
else if(day1==22){
    date22.style.backgroundColor='blue';
}
else if(day1==23){
    date23.style.backgroundColor='blue';
}
else if(day1==24){
    date24.style.backgroundColor='blue';
}
else if(day1==25){
    date25.style.backgroundColor='blue';
}
else if(day1==26){
    date26.style.backgroundColor='blue';
}
else if(day1==27){
    date27.style.backgroundColor='blue';
}
else if(day1==28){
    date28.style.backgroundColor='blue';
}
else if(day1==29){
    date29.style.backgroundColor='blue';
}
else if(day1==30){
    date30.style.backgroundColor='blue';
}
else if(day1==31){
    date31.style.backgroundColor='blue';
}
}
setInterval(calandar,0);