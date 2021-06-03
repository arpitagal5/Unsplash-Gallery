const inputText = document.querySelector('input');
const searchButton = document.querySelector('button');
const imageContainer = document.querySelector('.container');
const nextPage = document.querySelector('.next');
const auth = 'HcJtaOVPE6d_1ynLmDQFK_jUmcJnTTP21Lx68hczY78';

let query = 'cake' ;
let search = false ;
let pagenm = 1 ;
getImages();

searchButton.addEventListener('click' , e => {
    e.preventDefault();
    if(inputText.value.length >= 0){
        query = inputText.value;
        deleteChildren();
    }
    
    getImages();
})

function deleteChildren(){
    let lastChild = imageContainer.lastElementChild ;
    while(lastChild){
        imageContainer.removeChild(lastChild);
        lastChild = imageContainer.lastElementChild;
    }
}

async function getImages(){
    try{
        let response = await fetch(`https://api.unsplash.com/search/photos?client_id=${auth}&query=${query}&per_page=12&orientation=portrait&page=${pagenm}`);
    let data = await response.json();
    console.log(data , typeof data);
    data.results.forEach(element => {
        const image = `
        <div class="conatiner_img">
        <a href="${element.urls.full}">
        <img src="${element.urls.full}" alt="${element.alt_description}" /></a>
        <div class="hover_content">
        <p>${element.user.first_name}</p>
        <p>DOWNLOAD</p>
        </div>
        </div>`;
        imageContainer.innerHTML += image;
        
      });
    }catch{
        console.log("Server Error");

    }   
}
nextPage.addEventListener('click' , () => {
    if(!search){
        pagenm++ ;
        getImages();
    }

})

