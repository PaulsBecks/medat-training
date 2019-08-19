import React, { useMemo, useState } from 'react';

const shuffle = (str) => {
    return str.split('').sort(()=>0.5-Math.random()).join('');
}

const chooseQuizChars = (word) => {
    const firstChar = word[0].toLowerCase();
    const wordInRandomOrder = shuffle(word).toLowerCase()
    let quizChars = firstChar;

    for(let char in wordInRandomOrder) {
        if(quizChars.length >= 4) {
            break;
        }

        if(!quizChars.includes(wordInRandomOrder[char])){
            quizChars += wordInRandomOrder[char];
        }
    }

    return quizChars;
}

export default ({ word, onNextClick }) => {
    const wordInRandomOrder = useMemo(()=>shuffle(word).toLowerCase(), [word]);
    const quizChars = useMemo(()=>chooseQuizChars(word), [word]);
    const shuffledQuizChars = useMemo(()=>shuffle(quizChars), [quizChars]);
    const [selectedChar, setSelectedChar] = useState(shuffledQuizChars[0]);
    const [showSolution, setShowSolution] = useState(false);

    return (
        <div>
            <h2>{wordInRandomOrder}</h2>
            <p>Dieses Wort beginnt mit dem Buchstaben:</p>
            <ul>
                {
                    shuffledQuizChars.split('').map((char) => (
                        <li key={char}>
                            <input type="radio" name="quiz-char" checked={char === selectedChar} onChange={()=>setSelectedChar(char)}/>
                            {char}
                        </li>
                    ))
                }
            </ul>
            {
                showSolution && <h3>{word}</h3>
            }
            <button onClick={() => setShowSolution(true)}>Lösung</button>
            <button onClick={() => onNextClick(selectedChar)}>Nächstes</button>
        </div>
    );
}