function openMobileMenu(){
    console.log("tap - menu");

    let nav = document.body.getElementsByClassName('top-nav')[0];

    nav.style.left = "0";
}

function closeMobileMenu(){
     let nav = document.body.getElementsByClassName('top-nav')[0];

     nav.style.left = "-25em";
}
function openMobileSearch(){
    console.log("tap - menu");

    let nav = document.body.getElementsByClassName('top-nav-search')[0];

    nav.style.left = "0";
}

function closeMobileSearch(){
     let nav = document.body.getElementsByClassName('top-nav-search')[0];

     nav.style.left = "-25em";
}