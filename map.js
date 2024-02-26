ciudades = [
            "Nueva York", 
            "París", 
            "Londres", 
            "Tokio", 
            "Los Ángeles", 
            "Roma", 
            "Londres", 
            "Madrid", 
            "París", 
            "Berlín", 
            "Madrid", 
            "Nueva York", 
            "Londres"];

function logMostOcurrCities(numCities) {
    const cities = {};
    ciudades.forEach(city => {
        cities[city] = !cities[city] ? 1 : cities[city] += 1;
    });

    return Object.keys(cities)
        .map(city => ({ name: city, times: cities[city]}))
        .sort((a, b) => b.times - a.times)
        .slice(0, numCities)
        .map(city => city.name);
}

console.log(logMostOcurrCities(5));
