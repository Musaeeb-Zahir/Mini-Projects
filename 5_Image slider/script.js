// async function getImg(){
//     let a=await fetch('http://127.0.0.1:5500/img/')
//     let response =await a.text()
//     let div=document.createElement("div")
//     div.innerHTML=response;
//     let as=div.getElementsByTagName('a')
//     console.log(as);
//     let img=[]
//     for (let index = 0; index < as.length; index++) {
//         const element = as[index];
//         if(element.href.endsWith(".jpg")){
//             img.push(element.href.split("/img/")[1])
//             console.log(img);   
//         }  
//         let con=document.querySelector(".container")  
//         let left=document.querySelector("#left")
//         let right=document.querySelector("#right")
//         con.style.background=`url(img/${img[0]})`
//         left.addEventListener("click",(e)=>{
//             con.style.background=`url(img/${element})`
//         })
//     }  

// }

// getImg()

async function getImg() {
    let a = await fetch('http://127.0.0.1:5500/img/');
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName('a');
    let img = [];
    let currentImgIndex = 0;

    for (let index = 0; index < as.length; index++) {
        const element = as[index];

        if (element.href.endsWith(".jpg")) {
            img.push(element.href.split("/img/")[1]);
        }
    }

    let con = document.querySelector(".container");
    let left = document.querySelector("#left");
    let right = document.querySelector("#right");

    con.style.background = `url(img/${img[currentImgIndex]})`;

    left.addEventListener("click", function(e) {
        currentImgIndex = (currentImgIndex - 1 + img.length) % img.length;
        con.style.background = `url(img/${img[currentImgIndex]})`;
    });

    right.addEventListener("click", function(e) {
        currentImgIndex = (currentImgIndex + 1) % img.length;
        con.style.background = `url(img/${img[currentImgIndex]})`;
    });
}

getImg();

