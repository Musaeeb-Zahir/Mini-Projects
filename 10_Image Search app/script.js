const acesskey="L2JgVmGyAZfy2MVlKbeBUFlkBtppjvH6CtfPmpVwNAE";
const formEl=document.querySelector("form")
const inputEl=document.getElementById("search-input")
const searchResults=document.querySelector(".search-results")
const showmore=document.getElementById("show-more-btn")
let inputdata=""
let page=1;

async function searchImages(){
        inputdata=inputEl.value;
        const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${acesskey}`

        const response=await fetch(url)
        const data=await response.json();       
        const results=data.results
        console.log(results)

        if(page===1){
            searchResults.innerHTML="";
        }

        results.map((result)=>{
            const imagewrapper=document.createElement("div")
            imagewrapper.classList.add("search-result")
            const image=document.createElement('img')
            image.src=result.urls.small
            image.alt=result.alt_description;
            const imangelink=document.createElement('a')
            imangelink.href=result.links.html;
            imangelink.target="_blank"
            imangelink.textContent=result.alt_description;
            imagewrapper.appendChild(image)
            imagewrapper.appendChild(imangelink)
            searchResults.appendChild(imagewrapper)
        })
        page++;
    if(page>1){
        showmore.style.display='block';

    }
}

formEl.addEventListener("submit",(event)=>{
    event.preventDefault()
    page=1;
    searchImages()
    
})
showmore.addEventListener("click",()=>{
    searchImages()

})
