import './Chart.css';
import ChartBar from './ChartBar';

export const Chart = prop => {
  return (
    //Make the number of bars inside the Chart dynamic. Map through an array of data to generate a ChartBar for each item in the array.
    <div className="chart">
      {props.dataPoints.map(dataPoint => {
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={null}
          label={dadtaPoint.label}
        />;
      })}
    </div>
  );
};
