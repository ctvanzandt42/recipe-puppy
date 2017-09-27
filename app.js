let search = document.querySelector("input");
let recipes = document.querySelector(".container");

search.addEventListener("keydown", function (e) {
    let url = "http://recipepuppyproxy.herokuapp.com/api/?q=" + search.value;

    if (event.keyCode === 13) {
        axios.get(url).then(function (response) {
            let data = response.data.results;
            console.log(data);
            data.forEach(function (data) {
                let searchResults = ``;
                searchResults = `
            <div class="recipe" style="background-image: url(${data.thumbnail}), url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Dialog-error-round.svg/2000px-Dialog-error-round.svg.png)"><p class="title"><a href="${data.href}">${data.title}</a></p>
            </div>`;

                recipes.innerHTML += searchResults;
            });
        });
    }
});

