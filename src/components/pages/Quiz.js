import { useState } from 'react';
import data from './QuizData'
import '../css/quiz.css'
import bgvideo from '../Assets/bgvideo.mp4';

function Quiz() {

    const [count, setCount] = useState(0);
    const [score, setScore] = useState(0)
    const [scoreTab, setScoreTab] = useState(false);
 
    const prevButton=()=>{

        setCount(count-1);
       
    }
    const ansClicked = (isCorrect)=>{
        setCount(count+1);
        const temp = count+1;
        if(temp==data.length)
        {
            setScoreTab(true);
        }
        if(isCorrect==true){
            setScore(score+1)
        }
    }

    return (
        <div>
            {
                scoreTab ? 

                (
                    <div style={{color:"white"}}>{score} / {data.length}</div>

                )

                :

                (
                    <div className='quiz_main_cont'>
           
                    <div className='quiz_cont'>
        
                        <div className='name_cont'>
                            <p>React Quiz Application</p>
                            <p>Welcome karthik</p>
                        </div>
        
        
                        <div className='quest_count_cont'>
        
                            <div className='count_cont'>
                                <p>{count + 1} / {data.length}</p>
                            </div>
        
                            <div className='question_cont'>
                                <p>{data[count].question}</p>
                            </div>
                        </div>
        
                        <div className='answer_cont'>
                            {
                                data[count].options.map((item) => {
                                    return (
                                        <button onClick={()=>ansClicked(item.ans)}>
                                            {item.opt}
                                        </button>)
                                })
                            }
                        </div>
        
                        <div className='nxt_btn'>
                            <button>Quit</button>
                            <button onClick={prevButton}>Prev</button>
                        </div>
                    </div>
                </div>
                )

               
            }
        </div>
       
    )
}

export default Quiz;