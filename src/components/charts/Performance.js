import '../../styles/Performance.css';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';
import FetchData from '../../services/FetchData';

function Performance(props) {

    const [ userPerformance, setUserPerformance ]= useState({});

    useEffect(()=> {
      // setDataLoading(true);
        const ApiCall= new FetchData(props.id);
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
    }, [props.id]);

    return (
        <div className='performance'>
            <ResponsiveContainer className='performance_chart'>
                <RadarChart
                    // width={250} 
                    // height={200} 
                    // margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                    // cx="50%" 
                    // cy="100%" 
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

export default Performance;