const fetch = require('node-fetch');
const fs = require('fs');


// fetch data from jsonplaceholder
const fetchedData = fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res =>res.json())
    .then(json => json)

const stringifiedData = JSON.stringify(fetchedData);

//Write  fetched data

fs.writeFile('./result/posts.json', stringifiedData, () => {
    console.log('File written');
})