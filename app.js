const inputText = document.querySelector('input');
const searchButton = document.querySelector('button');
const imageContainer = document.querySelector('.container');
const nextPage = document.querySelector('.next');
const auth = 'HcJtaOVPE6d_1ynLmDQFK_jUmcJnTTP21Lx68hczY78';

let query = '' ;
let pagenm = 1 ;

searchButton.addEventListener('click' , e => {
    e.preventDefault();
    getImages();
})

async function getImages(){
    query = inputText.value ;
    let response = await fetch(`https://api.unsplash.com/search/photos?client_id=${auth}&query=${query}&per_page=10&orientation=portrait&page=${pagenm}`);
    let data = await response.json();
    console.log(data , typeof data);
    data.results.forEach(element => {
        const img = document.createElement('img');
        img.src = element.urls.full ;
        imageContainer.appendChild(img);
        
    });
   
}
// fetch(`https://api.unsplash.com/photos?client_id=${auth}&query=fire&per_page=30&orientation=portrait&page=1`)
// .then(response => response.json())
// .then(data => console.log(data));
