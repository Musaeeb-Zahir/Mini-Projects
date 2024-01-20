(function main(){
    const form=document.querySelector("#massage-form")
    const massage=document.querySelector("#massage")
    const submitbtn=document.querySelector("#submitbtn")
    form.addEventListener("submit",(e)=>{
           e.preventDefault();
        const feedback=document.querySelector(".feedback")
        const msg_content=document.querySelector(".msg-content")
        if(massage.value===""){
            feedback.style.display="block";
            setTimeout(()=>{
                feedback.style.display="none";
            },2000)
        }
        else{
            msg_content.innerHTML=massage.value
            massage.value=""
        }
    })
})()