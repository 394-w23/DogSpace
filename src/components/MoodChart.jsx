import { ResponsiveContainer, LineChart, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';

const SAMPLE_DATA = [
  { time: 'morning', mood: 10 },
  { time: 'evening', mood: 5 },
  { time: 'night', mood: 8 }
];
export const MoodChart = () => {
  return (
    <div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={SAMPLE_DATA}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="mood" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
