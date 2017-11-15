// Default location (area code or city, state – in quotes)
var lc = "Providence, RI";


// Really Simple Weather Plug-In Details

reallySimpleWeather.weather({
  wunderkey: '', // leave blank for Yahoo API
  location: lc, //your location here, also works in lat/lon
  woeid: '', // "Where on Earth ID" optional alternative to location
  unit: 'f', // 'c' also works
  success: function(weather) {
    // sample data to display city and temperature
    html=  '<main>';
    html+= '<section class="top">';
    html+= '<h1 class="wdata-01">'+weather.city+','+weather.region+'</h1>';
    html+='<p class=wdata-08">'+weather.country+'</p>';
    html+= '<i class="icon icon-'+weather.code+'"></i>';
    html+= '<h3 class="wdata-04">'+weather.temp+'&deg;'+weather.units.temp+'</h3>';
    html+= '<p class="wdata-03">' +weather.currently+' </p>';
    html+='<h2 class="wdata-13">'+weather.forecast[0].date +'</h2>'; 

    
    html+= '</section>';
    

    html+= '<section class="middle">';
    html+='<i class="fa fa-sun-o" aria-hidden="true"></i>';
    html+='<h4 class="wdata-06">'+weather.sunrise+'</h4>';
    html+='<i class="fa fa-moon-o" aria-hidden="true"></i>';
    html+='<h4 class=wdata-07">'+weather.sunset+'</h4>';
    html+= '</section>';
    

    html+='<section class="bottom"> ';
    html+='<h3 class="wdata-05"> '+weather.text+'</h3>';
    html+='<h3 class="wdata-10">'+weather.visibility+'</h3>';
    html+='<h3 class="wdata-09></i>'+weather.wind.direction+'</h3>';
    html+='<i class="fa fa-arrows-alt" aria-hidden="true"></i>';
    
    html+='</section>';
    html+='</main>';
    

	  document.getElementById('weather').innerHTML = html;
  },
  error: function(error) {
	  document.getElementById('weather').innerHTML = '<p>'+error+'</p>';
  }
});

