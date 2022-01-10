import '../../styles/SessionsDurations.css';
import { LineChart, Line, Tooltip, ResponsiveContainer, XAxis, YAxis } from 'recharts';

function SessionsDurations() {
    const data = [
        {
          day: "",
          sessionLength: 50,
        },
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
        },
        {
          day: "",
          sessionLength: 50,
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
                <LineChart
                  // width={250}
                  // height={200}
                  data={data}
                  margin={{
                    top: 5,
                    right: -15,
                    left: -15,
                    bottom: 5,
                  }}
                >
                  {/* <CartesianGrid strokeDasharray="3 3" /> */}
                  <XAxis margin={{
                    top: 5,
                    right: 10,
                    left: 10,
                    bottom: 5,
                  }} 
                  dataKey="day" tickLine={false} axisLine={false} interval={0} maxTickGap={5} stroke="rgba(255, 255, 255, 0.6)" tick={{ fontSize: 14, fill: "rgba(255, 255, 255, 0.5)"}} />
                  <YAxis domain={[-30, "dataMax + 30"]} hide={true} />
                  <Tooltip content={<CustomTooltip />} />
                  <Line type="natural" dataKey="sessionLength" stroke="rgba(255, 255, 255, 0.6)" strokeWidth={3} dot={false} activeDot={{ stroke: '#FFFFFF33', strokeWidth: 10, r: 5 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

function CustomTooltip({active, payload}){
  
    if(active){
      // console.log(payload[0].payload.sessionLength)
        return(
            <div className="sessions_tooltip">
                <p>{payload[0].payload.sessionLength} min</p>
            </div>
        )
    }

    return null;
}

export default SessionsDurations;