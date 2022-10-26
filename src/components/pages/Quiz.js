import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import data from './QuizData'
import { useLocation } from 'react-router-dom';
import '../css/quiz.css'


function Quiz() {

    const [count, setCount] = useState(0);
    const [score, setScore] = useState(0)
    const [scoreTab, setScoreTab] = useState(false);

    const [name, setName] =useState('');
    const location = useLocation();
    const linkData = location.state.data;

    const prevButton = () => {


        if(count>0)
        setCount(count - 1);

    }
    const ansClicked = (isCorrect) => {
        setCount(count + 1);
        const temp = count + 1;
        if (temp == data.length) {
            setScoreTab(true);
        }
        if (isCorrect == true) {
            setScore(score + 1)
        }
    }
    var t1="karthik";
    useEffect(()=>{
        

    }, [name])

    return (
        <div>
            {
                scoreTab ?

                    (
                        <div className='score_main_cont'>
                            <div className='score_cont'>
                                <div style={{ color: "white" }}>

                                    {
                                        score >= data.length / 2
                                            ?
                                            (
                                                <div className='score_pass'>
                                                    <p>Congratulations</p>
                                                    <p>VICTORY 😀</p>
                                                    <p>Your Score : <span id='score_num_pass'>{score} / {data.length}</span></p>
                                                    <Link to='/'><button className='score_btn'>Play Again</button></Link>
                                                </div>

                                            )
                                            :
                                            (
                                                <div  className='score_fail'>
                                                     <p>Sorry !!!</p>
                                                    <p>Better Next Time 😔</p>
                                                    <p>Your Score : <span id='score_num_fail_1'>{score}</span> / <span  id='score_num_fail_2'>{data.length}</span></p>
                                                    <Link to='/'><button className='score_btn'>Play Again</button></Link>
                                                </div>

                                            )
                                    }





                                </div>
                            </div>
                        </div>

                    )

                    :

                    (
                        <div className='quiz_main_cont'>

                            <div className='quiz_cont'>
                                
                                <div className='name_cont'>
                                    <p>React Quiz Application</p>
                                    <p>Welcome {linkData}</p>
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
                                                <button onClick={() => ansClicked(item.ans)}>
                                                    {item.opt}
                                                </button>)
                                        })
                                    }
                                </div>

                                <div className='nxt_btn'>
                                  <Link to="/" style={{textDecoration:"none"}} id="nxt_Link_btn"><button id="next_f_btn" >Quit</button></Link>
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