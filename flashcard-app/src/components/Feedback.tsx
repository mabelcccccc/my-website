import React from 'react';

interface FeedbackProps {
    correctAnswers: number;
    totalQuestions: number;
    onReset: () => void;
}

const Feedback: React.FC<FeedbackProps> = ({ correctAnswers, totalQuestions, onReset }) => {
    const percentage = totalQuestions > 0 ? (correctAnswers / totalQuestions) * 100 : 0;

    return (
        <div className="feedback">
            <h2>Feedback</h2>
            <p>You answered {correctAnswers} out of {totalQuestions} questions correctly.</p>
            <p>Your score: {percentage.toFixed(2)}%</p>
            <button onClick={onReset}>Start Over</button>
        </div>
    );
};

export default Feedback;