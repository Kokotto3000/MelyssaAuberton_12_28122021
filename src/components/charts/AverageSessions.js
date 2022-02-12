import '../../styles/AverageSessions.css';
import { LineChart, Line, Tooltip, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import switchService from '../../services/SwitchService';

/**
 * 
 * @param {number} id - user Id
 * @returns user average sessions line chart
 */

function AverageSessions({ id }) {

    const [ userAverageSessions, setUserAverageSessions ]= useState({});

    const [ daysArray, setDaysArray]= useState([]);

    // const [ isDataLoading, setDataLoading]= useState(false);

    // const [ isError, setIsError ]= useState(true);

    useEffect(()=> {
        // setDataLoading(true);
        const ApiCall= switchService(id);
        ApiCall.fetchUserAverageSessions()
        .then(data => {
            if(!data){                
                // setIsError(true);
                const error= "data loading error";
                throw error;
            }
            // setIsError(false);
            setUserAverageSessions(data);
            const days=[];
            for(const session of data.sessions){
                days.push(session.day);
            }
            setDaysArray(days);
        })
        .catch(error=> {
            console.log(error);            
        })
        // .finally(()=>{
        //     setDataLoading(false);
        // })
    }, [id]);

    return(
        <div className='sessions'>
            <h2>Durée moyenne des sessions</h2>
            <ResponsiveContainer className='sessions_chart'>
                <LineChart
                // height={ 100 }
                  data={ userAverageSessions.sessions }
                  margin={{ top: 0, right: -1, left: -1, bottom: 0 }}
                >
                    {/* <CartesianGrid strokeDasharray="1" horizontal="" vertical=""/> */}
                    <XAxis
                    dataKey="day" tickLine={false} axisLine={false} interval={0} maxTickGap={5} hide={true}/>
                    <YAxis domain={["dataMin - 30", "dataMax + 30"]} hide={true} />
                    <Tooltip content={<CustomTooltip />} />
                    <Line type="natural" dataKey="sessionLength" stroke="rgba(255, 255, 255, 0.6)" strokeWidth={3} dot={false} activeDot={{ stroke: '#FFFFFF33', strokeWidth: 10, r: 5 }} />
                </LineChart>
            </ResponsiveContainer>
            <div className="sessions_xAxis">
                { daysArray.map((day, index) => (
                    <p key={ index }>
                        { day }
                    </p>
				)) }
            </div>
        </div>
    );
}

function CustomTooltip({ active, payload }){
  
    if(active){
      // console.log(payload[0].payload.sessionLength)
        return(
            <div className="sessions_tooltip">
                <p>{ payload[0].payload.sessionLength } min</p>
            </div>
        )
    }

    return null;
}

AverageSessions.propTypes = {
    id: PropTypes.number.isRequired
};

export default AverageSessions;