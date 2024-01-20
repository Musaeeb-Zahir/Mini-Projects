setInterval(()=>{
let a=new Date()
//    let con=getElementById("con")
let b=document.querySelector("#b")
b.classList.toggle("dnone")
let b2=document.querySelector("#b2")
b2.classList.toggle("dnone")
let d=document.querySelector(".date")
d.innerHTML=a.toDateString()
   let box1=document.getElementsByClassName("box-h")[0]
    
   box1.innerHTML=a.getHours();
   let box2=document.getElementsByClassName("box-m")[0]
   box2.innerHTML=a.getMinutes();
   let box3=document.getElementsByClassName("box-s")[0]
   box3.innerHTML=a.getSeconds();

},1000)


