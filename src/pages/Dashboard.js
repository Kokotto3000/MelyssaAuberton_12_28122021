import '../styles/Dashboard.css';
import Banner from "../components/Banner";
import DailyParameters from "../components/charts/DailyParameters";
import SessionsDurations from "../components/charts/SessionsDurations";
import ActivityDetails from "../components/charts/ActivityDetails";
import Score from "../components/charts/Score";
import InfosCard from "../components/InfosCard";
import Loader from '../components/Loader';
import calories from "../assets/calories-icon.svg";
import protein from "../assets/protein-icon.svg";
import carbs from "../assets/carbs-icon.svg";
import fat from "../assets/fat-icon.svg";

import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import UserDatas from '../services/UserDatas';
import NotFound from './NotFound';

// const USER_MAIN_DATA = [
//     {
//         id: 12,
//         userInfos: {
//             firstName: 'Karl',
//             lastName: 'Dovineau',
//             age: 31,
//         },
//         todayScore: 0.12,
//         keyData: {
//             calorieCount: 1930,
//             proteinCount: 155,
//             carbohydrateCount: 290,
//             lipidCount: 50
//         }
//     },
//     {
//         id: 18,
//         userInfos: {
//             firstName: 'Cecilia',
//             lastName: 'Ratorez',
//             age: 34,
//         },
//         score: 0.3,
//         keyData: {
//             calorieCount: 2500,
//             proteinCount: 90,
//             carbohydrateCount: 150,
//             lipidCount: 120
//         }
//     }
// ]

function Dashboard() {
    const userId= useParams();
    const userIdInt = parseInt(userId.id);

    const [ userDatas, setUserDatas ]= useState({});

    const [ isDataLoading, setDataLoading]= useState(false);

    const [ isError, setIsError ]= useState(true);

    useEffect(()=> {
        setDataLoading(true);
        UserDatas(userIdInt)
        .then(data => {
            console.log(data);
            if(!data){                
                setIsError(true);
                const error= "error"
                throw error;
            }
            setIsError(false);
            setUserDatas(data);            
        })
        .catch(error=> {
            console.log(error);            
        })
        .finally(()=>{
            setDataLoading(false);
        })
    }, [userIdInt]);

    console.log(isError);

    if(isDataLoading) return <Loader />;

    if(isError) return <NotFound />;

    return (
        
        <section className='dashboard'>
            <div>
                <Banner firstName={userDatas.data.userInfos.firstName} />
                <div className="dashboard_main">
                    <div className='dashboard_charts'>
                        <DailyParameters id={ userIdInt } />
                        <div className='dashboard_charts-trio'>
                            <SessionsDurations id={ userIdInt } />
                            <ActivityDetails id={ userIdInt } />
                            <Score score={ userDatas.data.todayScore } />
                        </div>
                    </div>
                    <div className='dashboard_cards'>
                        <InfosCard icon={ calories } type="Calories" amount={`${userDatas.data.keyData.calorieCount.toLocaleString('en-US')}kCal`} />                              
                        <InfosCard icon={ protein } type="Proteines" amount={`${userDatas.data.keyData.proteinCount}g`} />
                        <InfosCard icon={ carbs } type="Glucides" amount={`${userDatas.data.keyData.carbohydrateCount}g`} />
                        <InfosCard icon={ fat } type="Lipides" amount={`${userDatas.data.keyData.lipidCount}g`} />
                    </div>
                    
                </div>
            </div>
        </section>
        
    )
}

export default Dashboard;