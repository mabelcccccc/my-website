import React, { useState } from 'react';

interface FlashcardProps {
    question: string;
    answer: string;
    onAnswer: (isCorrect: boolean) => void;
}

const Flashcard: React.FC<FlashcardProps> = ({ question, answer, onAnswer }) => {
    const [showAnswer, setShowAnswer] = useState(false);
    const [userAnswer, setUserAnswer] = useState('');

    const handleCheckAnswer = () => {
        const isCorrect = userAnswer.trim().toLowerCase() === answer.trim().toLowerCase();
        onAnswer(isCorrect);
        setUserAnswer('');
        setShowAnswer(false);
    };

    return (
        <div className="flashcard">
            <h2>{question}</h2>
            {showAnswer ? (
                <div>
                    <p>{answer}</p>
                    <button onClick={() => setShowAnswer(false)}>Hide Answer</button>
                </div>
            ) : (
                <div>
                    <button onClick={() => setShowAnswer(true)}>Show Answer</button>
                    <input
                        type="text"
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                        placeholder="Type your answer here"
                    />
                    <button onClick={handleCheckAnswer}>Check Answer</button>
                </div>
            )}
        </div>
    );
};

export default Flashcard;