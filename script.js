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

function clearH2(){
    window.location.reload()
}

let input = document.querySelector('input')
function searchAPI(){
fetch("https://rawg.io/api/games")
.then(res => res.json())
.then(data => {
    pages = 1
    console.log(data)
    for (let i = 0; i < data.results.length; i++) {
        pages += 1
        console.log(pages)
        let url = "https://rawg.io/api/games?page=" + pages
        fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
                console.log(data)
                for (let j = 0; j < data.results.length; j++) {
                    if (data.results[j].slug.includes(input.value)){
                        console.log(data.results[j])
                        const li1 = document.createElement('li')
                        li1.textContent = data.results[j].name
                        document.querySelector('ul').appendChild(li1)
                    }
                }
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
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

document.querySelector('.clear-btn').addEventListener('click', clearH2)
document.querySelector('.submit-btn').addEventListener('click', searchAPI)