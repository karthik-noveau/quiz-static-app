import Quiz from "./components/pages/Quiz";
import DottedBG from './components/Assets/DottedBG.png'
import './components/css/App.css'
import Home from "./components/pages/Home";
import {Routes ,Route} from 'react-router-dom'
function App() {
  return (
    <div>
       
     
      <img src={DottedBG} id="bottom_img"/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Quiz" element={<Quiz />}/>
      </Routes>
    </div>
  );
}

export default App;