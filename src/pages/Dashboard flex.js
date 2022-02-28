import '../styles/Dashboard.css';
import Banner from "../components/Banner";
import Activity from "../components/charts/Activity";
import AverageSessions from "../components/charts/AverageSessions";
import Performance from "../components/charts/Performance";
import Score from "../components/charts/Score";
import InfosCard from "../components/InfosCard";
import Loader from './Loader';
import calories from "../assets/calories-icon.svg";
import protein from "../assets/protein-icon.svg";
import carbs from "../assets/carbs-icon.svg";
import fat from "../assets/fat-icon.svg";

import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import NotFound from './NotFound';
import switchService from '../services/SwitchService';

/**
 * 
 * @returns user personnal dashboard with greetings banner, charts and infocards
 */

function Dashboard() {
    const userId= useParams();
    const userIdInt = parseInt(userId.id);

    const [ userDatas, setUserDatas ]= useState({});

    const [ isDataLoading, setDataLoading]= useState(true);

    const [ isError, setIsError ]= useState(true);

    useEffect(()=> {
        const ApiCall= switchService(userIdInt);
        ApiCall.fetchUserDatas()
        .then(data => {
            if(!data){                
                setIsError(true);
                const error= "data loading error";
                throw error;
            }
            setIsError(false);
            setUserDatas(data);
            }
        )
        .catch(error=> {
            console.log(error);            
        })
        .finally(()=>{
            setDataLoading(false);
        })
    }, [userIdInt]);

    if(isDataLoading) return <Loader />;

    if(isError) return <NotFound />;

    return (
        <section className='dashboard'>
                <Banner firstName={ userDatas.firstName } />
                
                <div className="dashboard_main">

                    <div className='dashboard_charts'>
                        <Activity id={ userIdInt } />
                        <div className='dashboard_charts-trio'>
                            <AverageSessions id={ userIdInt } />
                            <Performance id={ userIdInt } />
                            <Score score={ userDatas.score } />
                        </div>
                    </div>

                    <div className='dashboard_cards'>
                        <InfosCard icon={ calories } type="Calories" amount={`${userDatas.calorieCount}kCal`} />                              
                        <InfosCard icon={ protein } type="Proteines" amount={`${userDatas.proteinCount}g`} />
                        <InfosCard icon={ carbs } type="Glucides" amount={`${userDatas.carbohydrateCount}g`} />
                        <InfosCard icon={ fat } type="Lipides" amount={`${userDatas.lipidCount}g`} />
                    </div>
                    
                </div>
            
        </section>        
    )
}

export default Dashboard;