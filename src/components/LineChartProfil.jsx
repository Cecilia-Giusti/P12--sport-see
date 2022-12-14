import React from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  Rectangle,
} from "recharts";
import "../style/graphLine.css";
import PropTypes from "prop-types";

/** Line chart
 * @param {array} data - data for chart
 * @return {JSX.Element}
 */
const LineChartProfil = ({ data }) => {
  const CustomizedTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="graphLine__content--toolTip">
          <p className="graphLine__item--toolTip">{`${payload[0].value} min`}</p>
        </div>
      );
    }
    return null;
  };

  const CustomizedCursor = ({ points }) => {
    return (
      <Rectangle
        fill="#000000"
        opacity={0.1}
        x={points[0].x}
        width={258}
        height={263}
      />
    );
  };
  return (
    <div className="graphLine">
      <h3 className="graphLine__title"> Durée moyenne des sessions</h3>

      <LineChart
        width={220}
        height={224}
        data={data}
        margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
        className="graphLine__content"
      >
        <CartesianGrid horizontal={false} vertical={false} />
        <XAxis
          dataKey="day"
          tick={{ fill: "#ffffff", fontWeight: 500, fontSize: 12 }}
          fillOpacity={0.5}
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />

        <YAxis
          hide={true}
          dataKey="sessionLenght"
          domain={["dataMin - 20", "dataMax + 20"]}
        />

        <Tooltip
          content={<CustomizedTooltip />}
          cursor={<CustomizedCursor />}
        />
        <Line
          type="natural"
          dataKey="sessionLenght"
          stroke="#fff"
          strokeWidth="2"
          dot={false}
          opacity={0.8}
        />
      </LineChart>
    </div>
  );
};

LineChartProfil.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      sessionLenght: PropTypes.number.isRequired,
    })
  ),
};

export default LineChartProfil;
