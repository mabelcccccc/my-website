import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FlashcardEditor from './components/FlashcardEditor';
import PracticeSession from './components/PracticeSession';
import Feedback from './components/Feedback';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <h1>Flashcard App</h1>
                <Switch>
                    <Route path="/edit" component={FlashcardEditor} />
                    <Route path="/practice" component={PracticeSession} />
                    <Route path="/feedback" component={Feedback} />
                    <Route path="/" exact>
                        <h2>Welcome to the Flashcard App!</h2>
                        <p>Select an option to get started.</p>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;