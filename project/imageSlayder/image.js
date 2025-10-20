
//next

var images =[
    'img1.jpg','img2.jpg',
    'img3.jpg','img4.jpeg',
    'img5.jpeg','img6.jpeg',
    'img7.jpeg','img8.jpeg',
    'img9.jpeg','img10.jpeg',
    'img11.jpeg','img12.jpeg',
    'img13.jpeg','img14.jpeg',
    'img15.jpeg','img16.jpeg',
    'img17.jpeg','img18.jpeg'

];
const firstimage=0;
const lastimage=images.length-1;
let currentimage=0;
//function next(){
  const next=document.querySelector(".next"); 
  next.addEventListener('click',()=>{

   
    
    let imagetage=document.getElementById("image");
    currentimage++;
    if(currentimage>=lastimage){
        currentimage=17;
    }
    imagetage.src=images[currentimage];
    let number=document.querySelector(".number");
    number.textContent=`${(currentimage + 1)}`+"/18";
});


const prev=document.querySelector(".prev"); 
  prev.addEventListener('click',()=>{
    let imagetage=document.getElementById("image");
    currentimage--;
    if(currentimage<=firstimage){
        currentimage=0;
    }
    imagetage.src=images[currentimage];
    let number=document.querySelector(".number");
    number.textContent=`${(currentimage+1 )}`+"/18";
  });