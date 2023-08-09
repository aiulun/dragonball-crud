const express = require('express') 
const cors = require('cors') 
const bodyParser = require('body-parser') 
const MongoClient = require('mongodb').MongoClient 
const app = express()
const PORT = 8000

app.use(cors())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const aliens = {
    "android": {
        'raceName': 'Androids',
        'homeworld': 'Earth',
        'features': 'Modeled after different races such as Earthlings, Namekians and Saiyans',
        'interestingFact': 'Most were created by Dr. Gero. Said to have unlimited energy and eternal life. With the exception of Cell, have no detectable aura',
        'examples': ['Cell', 'Android 17', 'Android 18', 'Android 19'],
        'image': 'https://static.wikia.nocookie.net/dragonball/images/f/f0/Androids.jpg/'
    },
    "angel": {
        'raceName': 'Angels',
        'homeworld': 'Multiverse',
        'features': 'Pale blue skin, white hair, violet eyes and various heights. When at full power Angels possess a blue halo around their necks',
        'interestingFact': 'Their role is to guide and teach Gods of Destruction to master their destructive capabilities',
        'examples': ['Grand Minister', 'Awamo', 'Whis', 'Sour'],
        'image': 'https://static.wikia.nocookie.net/dragonball/images/3/3d/Angels_12U.png/'
    },
    "earthling": {
        'raceName': 'Earthlings',
        'homeworld': 'Earth',
        'features': 'Rounded ears and uncommon hair colors',
        'interestingFact': 'Earthlings are named after a wide variety of objects and is often rare for them to have family names',
        'examples': ['Master Roshi', 'Krillin', 'Tien', 'Yamcha'],
        'image': 'https://static.wikia.nocookie.net/dragonball/images/d/d8/SatanFan%28Jmp%29.png/'
    },
    "namekian": {
        'raceName': 'Namekians',
        'homeworld': 'Namek',
        'features': 'Humanoid with plant and slug-like characteristics, including green skin and antennae',
        'interestingFact': 'Namekians exist in both Universe 6 and Universe 7 and were originally from another realm altogether',
        'examples': ['Piccolo', 'Banjo', 'Piano', 'Ukulele'],
        'image': 'https://static.wikia.nocookie.net/dragonball/images/f/f1/Namekians03.png/'
    },
    "saiyan": {
        'raceName': 'Saiyans',
        'homeworld': 'Planet Vegeta',
        'features': 'Black hair, black eyes, muscular build and monkey-like tails',
        'interestingFact': 'In Universe 7 Saiyans are a naturally aggressive warrior race striving to be the strongest, whereas in Universe 6, they are protectors',
        'examples': ['Goku', 'Vegeta', 'Broly', 'Bardock'],
        'image': 'https://static.wikia.nocookie.net/dragonball/images/e/ed/Saiyans_DBZ_Episode_20.png/'
    }

}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:alienName', (request, response) => {
    const aliensName = request.params.alienName.toLowerCase()
    if (aliens[aliensName]) {
        response.json(aliens[aliensName])
    } else {
        response.json(aliens['earthling'])
    }
})

app.get('/api/', (request, response) => {
    response.json(aliens)
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

