import { Component } from "react";
import Axis from "../components/Axis";
import "./Display.css";

export class Display extends Component {
  render() {
    let rows = [];
    for (let i = 0; i < 20; i++) {
      rows.push(
        <Axis key={i} value={Math.floor(Math.random() * (10 - 1 + 1)) + 1} />
      );
    }
    return (
      <div className="display">
        {rows}
        <div className="button">
          <button>Sort</button>
        </div>
      </div>
    );
  }
}
