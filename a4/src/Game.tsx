import React, {useState, ChangeEvent, useEffect} from 'react';
import History from './History';

const ANSWERS = ['perhaps', 'maybe', 'possibly', 'probably', 'hopefully'];

const Game = () => {
    const [question_history, setQuestion_history] = useState<string[]>([]);
    const [answer_history, setAnswer_history] = useState<string[]>([]);
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [count, setCount] = useState(0);

    const askQuestion = (event: ChangeEvent<HTMLInputElement>) => {
        setQuestion(event.currentTarget.value);
        setAnswer(ANSWERS[Math.floor(Math.random() * 5)]);
    }

    const Ask = (event: any) => {
        if (question[question.length-1] === '?' && question.length >= 2) {
            setCount(count+1);
            event.preventDefault();
            setQuestion_history([question, ...question_history]);
            setAnswer_history([answer, ...answer_history]);
            setQuestion('');
            setAnswer('');
        }
        else {
            alert('You must input a valid question');
            event.preventDefault();
        }
    }

    useEffect(() => {
        document.title = `Number of Questions Asked: ${count}`
    }, [count]);

    const turns = question_history.map((q, index) => [q, answer_history[index]]);
    return (
        <div>
            <div>Number of questions asked: {count}</div>
            <input 
                type="text"
                placeholder="Ask me a question..."
                value={question}
                onChange={askQuestion}
                />
            <button type="button" onClick={Ask}>Ask!</button>
            <div>
                <img src='./ball.PNG' alt="eight ball"/>
            </div>
            <div>
                {answer}
            </div>
            <div>
                <table>
                    <tr>
                        <td>Q/A History</td>
                    </tr>
                   {turns.map((question_answer, index) => (
                        <tr>
                            <td key={index}><History question={question_answer[0]} answer={question_answer[1]}/></td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    )
}

export default Game;