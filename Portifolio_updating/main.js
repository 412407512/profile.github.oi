
let setting_toggler = document.querySelector('.setting')
let div = document.querySelector('.div');
let dark = document.querySelector('.dark');
let nav_toggler = document.querySelector('.nav_toggler');
let aside = document.querySelector('aside');
let back = document.querySelector('.back');
let span1 = document.querySelector('.nav_toggler span:nth-child(1)');
let span2 = document.querySelector('.nav_toggler span:nth-child(2)');
let span3 = document.querySelector('.nav_toggler span:nth-child(3)');


// to open color list
setting_toggler.addEventListener("click", () => {
    div.classList.toggle('open');
 
})

window.addEventListener("scroll", () => {
    if (div.classList.contains('open')) {
        div.classList.remove('open');
    }
})


// colors

  function color1() {
    document.body.classList.toggle('color1');
    }
   function color2() {
    document.body.classList.toggle('color2');
    }
  function  color3() {
    document.body.classList.toggle('color3');
    }
   function color4() {
    document.body.classList.toggle('color4');
    }
function color5() {
    document.body.classList.toggle('color5');
}

//===================  Theme Mode   =====================//
function theme() {
    let SetTheme = document.body;
        
    SetTheme.classList.toggle('variables_dark_theme');
    dark.querySelector('span').style.transform= 'rotate(1turn)';
    dark.querySelector('span').classList.toggle('fa-sun');
    
    let Theme;

    if (SetTheme.classList.contains('variables_dark_theme')) {
        console.log("Dark_mode");
        Theme = "Dark";
    } else {
        console.log("Light_Mode");
        Theme = "Light";
    }

    localStorage.setItem("pageTheme", Theme);
}

let GetTheme =localStorage.getItem("pageTheme");
console.log(GetTheme);
if (GetTheme === "Dark") {
    document.body.classList = "variables_dark_theme";
}
    
//===== toggler navbar =====/


nav_toggler.addEventListener('click', () => {
    aside.classList.toggle('toggle');

    if (aside.classList.contains('toggle')) {
        span1.style = `transform: rotate(-60deg)`;
        span2.style = `display:none;`;
        span3.style = `transform: rotate(60deg); margin-top: -5px`;
     
        
    } else {
        span1.style = `transform: rotate(-0)`;
         span2.style = `display:block;`;
        span3.style = `transform: rotate(0);`;
            
            
    }
})




// Animation Scrolling

let Section_about = document.querySelector('.about');
// info

let info = document.querySelector('.skills .info');
let skill = document.querySelector('.skill');
let home_info = document.querySelector('.home .home_info');
let home_img = document.querySelector('.home_img');
let eduction = document.querySelector('.eduction');
let Experience = document.querySelector('.Experience');
let port = document.querySelector('.port');
let cards = document.querySelectorAll('.service .content .card');


window.onload = () => {
    home_img.style = ' transform: translateY(0px); opacity:1';
    home_info.style = ' transform: translateY(0px); opacity:1';
}

window.onscroll = function () {
    if (scrollY > 300) {
        Section_about.style = ' opacity:1;  transform: translateY(0px); ';
    }
    if (scrollY > 700) {
        info.style='transform: translateY(0px); opacity:1; '
        skill.style='transform: translateY(0px); opacity:1;'
    }
    if (scrollY > 1169) {
          eduction.style = ' transform: translateY(0px); opacity:1; ';
          Experience.style = ' transform: translateY(0px); opacity:1; ';
    }
    if (scrollY > 2000) {

        for (i = 0; i < cards.length; i++){
            cards[i].style = ' transform:translateY(0px); opacity:1;';
        }
    }
    if (scrollY > 2282) {
        port.style = "transform:translateY(0px); opacity:1;";
    }
    // Button return //

 
    if (scrollY > 400) {
        back.style.display = "flex";
    } else {
          back.style.display = "none";
    }
  
}



// create










// // TEST
// function Theming() {
//     let SetColor = document.body;
//     SetColor.classList.toggle('variables_dark_theme');
  
//     let color;
//     if (SetColor.classList.contains('variables_dark_theme')) {
//         color = "DARK";
//     } else {
//         color = "LIGHT";
//     }
//     localStorage.setItem("Theme", color);
// }
// let GetColor = localStorage.getItem("Theme");
// if (GetColor === "DARK") {
//     document.body.classList = "variables_dark_theme";
//     console.log(GetColor + "Fucked");
// }