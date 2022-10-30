import Quiz from "./components/pages/Quiz";
import DottedBG from './components/Assets/DottedBG.png'
import './components/css/App.css'
import Home from "./components/pages/Home";
import { Routes, Route } from 'react-router-dom'
import Spinner from "./components/pages/Spinner";
import { useEffect, useState } from "react";
function App() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => { setLoader(false) }, 3000)
  })
  return (

    <div>
      {
        loader ? <Spinner /> : (
          <div>
            <img src={DottedBG} id="bottom_img" />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Quiz" element={<Quiz />} />
              <Route path="/Spinner" element={<Spinner />} />
            </Routes>
          </div>

        )
      }



    </div>
  );
}

export default App;