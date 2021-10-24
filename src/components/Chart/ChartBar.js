import './ChartBar.css';

export const ChartBar = props => {
  let barFillHeight = '0%';

  if (props.maxValue > 0) {
    //If the max value is greater than zero, barFIllHeight is the value divided by the max value, rounded to the nearest integer, and converted to a string
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

//Notes: JSX style props accepts a JavaScript object for it's value.
