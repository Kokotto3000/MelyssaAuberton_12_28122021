import '../../styles/Performance.css';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import switchService from '../../services/SwitchService';

/**
 * 
 * @param {number} id 
 * @returns user performance radar chart
 */

function Performance({ id }) {

    const [ userPerformance, setUserPerformance ]= useState({});

    useEffect(()=> {
        const ApiCall= switchService(id);
        ApiCall.fetchUserPerformance()
        .then(data => {
            
            if(!data){                
                const error= "performance data error";
                throw error;
            }
            setUserPerformance(data);
            }
        )
        .catch(error=> {
            console.log(error);            
        })
    }, [id]);

    return (
        <div className='performance'>
            <ResponsiveContainer className='performance_chart'>
                <RadarChart
                    outerRadius="60%" 
                    data={ userPerformance.data }
                >
                    <PolarGrid />
                    <PolarAngleAxis 
                        className="performance_chart-subject" 
                        dataKey="kind" 
                    />
                    <Radar 
                        name="Thomas" 
                        dataKey="value" 
                        fill="red" 
                        fillOpacity={0.7} 
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}

Performance.propTypes = {
    id: PropTypes.number.isRequired
};

export default Performance;