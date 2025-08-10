export interface Flashcard {
    id: string;
    question: string;
    answer: string;
    lastReviewed: Date;
    correctAnswers: number;
    incorrectAnswers: number;
}

export function calculateRepetition(cards: Flashcard[], threshold: number): Flashcard[] {
    const now = new Date();
    return cards.filter(card => {
        const daysSinceLastReviewed = Math.floor((now.getTime() - new Date(card.lastReviewed).getTime()) / (1000 * 3600 * 24));
        const performanceScore = card.correctAnswers / (card.correctAnswers + card.incorrectAnswers || 1);
        return daysSinceLastReviewed >= threshold || performanceScore < 0.5;
    });
}

export function updateFlashcardPerformance(card: Flashcard, wasCorrect: boolean): Flashcard {
    const updatedCard = { ...card };
    if (wasCorrect) {
        updatedCard.correctAnswers += 1;
    } else {
        updatedCard.incorrectAnswers += 1;
    }
    updatedCard.lastReviewed = new Date();
    return updatedCard;
}