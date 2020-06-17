async function extract() {
	const data = await fetch('data');
	const json = await data.json();
	json.forEach(({id, datetime, score, customers}) => {
		console.log(id);
		var dateStr = JSON.parse(datetime);
        var dateObj = new Date(dateStr);
        date += dateObj.toDateString();
        time += dateObj.toTimeString();
		console.log(score);
		console.log(customers);
	});
}


function extract() {
    let data = await fetch('/data')
        .then((response) => response.json())
        .then((jsonData) => console.log(jsonData));
};

export default extract;

