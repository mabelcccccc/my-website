export interface Flashcard {
    id: string;
    question: string;
    answer: string;
    difficulty: number; // A value representing how difficult the card is
    lastReviewed: Date; // The date when the card was last reviewed
}

export interface UserFeedback {
    flashcardId: string;
    correct: boolean; // Indicates if the user's answer was correct
    timestamp: Date; // The time when the feedback was given
}