fetch("https://rawg-video-games-database.p.rapidapi.com/games", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "33af89b9c3mshcb6e5ddaeeb0ce5p16dfb8jsn588eda154fc8",
		"x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});