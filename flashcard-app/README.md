# Flashcard App

## Overview
This project is a web application that allows users to create, edit, and practice flashcards. The application tracks user performance and adjusts the frequency of flashcard repetition based on how well users answer each card.

## Features
- Create and edit flashcards
- Practice flashcards with adaptive repetition
- Provide feedback on user performance
- User-friendly interface built with React

## Project Structure
```
flashcard-app
├── public
│   └── index.html          # Main HTML document
├── src
│   ├── components          # React components
│   │   ├── Flashcard.tsx   # Displays flashcard content
│   │   ├── FlashcardEditor.tsx # Allows creation and editing of flashcards
│   │   ├── PracticeSession.tsx  # Manages flashcard practice sessions
│   │   └── Feedback.tsx    # Collects and displays user feedback
│   ├── App.tsx             # Main application component
│   ├── types               # TypeScript types and interfaces
│   │   └── index.ts
│   └── utils               # Utility functions for flashcard repetition
│       └── repetition.ts
├── package.json            # npm configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd flashcard-app
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Usage
1. Start the development server:
   ```
   npm start
   ```
2. Open your browser and go to `http://localhost:3000` to view the application.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License.