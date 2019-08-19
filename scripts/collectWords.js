const axios = require('axios');
const fs = require('fs');

const wordLimit = 1000;

axios.get(`http://api.corpora.uni-leipzig.de/ws/words/deu_news_2012_1M/randomword/?limit=${wordLimit}`).then((response)=> {
    const words = response.data.filter(obj=>/^[A-Z][a-z]{9,}/.test(obj.word)).map(obj => obj.word);
    fs.writeFile('src/constants/words.json', JSON.stringify(words), 'utf8', ()=>{});
});

