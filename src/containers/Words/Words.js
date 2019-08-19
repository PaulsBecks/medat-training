import React from 'react';
import { WordQuizCard } from '../../components';
import { words } from '../../constants';
import { useLocalStorage } from '../../hooks';

import './Words.css';

export default () => {

    const [wordsSolved, setWordsSolved] = useLocalStorage('wordsSolved', []);
    const wordIndex =  wordsSolved.length;

    console.log(wordsSolved, wordIndex);

    return (
        <div className="mt-de-words-page">
            {
                words && 
                words.length && 
                words.length > wordIndex && 
                <WordQuizCard 
                    word={words[wordIndex]} 
                    key={words[wordIndex]} 
                    onNextClick={
                        (charPicked) => {
                            setWordsSolved(wordsSolved.concat([
                                {
                                    word: words[wordIndex],
                                    id: wordIndex,
                                    charPicked
                                }
                            ]));
                        }
                    }
                />
            }
        </div>
    )
}