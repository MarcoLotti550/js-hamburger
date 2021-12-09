menuactive = document.querySelector(".fa-bars");
menuactive.addEventListener("click" , 

  function(){
    const element = document.querySelector('.hamburger-menu');
    element.className = element.classList + " active";
  }
);

menuoff = document.querySelector(".fa-times");
menuoff.addEventListener("click" , 

  function(){
    const element = document.querySelector('.hamburger-menu');
    element.className = "hamburger-menu";
  }
);
