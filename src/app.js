function getTemp(response) {
  let d = document.querySelector('#description')
  let t = document.querySelector('#temp')
  t.innerHTML = Math.round(response.data.main.temp)
  d.innerHTML = response.data.weather[0].description
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
