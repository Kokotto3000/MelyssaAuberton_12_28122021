import '../../styles/AverageSessions.css';
import { LineChart, Line, Tooltip, ResponsiveContainer, XAxis, YAxis, ReferenceArea, CartesianGrid } from 'recharts';
import { useEffect, useState } from 'react';
import FetchData from '../../services/FetchData';

function AverageSessions(props) {

    const [ userAverageSessions, setUserAverageSessions ]= useState({});

    // const [ isDataLoading, setDataLoading]= useState(false);

    // const [ isError, setIsError ]= useState(true);

    useEffect(()=> {
        // setDataLoading(true);
        const ApiCall= new FetchData(props.id);
        ApiCall.fetchUserAverageSessions()
        .then(data => {
            console.log(data);
            if(!data){                
                // setIsError(true);
                const error= "data loading error";
                throw error;
            }
            // setIsError(false);
            setUserAverageSessions(data);
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
        <div className='sessions'>
            <h2>Durée moyenne des sessions</h2>
            <ResponsiveContainer className='sessions_chart'>
                <LineChart
                  data={ userAverageSessions.sessions}
                  margin={{
                    top: 5,
                    right: -15,
                    left: -15,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="1" horizontal="" vertical=""/>
                  <XAxis margin={{
                      top: 5,
                      right: 10,
                      left: 10,
                      bottom: 5,
                    }} 
                    dataKey="day" tickLine={false} axisLine={false} interval={0} maxTickGap={5} stroke="rgba(255, 255, 255, 0.6)" tick={{ fontSize: 14, fill: "rgba(255, 255, 255, 0.5)"}} />
                    <YAxis domain={["dataMin - 10", "dataMax + 30"]} hide={true} />
                    <Tooltip content={<CustomTooltip />} cursor={ false } />
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

export default AverageSessions;