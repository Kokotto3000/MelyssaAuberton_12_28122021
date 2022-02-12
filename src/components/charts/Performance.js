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
      // setDataLoading(true);
        const ApiCall= switchService(id);
        ApiCall.fetchUserPerformance()
        .then(data => {
            
            if(!data){                
                // setIsError(true);
                const error= "data loading error";
                throw error;
            }
            // setIsError(false);
            setUserPerformance(data);
            }
        )
        .catch(error=> {
            console.log(error);            
        })
        // .finally(()=>{
        //     setDataLoading(false);
        // })
    }, [id]);

    return (
        <div className='performance'>
            <ResponsiveContainer className='performance_chart'>
                <RadarChart
                    outerRadius="60%" 
                    data={ userPerformance.data }>
                <PolarGrid />
                <PolarAngleAxis className="performance_chart-subject" dataKey="kind" />
                <Radar name="Thomas" dataKey="value" fill="red" fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
        
        
    );
}

Performance.propTypes = {
    id: PropTypes.number.isRequired
};

export default Performance;