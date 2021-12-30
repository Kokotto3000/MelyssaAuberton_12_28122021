import '../../styles/SessionsDurations.css';
import { AreaChart, Area, Tooltip, ResponsiveContainer, XAxis } from 'recharts';

function SessionsDurations() {
    const data = [
        {
          name: 'L',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'M',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'M',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'J',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'V',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'S',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'D',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];

    return(
        <div className='sessions'>
            <h2>Durée moyenne des sessions</h2>
            <ResponsiveContainer className='sessions_chart'>
                <AreaChart
                // width={250}
                // height={200}
                data={data}
                margin={{
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                }}
                >
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis dataKey="name" tickLine={false} axisLine={false} interval={0} maxTickGap={5}/>
                {/* <YAxis /> */}
                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke="white" fill="white" fillOpacity="0.1" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

export default SessionsDurations;