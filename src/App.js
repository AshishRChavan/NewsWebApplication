import './App.css';
import { useState } from "react"
import Navbar from "./Components/Navbar.js"
import NewsComponent from "./Components/NewsComponent.js"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from "react-top-loading-bar";
export default function App() {
  let [pagesize] = useState(15)
  let [apiKey] = useState("b9bc956e41264ec89ce172e9743b3a07")
  let [progress, setProgressor] = useState(0)
  function setProgress(progress){
    setProgressor(progress);
  }
  return (
    <div>
      <Router>
        <LoadingBar
          color='#f11946'
          waitingTime={400}
          progress={progress}
        />
        <Navbar home="Home"></Navbar>
        <Routes>
          <Route exact path="/" element={<NewsComponent apiKey={  apiKey} setProgress={  setProgress} key="/" pagesize={  pagesize} country="in" category="general"></NewsComponent>}></Route>
          <Route exact path="/business" element={<NewsComponent apiKey={  apiKey} setProgress={  setProgress} key="busines" pagesize={  pagesize} country="in" category="business"></NewsComponent>}></Route>
          <Route exact path="/entertainment" element={<NewsComponent apiKey={  apiKey} setProgress={  setProgress} key="entertainment" pagesize={  pagesize} country="in" category="entertainment"></NewsComponent>}></Route>
          <Route exact path="/general" element={<NewsComponent apiKey={  apiKey} setProgress={  setProgress} key="general" pagesize={  pagesize} country="in" category="general"></NewsComponent>}></Route>
          <Route exact path="/health" element={<NewsComponent apiKey={  apiKey} setProgress={  setProgress} key="health" pagesize={  pagesize} country="in" category="health"></NewsComponent>}></Route>
          <Route exact path="/science" element={<NewsComponent apiKey={  apiKey} setProgress={  setProgress} key="science" pagesize={  pagesize} country="in" category="science"></NewsComponent>}></Route>
          <Route exact path="/sports" element={<NewsComponent apiKey={  apiKey} setProgress={  setProgress} key="sports" pagesize={  pagesize} country="in" category="sports"></NewsComponent>}></Route>
          <Route exact path="/technology" element={<NewsComponent apiKey={  apiKey} setProgress={  setProgress} key="technology" pagesize={  pagesize} country="in" category="technology"></NewsComponent>}></Route>
        </Routes>
      </Router>
    </div>
  );
}
