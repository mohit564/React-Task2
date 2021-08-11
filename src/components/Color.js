import "./Color.css";

function Color(props) {
  const { id, count, value } = props.color;
  const incrementCountHandler = props.clickHandler;

  return (
    <div className="color">
      <p className="color-count">{count}</p>
      <button
        className="color-button"
        style={{ background: value }}
        onClick={incrementCountHandler.bind(null, id)}
      >
        CLICK
      </button>
    </div>
  );
}

export default Color;
