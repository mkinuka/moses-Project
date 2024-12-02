const getMovies = async () => {
    const response = await fetch(`http://www.omdbapi.com/?s=${searchValue.value}&apikey=242024d8`);
    const omdbResponse = await response.json();
    
    const movies = omdbResponse.Search;
    return movies;
}

const movieBox = document.getElementById("movies");
const searchForm = document.getElementById("searchForm");
const searchValue = document.getElementById("search"); 

searchForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const mySubmit = searchValue.value;
    if (mySubmit) {
        const movies = await getMovies(); 
        createMovieBox(movies);
    }
    else {
        const warning = document. createElement("p");
        warning.innerHTML = "could not find a title by that name.";
        document.body.appendChild(warning);
    }
}); 

const createMovieBox = (movies) => {
    movieBox.innerHTML = "";
movies.forEach((movie) => {

    const movieContainer = document.createElement("div");
    movieContainer.id = "container"; 
    const title = document.createElement("h2");
    title.id = "text";
    const moviePoster = document.createElement("img");
    moviePoster.id = "image";

    title.innerHTML = movie.Title;
    moviePoster.src = movie.Poster;
    moviePoster.alt = "Picture of the titled movie";

    movieBox.appendChild(movieContainer);
    movieContainer.appendChild(title);
    movieContainer.appendChild(moviePoster);
});
};

