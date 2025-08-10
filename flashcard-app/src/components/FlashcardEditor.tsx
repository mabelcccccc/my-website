import React, { useState } from 'react';

const FlashcardEditor: React.FC<{ onSave: (question: string, answer: string) => void }> = ({ onSave }) => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (question && answer) {
            onSave(question, answer);
            setQuestion('');
            setAnswer('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Question:
                    <input
                        type="text"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Answer:
                    <input
                        type="text"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        required
                    />
                </label>
            </div>
            <button type="submit">Save Flashcard</button>
        </form>
    );
};

export default FlashcardEditor;