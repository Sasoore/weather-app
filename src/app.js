function date1(timestamp) {
  let date = new Date(timestamp)
  let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  let day = days[date.getDay()]
  let hours = date.getHours()
  let minutes = date.getMinutes()
  if (hours < 0) {
    hours = `0${hours}`
  }
  if (minutes < 0) {
    minutes = `0${minutes}`
  }
  return `${day} ${hours}:${minutes}`
}

function getTemp(response) {
  let d = document.querySelector('#description')
  let t = document.querySelector('#temp')
  let dateElement = document.querySelector('#date')
  let iconElement = document.querySelector('#icon')
  celciusTemperature = Math.round(response.data.main.temp)
  t.innerHTML = Math.round(celciusTemperature)
  d.innerHTML = response.data.weather[0].description
  dateElement.innerHTML = date1(response.data.dt * 1000)
  iconElement.setAttribute(
    'src',
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
  )
}

function search(event) {
  event.preventDefault()
  let city = document.querySelector('#search-input')
  let c = document.querySelector('h1')
  c.innerHTML = city.value
  let apiKey = 'c5eae455c0d84c0de87118e8f84251f7'
  let apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`
  axios.get(apiLink).then(getTemp)
}

let btn = document.querySelector('#searchBtn')
btn.addEventListener('click', search)

function displayFarenheit(event) {
  event.preventDefault()
  celciusClick.classList.remove('active')
  farenheitClick.classList.add('active')
  let celTemp = document.querySelector('#temp')
  let farenheitTemp = Math.round((celciusTemperature * 9) / 5 + 32)
  celTemp.innerHTML = farenheitTemp
}

function displaycelcius(event) {
  event.preventDefault()
  farenheitClick.classList.remove('active')
  celciusClick.classList.add('active')
  let farenTemp = document.querySelector('#temp')
  farenTemp.innerHTML = celciusTemperature
}

let celciusTemperature = null

let farenheitClick = document.querySelector('#farenheit')
farenheitClick.addEventListener('click', displayFarenheit)

let celciusClick = document.querySelector('#celcius')
celciusClick.addEventListener('click', displaycelcius)
