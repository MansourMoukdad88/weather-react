import React, {Component} from 'react';
import Form from './components/Form';
import Weather from './components/Weather';


class App extends Component {
  render(){
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Form/>
      <Weather/>
    </div>
  );
  }
}

export default App;
