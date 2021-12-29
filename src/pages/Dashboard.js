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

function Dashboard() {
    return (
        <section className='dashboard'>
            <Banner />
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