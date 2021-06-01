const submitBtn = document.getElementById('SearchBtn');
const city_name = document.getElementById('cityName');
const city_name_Output = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');

const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = city_name.value;
    if(cityVal==""){
        city_name_Output.innerText = `Please Enter The City Name`;
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=7c9a96f7db6bac69bd3c274013693eea`
            const respone = await fetch(url);
            const data = await respone.json();
            const arrData = [data];
            city_name_Output.innerText = ``;
            city_name_Output.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;
            const tempMod = arrData[0].weather[0].main;
            
            //condition to check sunny or cloud
            if (tempMod == "Sunny") {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68'></i>"
            } else if (tempMod == "Clouds") {
                temp_status.innerHTML = "<i class='fad fa-clouds'></i>"
            } else if (tempMod == "Rain") {
                temp_status.innerHTML = "<i class='fas fa-cloud-moon-rain'></i>"
            } else {
                temp_status.innerHTML = "<i class='fas fa-sun-haze'></i>"
            }
        }
        catch{
            city_name_Output.innerText = `Please Enter The City Name Correct`;
        }
    }
}
submitBtn.addEventListener('click',getInfo);