import React, { Component } from "react";
import SelectHero from "../components/SelectHero";
import ImageOf from "../components/Image";

class HerosContainer extends Component {
  state = {
    heros: [],
    images: [],
    selectedHero: "",
  };

  //https://akabab.github.io/superhero-api/api/all.json

  componentDidMount() {
    const fetchHeros = () => {
      fetch("https://localhost:3000/users")
        .then((res) => res.json())
        .then((data) => {
          const heros = data;

          this.setState({ heros });

          console.log(this.state);
        });
    };
    setTimeout(fetchHeros, 2000);
  }

  renderHeros = () => {
    return this.state.heros.map((hero) => {
      return (
        <>
          <h3>{hero.name}</h3>
          <img src={hero.images.lg} />
        </>
      );
    });
  };

  render() {
    return (
      <>
        <div className="container">{this.renderHeros()}</div>
      </>
    );
  }

  //   render() {
  //       return (
  //           <div className="container">
  //               <h1>Heros</h1>
  //               <h3>Select a Hero or Villian to get Started</h3>
  //               {this.state.heros.length > 0 ? (
  //                   <SelectHero
  //                       options={this.state.heros}
  //                       handleOnChange={this.handleHeroSelect}
  //                   />
  //               ) : (
  //                   <p>...processing</p>
  //               )}
  //               {this.state.selectedHero && this.renderImages()}
  //           </div>
  //       );
  //   }
} //

export default HerosContainer;
