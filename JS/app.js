console.log("@#@#@ Conectado...")

document.addEventListener('DOMContentLoaded', () => {
    loadData(city = null)
})

const loadData = async (city) => {
    if (!city) {
        city = 'new york'
    }
    const url = `https://realty-in-us.p.rapidapi.com/locations/v2/auto-complete?input=${city}&limit=10`;
		const options = {
			method: 'GET',
			headers: {
				'x-rapidapi-key': 'ad36e289afmshec1552907ff42a0p187d4cjsna8c0ba4a092a',
				'x-rapidapi-host': 'realty-in-us.p.rapidapi.com'
			}
		};

		try {
			const response = await fetch(url, options);
			const result = await response.json();
			console.log('@#@#@ result => ', result);
		} catch (error) {
			console.error(error);
		}
}