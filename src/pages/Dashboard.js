import '../styles/Dashboard.css';
import Aside from "../components/Aside";

function Dashboard() {
    return (
        <main>            
            <Aside />
            <section className='dashboard_section'>
                <h1>Dashboard</h1>
            </section>
        </main>        
    );
}

export default Dashboard;