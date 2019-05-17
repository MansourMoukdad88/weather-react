import React, {Component} from 'react';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "9b460e7fb9cef063e8370b4553cd25f6";

// http://api.openweathermap.org/data/2.5/weather?q=amman,jordan&appid=e36ed364400282e43250b6c4c0274d44

class App extends Component {

  state = {
    temperature: "",
    city: "",
    country: "",
    humidity: "",
    description: "",
    error: ""

  }
  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
    const data = await api.json();
    console.log(data)
    if(city && country){
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      })
    } else {
      this.setState({
        temperature: "",
        city: "",
        country: "",
        humidity: "",
        description: "",
        error: "Please enter data; city and country"
      })
    }
  }
  render(){
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Form getWeather={this.getWeather}/>
      <Weather
      temperature= {this.state.temperature}
      city= {this.state.city}
      country= {this.state.country}
      humidity= {this.state.humidity}
      description= {this.state.description}
      error= {this.state.error}
      />
    </div>
  );
  }
}

export default App;
