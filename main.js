let toggleNav = function(){
  let sideNav = document.querySelector(".sidenav");
  let cancel = document.querySelector(".cancel");
  let navHeader = document.querySelector(".sidenav h2");
  let navParagraph = document.querySelector(".sidenav p");
  let navList = document.querySelectorAll(".list a");
  let tab = document.querySelector(".tab");
  
  sideNav.style.width = "250px";
  cancel.style.visibility = "visible";
  navHeader.style.visibility = "visible";
  navParagraph.style.visibility = "visible";
  tab.style.visibility = "hidden";
  
  let arrayLength = navList.length;
  for(i=0; i < arrayLength; i++){
    navList[i].style.visibility = "visible";
  }
}

let closeNav = function(){
  let sideNav = document.querySelector(".sidenav");
  let cancel = document.querySelector(".cancel");
  let navHeader = document.querySelector(".sidenav h2");
  let navParagraph = document.querySelector(".sidenav p");
  let navList = document.querySelectorAll(".list a");
  let tab = document.querySelector(".tab");
  
  sideNav.style.width = "0";
  cancel.style.visibility = "hidden";
  navHeader.style.visibility = "hidden";
  navParagraph.style.visibility = "hidden";
  tab.style.visibility = "visible";
  
  let arrayLength = navList.length;
  for(i=0; i < arrayLength; i++){
    navList[i].style.visibility = "hidden";
  }
}
document.querySelector(".tab").addEventListener("click", toggleNav);
document.querySelector(".cancel").addEventListener("click", closeNav);

