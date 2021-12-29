import './styles/App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <BrowserRouter>
            <Header />
            
            <main>            
                <Aside />
                
                <Routes>
                    <Route exact path="/:id" element={<Dashboard />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>                
            </main>  
            
        </BrowserRouter>
    );
}

export default App;
