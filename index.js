let notify =document.getElementById("notify")
let mark =document.getElementById("mark")
let show =document.querySelector(".show")
let hide =document.querySelector(".hide")
let red = document.querySelector(".red")
let unreadMessages =document.querySelectorAll(".unread");

show.addEventListener("click",function(){
  //  hide.style.display ="block";
   hide.classList.toggle("hide")

})

notify.innerText = unreadMessages.length;

unreadMessages.forEach((unreadMessage)=>{
    unreadMessage.addEventListener("click",function(){
    
      unreadMessage.classList.toggle("unread");
      
      red.classList.add("red")
  
      const newMessages= document.querySelectorAll(".unread");
  
      notify.innerText = newMessages.length;
  
      
    })
   
  })
  
  
  mark.innerText = "Mark All As Read"
  unreadMessages.forEach((unreadMessage)=>{
      mark.addEventListener("click",function(){
        red.classList.add("dot") 
       unreadMessage.classList.remove("unread") 
       hide.classList.remove("hide")
       
    
        const newMessages= document.querySelectorAll(".unread");
    
        notify.innerText = newMessages.length;

        
    
      
    }
      )
     
    })

   

   