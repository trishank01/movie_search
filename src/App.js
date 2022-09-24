import React from "react";
import "./App.css";
import InputBar from "./components/InputBar";
import MovieCards from "./components/MovieCards";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      character : []
    }
}

handleSubmit = (event) => {
  this.setState({
    value: event.target.value
  })

  fetch(`https://www.omdbapi.com/?apikey=45f0782a&s=${event.target.value}`)
  .then((res) => res.json())
  .then((data) => {
    this.setState({ character: data.Search});
  });

}


  render() {
    return (
      <div className="App">
         <InputBar handleSubmit={this.handleSubmit} />
        <MovieCards character={this.state.character} value={this.state.value}/>
      </div>
    );
  }
}

export default App;
