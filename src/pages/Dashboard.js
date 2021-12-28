import '../styles/Dashboard.css';
import Banner from "../components/Banner";
import DailyParameters from "../components/charts/DailyParameters";
import SessionsDurations from "../components/charts/SessionsDurations";
import ActivityDetails from "../components/charts/ActivityDetails";
import Score from "../components/charts/Score";
import InfosCards from "../components/charts/InfosCards";

function Dashboard() {
    return (
        <section className='dashboard'>
            <Banner />
            <div className="dashboard_main">
                <div className='dashboard_charts'>
                    <DailyParameters />
                    <div>
                        <SessionsDurations />
                        <ActivityDetails />
                        <Score />
                    </div>
                </div>
                <InfosCards />
            </div>
        </section>        
                      
    );
}

export default Dashboard;