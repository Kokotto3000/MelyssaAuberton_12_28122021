import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import '../../styles/DailyParameters.css';
import FetchData from '../../services/FetchData';
import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';

/**
 * 
 * @param {number} id 
 * @returns user daily parameters bar chart
 */

function DailyParameters({ id }) {

    const [ userActivity, setUserActivity ]= useState({});

    useEffect(()=> {
        const ApiCall= new FetchData(id);
        ApiCall.fetchUserActivity()
        .then(data => {
            if(!data){                
                const error= "data loading error";
                throw error;
            }
            setUserActivity(data);
            }
        )
        .catch(error=> {
            console.log(error);            
        })
    }, [id]);

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
                <BarChart data={userActivity.sessions} barGap={8} barSize={7} >                  
                    <CartesianGrid strokeDasharray="3 3" vertical={ false } />
                    <XAxis dataKey="day" tickLine={false} />
                    <YAxis yAxisId="kilogram" orientation="right" axisLine={ false } tickLine={ false } ticks={ userActivity.ticks } domain={['dataMin', 'dataMax']} />
                    <YAxis yAxisId="calories" orientation="left" axisLine={ false } tickLine={ false } hide={true} domain={['dataMin - 100', 'dataMax + 100']}/>
                    
                    <Tooltip content={<CustomTooltip />} />
                    <Bar yAxisId="kilogram" name="Poids (kg)" dataKey="kilogram" fill="#282D30"  radius={[ 20, 20, 0, 0 ]} />
                    <Bar yAxisId="calories" name="Calories brulées (kCal)" dataKey="calories" fill="#E60000"  radius={[ 20, 20, 0, 0 ]} />                                   
                </BarChart>
            </ResponsiveContainer>            
        </div>
    );
}

function CustomTooltip({ active, payload }){
    if(active){
        return (
            <div className="daily-parameters_tooltip">
                <p>{ payload[0].payload.kilogram }kg</p>
                <p>{ payload[0].payload.calories }Kcal</p>
            </div>
        )
    }
    return null;
}

DailyParameters.propTypes = {
    id: PropTypes.number.isRequired
};

export default DailyParameters;