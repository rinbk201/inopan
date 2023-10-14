import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

export default function raderchart(props: any) {
  const { data } = props;
  console.log(data);
  return (
    <>
      <div>
        <RadarChart
          cx={200}
          cy={140}
          outerRadius={100}
          width={400}
          height={250}
          data={data}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" tick={{ fill: "#494949" }} />
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
