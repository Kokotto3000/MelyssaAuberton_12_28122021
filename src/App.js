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

// import React, { useEffect, useState } from 'react';
// import { useParams } from "react-router-dom";

// import UserDatas from './services/UserDatas';

function App() {
    // console.log(useParams());
    
    // const [ userDatas, setUserDatas ]= useState({});

    // useEffect(()=> {
    //     UserDatas()
    //     .then((data) => { 
    //         setUserDatas(data);
    //     })
    //     .catch((error)=> console.log(error))
    //     }, []);
   
    return (
        
        // console.log(userDatas.data),

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
