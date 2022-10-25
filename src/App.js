import Quiz from "./components/pages/Quiz";
import DottedBG from './components/Assets/DottedBG.png'
import './components/css/App.css'

function App() {
  return (
    <div>
      <Quiz />
      <img src={DottedBG} id="bottom_img"/>
    </div>
  );
}

export default App;