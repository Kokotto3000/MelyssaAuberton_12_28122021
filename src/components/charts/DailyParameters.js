import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import '../../styles/DailyParameters.css';

function DailyParameters() {
    const data = [
        {
          day: "2020-07-01",
          kilogram: 80,
          calories: 240,
        },
        {
          day: "2020-07-02",
          kilogram: 80,
          calories: 220,
        },
        {
          day: "2020-07-03",
          kilogram: 81,
          calories: 280,
        },
        {
          day: "2020-07-04",
          kilogram: 81,
          calories: 290,
        },
        {
          day: "2020-07-05",
          kilogram: 80,
          calories: 160,
        },
        {
          day: "2020-07-06",
          kilogram: 78,
          calories: 162,
        },
        {
          day: "2020-07-07",
          kilogram: 76,
          calories: 390,
        }
      ];
      
      const monthTickFormatter = (tick) => {
        const day = new Date(tick);
      
        return day.getDay() + 1;
      };

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
                    <XAxis dataKey="day" tickFormatter={monthTickFormatter} tickLine={false} />
                    <YAxis orientation="right" axisLine={ false } tickLine={ false } tickCount={ 3 }/>
                    <Tooltip />
                    {/* <Legend verticalAlign="top" /> */}
                    <Bar name="Poids (kg)" dataKey="kilogram" fill="#282D30"  radius={[ 20, 20, 0, 0 ]} />
                    <Bar name="Calories brulées (kCal)" dataKey="calories" fill="#E60000"  radius={[ 20, 20, 0, 0 ]} />                                   
                </BarChart>
            </ResponsiveContainer>            
        </div>
        
    );
}

export default DailyParameters;