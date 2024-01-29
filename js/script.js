let darkThemeButton = document.querySelector('.theme-button-dark');
let lightThemeButton = document.querySelector('.theme-button-light');

// console.log(darkThemeButton);

darkThemeButton.onclick = function () {
    document.body.classList.add('dark');
    darkThemeButton.classList.add('active');
    lightThemeButton.classList.remove('active');
}

lightThemeButton.onclick = function () {
    document.body.classList.remove('dark');
    darkThemeButton.classList.remove('active');
    lightThemeButton.classList.add('active');    
}

let serifButton = document.querySelector('.font-button-serif');
let sansSerifButton = document.querySelector('.font-button-sans-serif');

serifButton.onclick = function () {
    document.body.classList.add('serif');
    sansSerifButton.onclick.remove('active');
    serifButton.classList.add('active');
}

sansSerifButton.onclick = function () {
    document.body.classList.remove('serif');
    sansSerifButton.onclick.add('active');
    serifButton.classList.remove('active');
}

let articles = document.querySelectorAll('.blog-article');

for (let article of articles) {
    let openButton = article.querySelector('.more');
    openButton.onclick = function () {
        article.classList.remove('short');
    }

}

let gridButton = document.querySelector(".card-view-button-grid");
let listButton = document.querySelector(".card-view-button-list");
let cardsList = document.querySelector(".cards");

gridButton.onclick = function () {
  cardsList.classList.remove("list");
  gridButton.classList.add("active");
  listButton.classList.remove("active");
}

listButton.onclick = function () {
  cardsList.classList.add("list");
  listButton.classList.add("active");
  gridButton.classList.remove("active");
}


let activePhoto = document.querySelector('.active-photo');
let previews = document.querySelectorAll('.preview-list a');

for (let preview of previews) {
    preview.onclick = function (evt) {
        evt.preventDefault();

        activePhoto.src = preview.href;

        let currentItem = document.querySelector('.preview-list .active-item');
        currentItem.classList.remove('active-item');
        preview.classList.add('active-item')
    };

}