import React from 'react';

type QandA_Entry = {
    readonly question: string,
    readonly answer: string
};

const History = ({question, answer}: QandA_Entry) => {
    return (
        <div>
            <div>
               Q: {question}
            </div>
            <div>
                A: {answer}
            </div>
        </div>
    )
}

export default History;