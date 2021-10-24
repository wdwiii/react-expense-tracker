import './Chart.css';
import { ChartBar } from './ChartBar';

export const Chart = props => {
  //Return s a new array with only the value for each data point, transforming the data from objects to numbers
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  //Max method wants list of items and not an array
  const totalMax = Math.max(...dataPointValues);

  return (
    //Make the number of bars inside the Chart dynamic. Map through an array of data to generate a ChartBar for each item in the array.
    <div className="chart">
      {props.dataPoints.map(dataPoint => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
