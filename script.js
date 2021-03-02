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

let pages = 1

function nextPage(){
    pages += 1
    console.log(pages)
    let url = "https://rawg.io/api/games?page=" + pages
	fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
			console.log(data)
            if (document.querySelector('ul').textContent !== "") {
                document.querySelector('ul').textContent = ""
            }
            for (let i = 0; i < data.results.length; i++) {
                if (data.results[i].slug.includes(input.value)){
                    console.log(data.results[i].name)
                    const li = document.createElement('li')
                    li.textContent = data.results[i].name
                    document.querySelector('ul').appendChild(li)
                }
            }
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

function prevPage(){
    pages -= 1
    console.log(pages)
    if (pages < 1) {
        pages = 1
    }
    let url = "https://rawg.io/api/games?page=" + pages
	fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
			console.log(data)
            if (document.querySelector('ul').textContent !== "") {
                document.querySelector('ul').textContent = ""
            }
            for (let i = 0; i < data.results.length; i++) {
                if (data.results[i].slug.includes(input.value)){
                    console.log(data.results[i].name)
                    const li = document.createElement('li')
                    li.textContent = data.results[i].name
                    document.querySelector('ul').appendChild(li)
                }
            }
            
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

function clearH2(){
    window.location.reload()
}

document.querySelector('.prev-page-btn').addEventListener('click', prevPage)
document.querySelector('.next-page-btn').addEventListener('click', nextPage)
document.querySelector('.clear-btn').addEventListener('click', clearH2)
document.querySelector('.submit-btn').addEventListener('click', searchAPI)

let input = document.querySelector('input')
function searchAPI(){
fetch("https://rawg.io/api/games")
.then(res => res.json())
.then(data => {
    pages = 1
    console.log(data)
    for (let i = 0; i < data.results.length; i++) {
        if (data.results[i].slug.includes(input.value)){
            console.log(data.results[i].name)
            const li = document.createElement('li')
            li.textContent = data.results[i].name
            document.querySelector('ul').appendChild(li)
        }
    }
})
.catch(err => {
    console.log(`error ${err}`)
});
}