const curser=document.querySelector(".curser")
var timeout;
// Curser Movement
document.addEventListener("mousemove",(e)=>{
    let x=e.pageX;
    let y=e.pageY;
    curser.style.top=y +"px"
    curser.style.left=x +"px"
    curser.style.display="block"
    
    //Function animation stop
    function mousestopped(){
        curser.style.display="none"
        
    }
    
    //hide animation
    clearTimeout(timeout)
    timeout=setTimeout(mousestopped,1000)
    
    //hide when mouse out
    document.addEventListener("mouseout",()=>{
        curser.style.display="none"
        
    })
})