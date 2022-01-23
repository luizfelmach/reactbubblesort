import { Component } from "react";
import Axis from "../components/Axis";
import "./Display.css";

const initialState = {
  values: [],
  current: 0,
  count: 0,
};

for (let i = 0; i < 15; i++) {
  const value = Math.random() * (10 - 1 + 1) + 1;
  initialState.values.push(value);
}

export class Display extends Component {
  state = { ...initialState };

  constructor(props) {
    super(props);
    this.sort = this.sort.bind(this);
  }

  sort() {
    const { current, values } = this.state;
    if (current < values.length - 1) {
      const newValues = [...this.state.values];
      const _ =
        this.state.values[this.state.current + 1] <
        this.state.values[this.state.current]
          ? true
          : false;
      if (_) {
        newValues[this.state.current + 1] =
          this.state.values[this.state.current];
        newValues[this.state.current] =
          this.state.values[this.state.current + 1];
      }
      const count = this.state.count + 1;
      const values = [...this.state.values];
      const current = this.state.current + 1;
      this.setState({ values: newValues, current, count });
      setTimeout(this.sort, 500);
    } else {
      if (this.state.count > 0) {
        this.setState({ ...this.state.values, count: 0, current: 0 });
        setTimeout(this.sort, 100);
      } else {
        return;
      }
    }
  }

  render() {
    let rows = [];
    this.state.values.forEach((value, index) => {
      rows.push(<Axis key={index} value={value} />);
    });

    return (
      <div className="display">
        {rows}
        <div className="button">
          <button onClick={this.sort}>SORT</button>
        </div>
      </div>
    );
  }
}
