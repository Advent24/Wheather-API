
  
  $("#find-weather").on("click", function(event) {
    event.preventDefault();
    
    var city = document.getElementById("city-input").value

    searchWeather(city)

});

// whatever city.on("click", function(){
//     searchWeather(# whahever city)
// })

function searchWeather(city){
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=0db99b16ef9a337109e17e5a74744e2a&units=imperial"

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
        console.log(queryURL);
        console.log(response);

        for (i = 0; i < response.list.length; i++){
            if (response.list[i].dt_txt.indexOf("12:00:00")!==-1) {
                console.log(response.list[i].dt_txt)
                var dayOneDate = response.list[i].dt_txt
                document.getElementById("oneDay").append(dayOneDate)
                console.log(response.list[i].main.humidity)
                document.getElementById("oneDay").append(dayOneDate)
                console.log(response.list[i].main.temp)
                document.getElementById("oneDay").append(dayOneDate)
            }
        }
        
    });
}

localStorage.getItem