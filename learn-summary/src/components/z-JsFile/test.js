let arr = [{ lat: '123', lon: '456' }, { lat: '123', lon: '456' }, { lat: '123', lon: '456' }]
let newarr = [...arr.lat, ...arr.lon]
console.log(newarr);