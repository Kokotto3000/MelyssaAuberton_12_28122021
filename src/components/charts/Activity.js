import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import '../../styles/Activity.css';
import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import switchService from '../../services/SwitchService';

/**
 * 
 * @param {number} id 
 * @returns user daily parameters bar chart
 */

function Activity({ id }) {

    const [ userActivity, setUserActivity ]= useState({});

    useEffect(()=> {
        const ApiCall= switchService(id);
        ApiCall.fetchUserActivity()
        .then(data => {
            if(!data){                
                const error= "activity data error";
                throw error;
            }
            setUserActivity(data);
        })
        .catch(error=> {
            console.log(error);            
        })
    }, [id]);

    return(
        <div className='activity'>
            <div className='activity_title'>
                <h2>Activité quotidienne</h2>
                <ul>
                    <li>Poids (kg)</li>
                    <li>Calories brûlées (kCal)</li>
                </ul>
            </div>

            <ResponsiveContainer className='activity_chart'>              
                <BarChart 
                    data={userActivity.sessions} 
                    barGap={8} 
                    barSize={7}
                    margin={{
                        top: 0,
                        right: -30,
                        left: 10,
                        bottom: 0,
                      }}
                >                  
                    <CartesianGrid 
                        strokeDasharray="3 3" 
                        vertical={ false } 
                    />
                    <XAxis 
                        dataKey="day" 
                        tickLine={false} 
                        /*scale="point" 
                        padding={{ left: 10, right: 10 }}*/
                    />
                    <YAxis 
                        yAxisId="kilogram" 
                        orientation="right" 
                        axisLine={ false } 
                        tickLine={ false } 
                        ticks={ userActivity.ticks } 
                        domain={['dataMin', 'dataMax']} 
                    />
                    <YAxis 
                        yAxisId="calories" 
                        orientation="left" 
                        axisLine={ false } 
                        tickLine={ false } 
                        hide={true} 
                        domain={['dataMin - 100', 'dataMax + 100']}
                    />
                    
                    <Tooltip content={<CustomTooltip />} />
                    <Bar 
                        yAxisId="kilogram" 
                        name="Poids (kg)" 
                        dataKey="kilogram" 
                        fill="#282D30"  
                        radius={[ 20, 20, 0, 0 ]} 
                    />
                    <Bar 
                        yAxisId="calories" 
                        name="Calories brulées (kCal)" 
                        dataKey="calories" 
                        fill="#E60000"  
                        radius={[ 20, 20, 0, 0 ]} 
                    />                                   
                </BarChart>
            </ResponsiveContainer>            
        </div>
    );
}

function CustomTooltip({ active, payload }){
    if(active){
        return (
            <div className="activity_tooltip">
                <p>{ payload[0].payload.kilogram }kg</p>
                <p>{ payload[0].payload.calories }Kcal</p>
            </div>
        )
    }
    return null;
}

Activity.propTypes = {
    id: PropTypes.number.isRequired
};

export default Activity;