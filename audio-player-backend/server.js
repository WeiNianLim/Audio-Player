const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json());

const love = "love"
const songs = [
  {
    title : "DNA.",
    artist : "Kendrick Lamar",
    url : "/songs/DNA..mp3",
    length : 3.06
  },{
    title : "BLOOD.",
    artist : "Kendrick Lamar",
    url : "/songs/BLOOD..mp3",
    length : 1.58
  },{
    title : "YAH.",
    artist : "Kendrick Lamar",
    url : "/songs/YAH..mp3",
    length : 2.40
  },{
    title : "ELEMENT.",
    artist : "Kendrick Lamar",
    url : "/songs/ELEMENT..mp3",
    length : 3.29
  },{
    title : "FEEL.",
    artist : "Kendrick Lamar",
    url : "/songs/FEEL..mp3",
    length : 3.35
  },{
    title : "LOYALTY.FEAT.RIHANNA.",
    artist : "Kendrick Lamar",
    url : "/songs/LOYALTY..mp3",
    length : 3.47
  },{
    title : "PRIDE.",
    artist : "Kendrick Lamar",
    url : "/songs/PRIDE..mp3",
    length : 4.35
  },{
    title : "HUMBLE.",
    artist : "Kendrick Lamar",
    url : "/songs/HUMBLE..mp3",
    length : 2.57
  },{
    title : "LUST.",
    artist : "Kendrick Lamar",
    url : "/songs/LUST..mp3",
    length : 5.08
  },{
    title : "LOVE.FEAT.ZACARI",
    artist : "Kendrick Lamar",
    url : "/songs/LOVE..mp3",
    length : 5.08
  }
]

app.get('/', (req, res) => {
    res.json({songs})
})

app.listen(8080, () => {
    console.log('Listening on port 8080')
})  