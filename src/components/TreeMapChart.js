import React, { PureComponent } from 'react';
import { Treemap, Tooltip, Legend, ResponsiveContainer } from "recharts";

const COLORS = ['#8889DD', '#9597E4', '#8DC77B', '#A5D297', '#E2CF45', '#F8C12D'];

const data = [
  {
    name: "axis", 
    children: [
      { name: "Axes", size: 1302 },
    ]
  },
  {
    name: "controls",
    children: [
      { name: "AnchorControl", size: 2138 },
    ]
  },
  {
    name: "data",
    children: [
      { name: "Data", size: 20544 },
    ]
  },
  {
    name: "operator",
    children: [
      {
        name: "distortion",
        size: 10000,
      }
    ]
  }
];


class CustomizedContent extends PureComponent {
  render() {
    const { root, depth, x, y, width, height, index, payload, colors, rank, name } = this.props;

    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          style={{
            fill: depth < 2 ? colors[Math.floor((index / root.children.length) * 6)] : 'none',
            stroke: '#fff',
            strokeWidth: 2 / (depth + 1e-10),
            strokeOpacity: 1 / (depth + 1e-10),
          }}
        />
        {depth === 1 ? (
          <text x={x + width / 2} y={y + height / 2 + 7} textAnchor="middle" fill="#fff" fontSize={14}>
            {name}
          </text>
        ) : null}
      </g>
    );
  }
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="tooltip">
        <p className="label">{`${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const TreeMapChart = () => {
  
  return (
    <ResponsiveContainer width={400} height={200}>
      <Treemap
          data={data}
          dataKey="size"
          ratio={4 / 3}
          stroke="#fff"
          fill="#8884d8"
          content={<CustomizedContent colors={COLORS} />}
      >
        <Tooltip content={<CustomTooltip />} />
      </Treemap>
    </ResponsiveContainer>
  )
}

export default TreeMapChart;