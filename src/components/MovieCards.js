import React from "react";

class MovieCards extends React.Component {
  state = {
    String: [],
  };

  componentDidMount() {
    fetch(`https://www.omdbapi.com/?apikey=45f0782a&s=beast`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ String: data.Search });
      });
  }

  render() {
    console.log(this.props.character);
    return (
      <>
        <div className="cardWrapper">
          {this.props.character === undefined ||
          this.props.character.length === 0
            ? this.state.String.map((item) => {
                return (
                  <div key={item.imdbID} className="box">
                    <img className="cardImg" src={item.Poster} alt="" />
                    <p className="Title">{item.Title}</p>
                    <div className="middle">
                      <div className="text">{item.Title}</div>
                    </div>
                  </div>
                );
              })
            : this.props.character.map((item) => {
                return (
                  <div key={item.imdbID} className="box">
                    <img className="cardImg" src={item.Poster} alt="" />
                    <p className="Title">{item.Title}</p>
                    <div className="middle">
                      <div className="text">{item.Title}</div>
                    </div>
                  </div>
                );
              })}
        </div>
      </>
    );
  }
}

export default MovieCards;
