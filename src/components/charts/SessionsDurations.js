import '../../styles/SessionsDurations.css';
import { AreaChart, Area, Tooltip, ResponsiveContainer, XAxis } from 'recharts';

function SessionsDurations() {
    const data = [
        {
          day: "L",
          sessionLength: 30,
        },
        {
          day: "M",
          sessionLength: 23,
        },
        {
          day: "M",
          sessionLength: 45,
        },
        {
          day: "J",
          sessionLength: 50,
        },
        {
          day: "V",
          sessionLength: 0,
        },
        {
          day: "S",
          sessionLength: 0,
        },
        {
          day: "D",
          sessionLength: 60,
        }
      ];

      // const switchDays= ()=>{
      //     switch(data.day) {
      //         case '1':
      //           return 'L';
      //         default:
      //           return 'foo';
      //     };
      // }

      // console.log(switchDays);

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
                  <XAxis dataKey="day" tickLine={false} axisLine={false} interval={0} maxTickGap={5}/>
                  {/* <YAxis /> */}
                  <Tooltip />
                  <Area type="monotone" dataKey="sessionLength" stroke="white" fill="white" fillOpacity="0.1" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

export default SessionsDurations;