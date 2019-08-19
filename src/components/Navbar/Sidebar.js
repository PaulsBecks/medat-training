import React from 'react';

import './Sidebar.css';

export default ({ selectedQuiz, setSelectedQuiz }) => {
    return (
        <div className='mt-de-navbar'>
            <h2>Medat Training</h2>
            <div>
                <button onClick={()=>setSelectedQuiz('sequence')}>
                    Folgen
                </button>
                <button onClick={()=>setSelectedQuiz('words')}>
                    Wörter
                </button>
            </div>
        </div>
    );
}