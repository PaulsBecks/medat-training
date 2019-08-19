import React, { useState } from 'react';
import { Words } from '..';
import { Navbar } from '../../components';

export default () => {

    const [ selectedQuiz, setSelectedQuiz] = useState('words');

    return (
        <div>
            <Navbar selectedQuiz={ selectedQuiz } setSelectedQuiz={ setSelectedQuiz }/>
            {
                selectedQuiz === 'words' && <Words />
            }
        </div>
    );
}