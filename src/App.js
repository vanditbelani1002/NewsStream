import './App.css';
import React, { useState } from 'react'
import NavBar from './component/NavBar';
import News from './component/News';
import {BrowserRouter,Route,Routes,} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress,setProgress] = useState(0)
    return (
      <div> 
        <BrowserRouter>
        <NavBar />
        <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      />
      <Routes>
        <Route exact path="/" element={<News setProgress ={setProgress} apiKey={apiKey}  key="general" pageSize={5} country="in" category="general" />} />
        <Route exact path="/business" element={<News setProgress ={setProgress} apiKey={apiKey}  key="business" pageSize={5} country="in" category="business" />} />
        <Route exact path="/entertainment" element={<News setProgress ={setProgress} apiKey={apiKey}  key="entertainment" pageSize={5} country="in" category="entertainment" />} />
        <Route exact path="/general" element={<News setProgress ={setProgress} apiKey={apiKey}  key="general" pageSize={5} country="in" category="general" />} />
        <Route exact path="/health" element={<News setProgress ={setProgress} apiKey={apiKey}  key="health" pageSize={5} country="in" category="health" />} />
        <Route exact path="/science" element={<News setProgress ={setProgress} apiKey={apiKey}  key="science" pageSize={5} country="in" category="science" />} />
        <Route exact path="/sports" element={<News setProgress ={setProgress} apiKey={apiKey}  key="sports" pageSize={5} country="in" category="sports" />} />
        <Route exact path="/technology" element={<News setProgress ={setProgress} apiKey={apiKey}  key="technology" pageSize={5} country="in" category="technology" />} />
      </Routes>
    </BrowserRouter>
        
      </div>
    )
}
export default App;