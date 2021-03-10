api.openweathermap.org/data/2.5/weather?q={result}&appid:{API, key};

fetch('https://api.github.com/repos/nodejs/node/issues?per_page=5', {
  method: 'GET', //GET is the default.
  credentials: 'same-origin', // include, *same-origin, omit
  redirect: 'follow', // manual, *follow, error
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

  <li class="city">
  <h2 class="city-name" data-name="...">
    <span>...</span>
    <sup>...</sup>
  </h2>
  <span class="city-temp">...<sup>°C</sup></span>
  <figure>
    <img class="city-icon" src="..." alt="...">
    <figcaption>...</figcaption>
  </figure>
</li>


$(document).ready(function(){

    $( "#search-button" ).on( "click", function() {
        var result = $("#search-value").val()
        
        console.log(result);
      });







































})


