import React, { Component } from "react";
import CardRet from "./cardret";
class Afis1 extends Component {
  render() {
    const { retete } = this.props;
    const lista = retete.map(item => (
      <CardRet
        key={item.id}
        id={item.id}
        imagine={item.imagine}
        denumire={item.denumire}
        ingrediente={item.ingrediente}
        afiPrep={this.props.afiPrep}
      />
    ));
    return <div className="row d-flex justify-content-center">{lista}</div>;
  }
}
export default Afis1;
