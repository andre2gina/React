import React, { Component } from "react";
class CardRet extends Component {
  render() {
    const { id, denumire, imagine, ingrediente } = this.props;
    const lista = ingrediente.map(item => <li key={item}>{item}</li>);
    return (
      <div
        className="card overflow-hidden col-sm-6 col-md-4 col-lg-3 mr-3"
        style={{
          width: "300px",
          height: "400px",
          border: "1px solid #CCC",
          boxShadow: "4px 7px 5px #888888",
          position: "relative"
        }}
      >
        <img
          className="card-img-top"
          src={`/images/${imagine}`}
          alt="imagine"
        />
        <div
          className="card-body"
          style={{
            fontSize: "12px"
          }}
        >
          <h5 className="card-title">{denumire}</h5>
          <p
            style={{
              fontSize: "14px",
              marginBottom: "5px"
            }}
          >
            Ingrediente:
          </p>
          <ul>{lista}</ul>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            value={id}
            style={{ position: "absolute", right: "8px", bottom: "8px" }}
            onClick={this.props.afiPrep}
          >
            Preparare...
          </button>
        </div>
      </div>
    );
  }
}
export default CardRet;
