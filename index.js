let clicks = document.querySelectorAll(".hdr-click-span")
clicks.forEach((hdrClickSpan)=>{
  hdrClickSpan.addEventListener("click",function(){
    if (this===document.querySelectorAll(".hdr-click-span")[0]){
        document.querySelector("#dropdown-menu1").classList.toggle("dropdown-menu-sub")
        document.querySelector("#angle1").classList.toggle("angle")
        document.querySelector("#first-angle").classList.toggle("angle")
    }else if(this === document.querySelectorAll(".hdr-click-span")[1]){
        document.querySelector("#dropdown-menu2").classList.toggle("dropdown-menu-sub")
        document.querySelector("#second-angle").classList.toggle("angle")
        document.querySelector("#angle2").classList.toggle("angle")
    }else if (this=== document.querySelectorAll(".hdr-click-span")[2]){
        document.querySelector("#dropdown-menu3").classList.toggle("dropdown-menu-sub")
        document.querySelector("#angle3").classList.toggle("angle") 
        document.querySelector("#third-angle").classList.toggle("angle") 
    }
  })
})

document.querySelector(".hamburger").addEventListener("click",()=>{
  document.querySelector("nav").style.display="flex"
  document.querySelector("#hamburger").classList.add("burg")
  document.querySelector("#hamburger").classList.remove("hamburger")
  document.querySelector(".close").style.display="flex"
})

document.querySelector(".close").addEventListener("click",()=>{
  document.querySelector("#hamburger").classList.remove("burg")
  document.querySelector("#hamburger").classList.add("hamburger")
  document.querySelector("nav").style.display="none"
  document.querySelector(".close").style.display="none"

})


