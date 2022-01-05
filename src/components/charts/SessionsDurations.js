import '../../styles/SessionsDurations.css';
import { AreaChart, Area, Tooltip, ResponsiveContainer, XAxis } from 'recharts';

function SessionsDurations() {
    const data = [
        {
          day: 1,
          sessionLength: 30,
        },
        {
          day: 2,
          sessionLength: 23,
        },
        {
          day: 3,
          sessionLength: 45,
        },
        {
          day: 4,
          sessionLength: 50,
        },
        {
          day: 5,
          sessionLength: 0,
        },
        {
          day: 6,
          sessionLength: 0,
        },
        {
          day: 7,
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