import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import '../../styles/DailyParameters.css';

function DailyParameters() {
    const data = [
        {
          date: '2000-01',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          date: '2000-02',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          date: '2000-03',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          date: '2000-04',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          date: '2000-05',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          date: '2000-06',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          date: '2000-07',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
        {
          date: '2000-08',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          date: '2000-09',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          date: '2000-10',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          date: '2000-11',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          date: '2000-12',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
      ];
      
      const monthTickFormatter = (tick) => {
        const date = new Date(tick);
      
        return date.getMonth() + 1;
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
                <BarChart data={data} barCategoryGap={20} barGap={5} >                  
                    <CartesianGrid strokeDasharray="3 3" vertical={ false } />
                    <XAxis dataKey="date" tickFormatter={monthTickFormatter} tickLine={false} />
                    <YAxis orientation="right" axisLine={ false } tickLine={ false } tickCount={ 3 }/>
                    <Tooltip />
                    {/* <Legend verticalAlign="top" /> */}
                    <Bar name="Poids (kg)" dataKey="pv" fill="#282D30"  radius={[ 20, 20, 0, 0 ]} />
                    <Bar name="Calories brulées (kCal)" dataKey="uv" fill="#E60000"  radius={[ 20, 20, 0, 0 ]} />                                   
                </BarChart>
            </ResponsiveContainer>            
        </div>
        
    );
}

export default DailyParameters;