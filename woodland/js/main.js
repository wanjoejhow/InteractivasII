function openMobileMenu(){

    let nav = document.body.getElementsByClassName('top-nav')[0];

    nav.style.left = "0";
}

function closeMobileMenu(){
     let nav = document.body.getElementsByClassName('top-nav')[0];

     nav.style.left = "-25em";
}
function openMobileSearch(){


    let nav = document.body.getElementsByClassName('top-nav-search')[0];

    nav.style.left = "5em";
}

function closeMobileSearch(){
     let nav = document.body.getElementsByClassName('top-nav-search')[0];

     nav.style.left = "24em";
}