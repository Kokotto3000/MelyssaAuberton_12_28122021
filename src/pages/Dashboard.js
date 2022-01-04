import '../styles/Dashboard.css';
import Banner from "../components/Banner";
import DailyParameters from "../components/charts/DailyParameters";
import SessionsDurations from "../components/charts/SessionsDurations";
import ActivityDetails from "../components/charts/ActivityDetails";
import Score from "../components/charts/Score";
import InfosCard from "../components/InfosCard";
import calories from "../assets/calories-icon.svg";
import protein from "../assets/protein-icon.svg";
import carbs from "../assets/carbs-icon.svg";
import fat from "../assets/fat-icon.svg";

import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import UserDatas from '../services/UserDatas';

function Dashboard() {
    const userId= useParams();
    const userIdInt = parseInt(userId.id);

    const [ userDatas, setUserDatas ]= useState({});

    useEffect(()=> {
        UserDatas(userIdInt)
        .then((data) => { 
            setUserDatas(data);
        })
        .catch((error)=> console.log(error))
        }, [userIdInt]);

    return (
        console.log(userDatas),
        <section className='dashboard'>
            <Banner firstName="Thomas" />
            <div className="dashboard_main">
                <div className='dashboard_charts'>
                    <DailyParameters />
                    <div className='dashboard_charts-trio'>
                        <SessionsDurations />
                        <ActivityDetails />
                        <Score />
                    </div>
                </div>
                <div className='dashboard_cards'>
                    <InfosCard icon={ calories } type="Calories" amount="1,970kCal" />
                    <InfosCard icon={ protein } type="Proteines" amount="155g" />
                    <InfosCard icon={ carbs } type="Glucides" amount="290g"/>
                    <InfosCard icon={ fat } type="Lipides" amount="50g"/>
                </div>
                
            </div>
        </section>        
                      
    );
}

export default Dashboard;