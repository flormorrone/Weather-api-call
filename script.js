//animacion header con una libreria
$(document).ready(function() {
    var typed = new Typed('.typed', {
        strings: ['Weather app.'],
        smartBackspace: true,
        typeSpeed: 100,
        showCursor: false
    });
    // solicitud a API
    $("#searchInput").on("keyup", function(e) {
        var cityName = e.target.value;
        const APIKey = "8d1647aab8c8e0fb012895f2cff4c66c";
        $.ajax({
            url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}&units=metric`,
        }).done(function(weatherData) {
            $("#profile").html(`
            <div class= "container__profile">
                <img class="card-img-top" src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Weather: ${weatherData.weather[0].description}</h5>
                    <p class="card-text">La temperatura en  ${cityName} es <b>${weatherData.main.temp}</b> &#8451 Y la sensación térmica es <b>${weatherData.main.feels_like}</b> &#8451.</p>
                    <button class="btn"><a href="https://www.google.com/search?q=${cityName}" >Más sobre ${cityName}</a></button>
                </div>
            </div>`);
        });
    });
});