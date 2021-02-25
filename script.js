// fetch("https://rawg-video-games-database.p.rapidapi.com/games", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "33af89b9c3mshcb6e5ddaeeb0ce5p16dfb8jsn588eda154fc8",
// 		"x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });

function getAPI(){
	fetch("https://rawg.io/api/games")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
			console.log(data)
            for (let i = 0; i < data.results.length; i++) {
                document.querySelector('h2').textContent += `${data.results[i].name}   `
            }
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
	}

    let next = 1

function nextPage(){
    next += 1
    console.log(next)
    let url = "https://rawg.io/api/games?page=" + next
	fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
			console.log(data)
            for (let i = 0; i < data.results.length; i++) {
                document.querySelector('h2').textContent += `${data.results[i].name}   `
            }
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

function clearH2(){
    window.location.reload()
}

document.querySelector('.search-btn').addEventListener('click', getAPI)
document.querySelector('.next-page-btn').addEventListener('click', nextPage)
document.querySelector('.clear-btn').addEventListener('click', clearH2)