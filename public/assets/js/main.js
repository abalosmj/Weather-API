
// fetch data from API based on the value user selects from dropdown
async function getWeatherData(ct) {
    try {
        const apiKey = 'c518dc53fb134ff4bdd02655231010';
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${ct}&aqi=no`);
        const data = await response.json();

        // call to display data
        weatherDisplay(data);
    } catch (error) {
        console.error('Error occured:', error);
    }
}

// Get data for the the first default option
getWeatherData("Toronto, Canada");

//function to display weather data on HTML
function weatherDisplay(data) {
    console.log(data);
    console.log(data.location.name);
    console.log(data.current.temp_c);
    console.log(data.current.condition.text);
    console.log(data.current.condition.icon);

    // target HTML: celsius, weather description, weather icon
    const celsius = document.querySelector('#celsius');
    const weatherDesc = document.querySelector('#weatherDesc');
    const imgIcon = document.querySelector('#imgIcon');

    // add content to targeted HTML
    celsius.innerHTML = `${data.current.temp_c}°C`;
    weatherDesc.innerHTML = `${data.current.condition.text}`;
    imgIcon.src = `${data.current.condition.icon}`;
}
