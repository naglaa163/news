const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch');
const mockAPIResponse = require('./mockAPI.js')


const app = express()



const cors = require('cors');

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(express.static('dist'))

console.log(__dirname)


const apURL = 'https://api.meaningcloud.com/sentiment-2.1?'
const apiKey = process.env.API_KEY
console.log(`Your API Key is ${process.env.API_KEY}`);
let urlInput = [] 

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// POST Route
app.post('/api', async function(req, res) {
    urlInput = req.body.url;
    console.log(`You entered: ${urlInput}`);
    const apiURL = `${apURL}key=${apiKey}&url=${urlInput}&lang=en`

    const response = await fetch(apiURL)
    const recievData = await response.json()
    console.log(recievData)
    res.send(recievData)
    
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})