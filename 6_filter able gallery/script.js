(function (){
    const buttons=document.querySelectorAll(".btn")
    const storeImage=document.querySelectorAll(".store-item")
    buttons.forEach(button => {
        button.addEventListener("click",(e)=>{
        e.preventDefault()
        const filter=e.target.dataset.filter //Jis pr click kra us ka filter nikalka filter ma store kro   e.g filter===car
        // console.log(e);
        
        storeImage.forEach((items)=>{
            if(filter==='all'){
                items.style.display="block"; 
            }else{
                if(items.classList.contains(filter)){  //filter ma car ha    
                    items.style.display="block";  //all items with car class display
                }
                else{    
                    items.style.display="none";  //all items with non of car class display none
                }
            }
        })
        })
    });
})()