window.addEventListener('DOMContentLoaded', navigator, false)
window.addEventListener('hashchange', navigator, false)

function navigator() {
    console.log({location});

    if (location.hash.startsWith('#trends')) {
        
    } else if (location.hash.startsWith('#search=')) {
        searchPage();
    } else if (location.hash.startsWith('#movie=')) {
        movieDetailsPage()
    } else if (location.hash.startsWith('#category=')) {
        categoriesPage();
    } else {
        homePage();
    }
    
    location.hash
}

function homePage() {
    console.log('Home!!');
    getTredingMoviesPreview();
    getCategoriesPreview();
}

function categoriesPage() {
    console.log('category!!');
}

function movieDetailsPage() {
    console.log('Movie!!')
}


function searchPage() {
    console.log('Search!!')
}

function trendsPage() {
    console.log('TRENDS!!')
}