import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


const App =()=> {
 const pageSize= 5;
  const [progress, setProgress]=useState(0)
  
    return (
      <div>
<Router>
<NavBar/>

<LoadingBar

        color='#f11946'
        height={3}
        progress={progress}
        
      />
      <Routes>
        
        <Route exact path="/" element={<News setProgress={setProgress} key="general"PageSize={pageSize} country="in" category="general"/>} />
        <Route exact path="/home" element={<News setProgress={setProgress} key="general"PageSize={pageSize} country="in" category="general"/>} />
        <Route exact path="/newsapp" element={<News setProgress={setProgress} key="general"PageSize={pageSize} country="in" category="general"/>} />
        <Route exact path="/sports" element={<News setProgress={setProgress} key="sports"PageSize={pageSize} country="in" category="sports"/>} />
        <Route exact path="/science" element={<News setProgress={setProgress} key="science" PageSize={pageSize}country="in" category="science"/>} />
        <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" PageSize={pageSize}country="in" category="entertainment"/>} />
        <Route exact path="/business" element={<News setProgress={setProgress} key="business"PageSize={pageSize} country="in" category="business"/>} />
        <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" PageSize={pageSize}country="in" category="technology"/>} />
        <Route exact path="/health" element={<News setProgress={setProgress} key="health"PageSize={pageSize} country="in" category="health"/>} />
      </Routes>

          
      </Router>
        </div>
    );
  }

export default App;