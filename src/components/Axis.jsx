import "./Axis.css";

export default (props) => {
  return (
    <div
      className="axis"
      style={{
        height: `${props.value * 20}px`,
      }}
    ></div>
  );
};
