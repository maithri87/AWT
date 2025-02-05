function fetchCityId(cityId,callback){
    setTimeout(()=>{
        callback(cityId);
},1000);
    }
function fetchCityWeather(cityname,callback){
    setTimeout(()=>{
        console.log("fetch cityname:$(cityname)");
        const weather={cityname:'abc',temperature:28,condition:'sunny'};
        callback(weather);

},1000);
}

function displayWeather(weather){
    console.log(`cityname  ${weather.city}:`);
    console.log(`temperature  ${weather.temperature}c`);
    console.log(`condition:  ${weather.condition}`); 

}

fetchCityId(10,(cityname)=>{
    fetchCityWeather(cityname,displayWeather);
});