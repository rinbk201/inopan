import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

export default function raderchart(props: any) {
  const { data } = props;
  return (
    <>
      <div>
        <RadarChart
          cx={250}
          cy={250}
          outerRadius={100}
          width={500}
          height={500}
          data={data}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis
            domain={[0, data[0].fullMark]}
            axisLine={false}
            tick={false}
          />
          <Radar
            dataKey="value"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
          <Radar
            dataKey="newValue"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </RadarChart>
      </div>
    </>
  );
}
