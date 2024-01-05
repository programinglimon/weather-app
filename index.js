// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=41f938edfdea148dad58e57cc6169683

async function getTemp(){
   let cityName = document.getElementById('cityName').value.toLowerCase();
   let location = document.getElementById('location');
   let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=41f938edfdea148dad58e57cc6169683&units=metric`
   const res =await fetch(url)
   const data = await res.json();
   console.log(data)
   let tempres = data.main.temp;
   let toFixedTemp = tempres.toFixed(0)
   const temp = document.getElementById('temp').innerHTML= `${toFixedTemp}`;
   location.innerHTML=`${data['name']}, Bangladesh`;

   document.getElementById('cityName').value =""
}
