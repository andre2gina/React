import React, { Component } from "react";
import Afis1 from "./afis1";
import Afis2 from "./afis2";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      afisez: 0,
      retete: [
        {
          id: 1,
          denumire: "Chiftelute de naut cu orez",

          imagine: "chiftele1.png",
          ingrediente: [
            "100 g orez alb cu bob lung",
            "o lingura ulei de floarea-soarelui",
            "o ceapa mica tocata marunt",
            "un catel de usturoi pisat",
            "un ardei iute rosu – curatat de seminte si tocat marunt",
            "2 rosii – curatate de coaja si de seminte, tocate foarte marunt",
            "o cutie naut, circa 410 g, scurs si spalat",
            "un galbenus de ou",
            "3 linguri coriandru proaspat, tocat",
            "1/2 lingurita paprika",
            "sare si piper"
          ],
          preparare: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed d
o eiusmod
 tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
 consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
 cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
 proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
        },
        {
          id: 2,
          denumire: "Omletă cu brânză de capră",
          imagine: "omleta1.png",
          ingrediente: [
            "8 ouă mari",
            "sare, piper",
            "1 lingură de unt",
            "120 g brânză de capră, fărâmițată",
            "4 fire de ceapă verde",
            "3 linguri ulei de măsline",
            "1 lingură oțet din vin",
            "1 linguriță muștar",
            "6 cești de rucola",
            "o baghetă mică, încălzită"
          ],
          preparare: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed d
o eiusmod
 tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
 consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
 cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
 proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
        }
      ]
    };
    this.afiPrep = this.afiPrep.bind(this);
  }
  afiPrep(ev) {
    const idn = ev.target.value;
    this.setState({ afisez: idn });
    //console.log(`ID: ${idn}`);
  }
  render() {
    return (
      <div className="App container">
        <h1 className="text-center mt-5 mb-5">Retetele bunicii</h1>
        {this.state.afisez == 0 && (
          <Afis1 retete={this.state.retete} afiPrep={this.afiPrep} />
        )}
        {this.state.afisez > 0 && (
          <Afis2
            retete={this.state.retete}
            id={this.state.afisez}
            afiPrep={this.afiPrep}
          />
        )}
      </div>
    );
  }
}
export default App;
