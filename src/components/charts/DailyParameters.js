import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import '../../styles/DailyParameters.css';
import FetchData from '../../services/FetchData';
import React, { useEffect, useState } from 'react';

function DailyParameters(props) {

    const [ userActivity, setUserActivity ]= useState({});

    // const [ isDataLoading, setDataLoading]= useState(false);

    // const [ isError, setIsError ]= useState(true);

    useEffect(()=> {
        // setDataLoading(true);
        const ApiCall= new FetchData(props.id);
        ApiCall.fetchUserActivity()
        .then(data => {
            // console.log(data);
            if(!data){                
                // setIsError(true);
                const error= "data loading error";
                throw error;
            }
            // setIsError(false);
            setUserActivity(data);
            }
        )
        .catch(error=> {
            console.log(error);            
        })
        // .finally(()=>{
        //     setDataLoading(false);
        // })
    }, [props.id]);

    return(
        // console.log(userActivity),
        <div className='daily-parameters'>
            <div className='daily-parameters_title'>
                <h2>Activité quotidienne</h2>
                <ul>
                    <li>Poids (kg)</li>
                    <li>Calories brûlées (kCal)</li>
                </ul>
            </div>

            <ResponsiveContainer className='daily-parameters_chart'>              
                <BarChart data={userActivity.sessions} barGap={8} barSize={7} >                  
                    <CartesianGrid strokeDasharray="3 3" vertical={ false } />
                    {/* <XAxis dataKey="day" tickFormatter={monthTickFormatter} tickLine={false} /> */}
                    <XAxis dataKey="day" tickLine={false} />
                    <YAxis yAxisId="kilogram" orientation="right" axisLine={ false } tickLine={ false } ticks={ userActivity.ticks } domain={['dataMin', 'dataMax']} />
                    <YAxis yAxisId="calories" orientation="left" axisLine={ false } tickLine={ false } hide={true} domain={['dataMin - 100', 'dataMax + 100']}/>
                    
                    <Tooltip content={<CustomTooltip />} />
                    {/* <Legend verticalAlign="top" /> */}
                    <Bar yAxisId="kilogram" name="Poids (kg)" dataKey="kilogram" fill="#282D30"  radius={[ 20, 20, 0, 0 ]} />
                    <Bar yAxisId="calories" name="Calories brulées (kCal)" dataKey="calories" fill="#E60000"  radius={[ 20, 20, 0, 0 ]} />                                   
                </BarChart>
            </ResponsiveContainer>            
        </div>
        
    );
}

function CustomTooltip({active, payload}){
    // console.log(payload)
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