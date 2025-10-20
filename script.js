//sign in and sign up
let login_containar=document.querySelector(".sign-up"),
main_containar=document.querySelector(".main-containar"),
signUp_title=document.querySelector(".sign-up-title"),
signIn_btn=document.getElementById("sign-in"),
rigister=document.querySelector(".register"),
name=document.getElementById("name"),
email=document.getElementById("email"),
password=document.getElementById("password"),
name_label=document.getElementById("name-label");
let counter=1;
signIn_btn.addEventListener('click',()=>{
  counter++;
  if(counter%2==0){
    rigister.textContent='Login';
  signIn_btn.textContent='Sign Up';
  signUp_title.textContent='Welcome Back, Sign In';
  name.style.display='none';
  name_label.style.display='none';
  }
  else{
    rigister.textContent='Register';
  signIn_btn.textContent='Sign In';
  signUp_title.textContent='Welcome To My Page, Sign Up';
  name.style.display='inline';
  name_label.style.display='inline';
  }
  
})

rigister.addEventListener('click',()=>{
if(rigister.textContent=="Register"){
    if(name.value.toString().length>5 && email.value.toString().includes("@gmail.com") && password.value.toString().length>=8){
main_containar.style.display='block';
login_containar.style.display='none';
  }
}
else if(email.value.toString().includes("@gmail.com") && password.value.toString().length>=8){
  main_containar.style.display='block';
login_containar.style.display='none';
}
})


//menu bar
let menu=document.getElementById ("menubar");
menu.addEventListener('click',()=>{
   
    navbar2.style.display='block';
    menu.style.display='none';
    navbar2.style.transition=' right 0.8s ease';
     navbar2.style.opacity='0.8s ';
    
})
//cose button
let navbar2=document.querySelector(".navbar2");
let close=document.getElementById("btn1");

close.addEventListener('click',()=>{
navbar2.style.display='none';

menu.style.display='block';

navbar2.style.transition=' left 1.8s ease';
navbar2.style.opacity='0.8';


});

//let=document.getElementsByName("")

//back from contact to me
let back=document.getElementById("left-arrow");
let contact_list=document.querySelector(".contact-list");
let email_card=document.querySelector(".email-card");
let contact=document.getElementById("btn2");
contact.addEventListener('click',()=>{
    contact_list.style.display='block';
})
back.addEventListener('click',()=>{
    contact_list.style.display='none';
    email_card.style.display='none';
})
// for email card

let email_back=document.getElementById("email-back");
let email_btn=document.getElementById("btn3");
email_btn.addEventListener('click',()=>{
    email_card.style.display='block';
    contact_list.style.display='none';
})
email_back.addEventListener('click',()=>{
    email_card.style.display='none';
    contact_list.style.display='block';
})
// if(email_card.style.display=='block'){
//     contact_list.style.display='none'; 
// }

// for phone call card
let phone_card=document.querySelector(".phone-card");
let phone_back=document.getElementById("phone-back");
let phone_btn=document.getElementById("btn4");
phone_back.addEventListener('click',()=>{
    phone_card.style.display='none';
    contact_list.style.display='block';
})
phone_btn.addEventListener('click',()=>{
    phone_card.style.display='block';
    contact_list.style.display='none';
})
//for sms card
let sms_card=document.querySelector(".sms-card");
let sms_back=document.getElementById("sms-back");
let sms_btn=document.getElementById("btn5");

sms_back.addEventListener('click',()=>{
    sms_card.style.display='none';
    contact_list.style.display='block';
})
sms_btn.addEventListener('click',()=>{
    sms_card.style.display='block';
    contact_list.style.display='none';
})

//project card
let more_btn=document.getElementById("more-project");
 let reset_btn=document.getElementById("reset-project");
let project4=document.querySelector(".project4");
let project5=document.querySelector(".project5");
let project6=document.querySelector(".project6");
more_btn.addEventListener('click',()=>{
    project4.style.display='block';
     project5.style.display='block';
      project6.style.display='block';
    more_btn.style.display='none';
    reset_btn.style.display='block';
    reset_btn.style.marginBottom='-120px';
})
  
reset_btn.addEventListener('click',()=>{
    project4.style.display='none';
    project5.style.display='none';
    project6.style.display='none';
    more_btn.style.display='block';
    reset_btn.style.display='none';
})
// dark mode
let dark=document.getElementById("light");
var x=1;
dark.addEventListener('click',()=>{
    x++;
    if(x%2==0){
        document.body.style.backgroundColor='#302e2fff';
        document.body.style.color='#ece9ecff';
        dark.src='icon/brightnes.png'
        document.body.style.transition='0.9s   ';
        
    }
    else{
        document.body.style.backgroundColor='#f4e4f5';
        document.body.style.color='black';
        dark.src='icon/moon.png';
        document.body.style.transition='0.9s  ';
         
    }
})

//skill card
let skill_btn=document.getElementById("skill-btn");
let skill_card=document.querySelector(".skill-card");

let more_skill=document.getElementById("more-skill");
let reset_skill=document.getElementById("reset-skill");
let skill3=document.querySelector(".skill3");
let skill4=document.querySelector(".skill4");
let skill5=document.querySelector(".skill5");
let skill6=document.querySelector(".skill6");
more_skill.addEventListener('click',()=>{
    skill3.style.display='block';
    skill4.style.display='block';
    more_skill.style.display='none';
    reset_skill.style.display='block';

})
reset_skill.addEventListener('click',()=>{
    skill3.style.display='none';
    skill4.style.display='none';
    more_skill.style.display='block';
    reset_skill.style.display='none';
})

//for footer social link text
// facebook
let facebook = document.getElementById("facebook-link");
let facebook_text = document.getElementById("facebook-text");
facebook.addEventListener('mouseenter', () => {
  facebook_text.style.display = 'block';
  facebook_text.style.transition = '0.9s';
});
facebook.addEventListener('mouseleave', () => {
  facebook_text.style.display = 'none';
  facebook_text.style.transition = '0.9s';
});

let github = document.getElementById("github-link");
let github_text = document.getElementById("github-text");
github.addEventListener('mouseenter', () => {
  github_text.style.display = 'block';
  github_text.style.transition = '0.9s';
});
github.addEventListener('mouseleave', () => {
  github_text.style.display = 'none';
  github_text.style.transition = '0.9s';
});

let youtube = document.getElementById("youtube-link");
let youtube_text = document.getElementById("youtube-text");
youtube.addEventListener('mouseenter', () => {
  youtube_text.style.display = 'block';
  youtube_text.style.transition = '0.9s';
});
youtube.addEventListener('mouseleave', () => {
  youtube_text.style.display = 'none';
  youtube_text.style.transition = '0.9s';
});

// LinkedIn
let linkedin = document.getElementById("linkedin-link");
let linkedin_text = document.getElementById("linkedin-text");
linkedin.addEventListener('mouseenter', () => {
  linkedin_text.style.display = 'block';
  linkedin_text.style.opacity = '1';
  linkedin_text.style.transition = 'opacity 0.9s ease-in-out';
});
linkedin.addEventListener('mouseleave', () => {
  linkedin_text.style.display = 'none';
  linkedin_text.style.opacity = '0';
  linkedin_text.style.transition = 'opacity 0.9s ease-in-out';
});

// Instagram
let instagram = document.getElementById("instagram-link");
let instagram_text = document.getElementById("instagram-text");
instagram.addEventListener('mouseenter', () => {
  instagram_text.style.display = 'block';
  instagram_text.style.opacity = '1';
  instagram_text.style.transition = 'opacity 0.9s ease-in-out';
});
instagram.addEventListener('mouseleave', () => {
  instagram_text.style.display = 'none';
  instagram_text.style.opacity = '0';
  instagram_text.style.transition = 'opacity 0.9s ease-in-out';
});

// TikTok
let tiktok = document.getElementById("tiktok-link");
let tiktok_text = document.getElementById("tiktok-text");
tiktok.addEventListener('mouseenter', () => {
  tiktok_text.style.display = 'block';
  tiktok_text.style.opacity = '1';
  tiktok_text.style.transition = 'opacity 0.9s ease-in-out';
});
tiktok.addEventListener('mouseleave', () => {
  tiktok_text.style.display = 'none';
  tiktok_text.style.opacity = '0';
  tiktok_text.style.transition = ' 0.9s ease-in-out';
});

//fast link
let home_text=document.getElementById("body-text");
let  footer_home=document.getElementById("footer-home");
footer_home.addEventListener('mouseenter',()=>{
  home_text.style.display='block';
  home_text_text.style.opacity = '3';
  home_text.style.transition = ' 0.9s ease-in-out';

})

footer_home.addEventListener('mouseleave',()=>{
  home_text.style.display='none';
  home_text.style.opacity = '3';
  home_text.style.transition = '0.9s ease-in-out';
})
//about me
let about_me_text=document.getElementById("about-me-text");
let footer_about_me=document.getElementById("footer-about-me");
footer_about_me.addEventListener('mouseenter',()=>{
  about_me_text.style.display='block';
   about_me_text.style.opacity = '3';
  about_me_text.style.transition = '0.9s ease-in-out';
})
footer_about_me.addEventListener('mouseleave',()=>{
  about_me_text.style.display='none';
   about_me_text.style.opacity = '3';
  about_me_text.style.transition = '0.9s ease-in-out';
})

//skill
let skill_text=document.getElementById("skill-text");
let footer_skill=document.getElementById("footer-skill"); 
footer_skill.addEventListener('mouseenter',()=>{
  skill_text.style.display='block';
   skill_text.style.opacity = '3';
  skill_text.style.transition = '0.9s ease-in-out';

})
footer_skill.addEventListener('mouseleave',()=>{
  skill_text.style.display='none';
   skill_text.style.opacity = '3';
  skill_text.style.transition = '0.9s ease-in-out';

})

// project
let project_text=document.getElementById("project-text");
let footer_project=document.getElementById("footer-project");
footer_project.addEventListener('mouseenter',()=>{
  project_text.style.display='block';
   project_text.style.opacity = '3';
  project_text.style.transition = '0.9s ease-in-out';

})
footer_project.addEventListener('mouseleave',()=>{
  project_text.style.display='none';
   project_text.style.opacity = '3';
  project_text.style.transition = '0.9s ease-in-out';

})

// contact to me section
let contact_tome_text=document.getElementById("contact-to-me-text");
let footer_contact_tome=document.getElementById("footer-contact-to-me")
footer_contact_tome.addEventListener('mouseenter',()=>{
  contact_tome_text.style.display='block';
   contact_tome_text.style.opacity = '3';
  contact_tome_text.style.transition = '0.9s ease-in-out';
})
footer_contact_tome.addEventListener('mouseleave',()=>{
  contact_tome_text.style.display='none';
   contact_tome_text.style.opacity = '3';
  contact_tome_text.style.transition = '0.9s ease-in-out';
})