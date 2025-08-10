import React, { useState, useEffect } from 'react';
import { Flashcard } from './Flashcard';
import { UserFeedback } from '../types';
import { getFlashcards, updateFlashcardRepetition } from '../utils/repetition';

const PracticeSession: React.FC = () => {
    const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
    const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
    const [userFeedback, setUserFeedback] = useState<UserFeedback[]>([]);
    const [showAnswer, setShowAnswer] = useState<boolean>(false);

    useEffect(() => {
        const fetchFlashcards = async () => {
            const cards = await getFlashcards();
            setFlashcards(cards);
        };
        fetchFlashcards();
    }, []);

    const handleAnswer = (isCorrect: boolean) => {
        const currentCard = flashcards[currentCardIndex];
        updateFlashcardRepetition(currentCard.id, isCorrect);
        setUserFeedback([...userFeedback, { cardId: currentCard.id, isCorrect }]);
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
        setShowAnswer(false);
    };

    const toggleAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    if (flashcards.length === 0) {
        return <div>Loading flashcards...</div>;
    }

    const currentCard = flashcards[currentCardIndex];

    return (
        <div>
            <h2>Practice Session</h2>
            <Flashcard 
                question={currentCard.question} 
                answer={showAnswer ? currentCard.answer : undefined} 
                onToggleAnswer={toggleAnswer} 
            />
            <button onClick={() => handleAnswer(true)}>Correct</button>
            <button onClick={() => handleAnswer(false)}>Incorrect</button>
            {showAnswer && <p>{currentCard.answer}</p>}
        </div>
    );
};

export default PracticeSession;