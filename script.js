let pages = 0

let input = document.querySelector('input')
function searchAPI(){
fetch("https://rawg.io/api/games")
.then(res => res.json())
.then(data => {
    pages = 0
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
    }
})
.catch(err => {
    console.log(`error ${err}`)
});
}

function clearH2(){
    window.location.reload()
}


document.querySelector('.clear-btn').addEventListener('click', clearH2)
document.querySelector('.submit-btn').addEventListener('click', searchAPI)