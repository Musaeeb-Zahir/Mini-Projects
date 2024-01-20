const btn=document.getElementsByTagName("button")[0]
const body=document.getElementsByTagName("body")[0]

btn.addEventListener("click",()=>{
    let rgb1=Math.floor(Math.random()*256)
    let rgb2=Math.floor(Math.random()*256)
    let rgb3=Math.floor(Math.random()*256)
    let rgb=[rgb1,rgb2,rgb3]
    console.log(rgb);
    body.style.backgroundColor=`rgb(${rgb1},${rgb2},${rgb3})`
 })

