import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import '../../styles/DailyParameters.css';

function DailyParameters() {
    const data = [
        {
          day: "1",
          kilogram: 80,
          calories: 240,
        },
        {
          day: "2",
          kilogram: 80,
          calories: 220,
        },
        {
          day: "3",
          kilogram: 81,
          calories: 280,
        },
        {
          day: "4",
          kilogram: 81,
          calories: 290,
        },
        {
          day: "5",
          kilogram: 80,
          calories: 160,
        },
        {
          day: "6",
          kilogram: 78,
          calories: 162,
        },
        {
          day: "7",
          kilogram: 76,
          calories: 390,
        }
      ];
      
      // const monthTickFormatter = (tick) => {
      //   const day = new Date(tick);
      
      //   return day.getDay() + 1;
      // };

    return(
        <div className='daily-parameters'>
            <div className='daily-parameters_title'>
                <h2>Activité quotidienne</h2>
                <ul>
                    <li>Poids (kg)</li>
                    <li>Calories brûlées (kCal)</li>
                </ul>
            </div>

            <ResponsiveContainer className='daily-parameters_chart'>              
                <BarChart data={data} barCategoryGap={40} barGap={5} >                  
                    <CartesianGrid strokeDasharray="3 3" vertical={ false } />
                    {/* <XAxis dataKey="day" tickFormatter={monthTickFormatter} tickLine={false} /> */}
                    <XAxis dataKey="day" tickLine={false} />
                    <YAxis orientation="right" axisLine={ false } tickLine={ false } tickCount={ 3 } />
                    {/* <YAxis yAxisId="left" orientation="left" axisLine={ false } tickLine={ false } tickCount={ 1 } /> */}
                    
                    <Tooltip content={<CustomTooltip />} />
                    {/* <Legend verticalAlign="top" /> */}
                    <Bar name="Poids (kg)" dataKey="kilogram" fill="#282D30"  radius={[ 20, 20, 0, 0 ]} />
                    <Bar name="Calories brulées (kCal)" dataKey="calories" fill="#E60000"  radius={[ 20, 20, 0, 0 ]} />                                   
                </BarChart>
            </ResponsiveContainer>            
        </div>
        
    );
}

function CustomTooltip({active, payload}){
    if(active){
        return (
            <div className="daily-parameters_tooltip">
                <p>{payload[0].payload.kilogram}kg</p>
                <p>{payload[0].payload.calories}Kcal</p>
            </div>
        )
    }

    return null;
}

export default DailyParameters;