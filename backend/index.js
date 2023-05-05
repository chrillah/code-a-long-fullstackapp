// import dotenv för att tömma känsliga nycklar
import * as dotenv from 'dotenv'

// implementerar dotenv
dotenv.config()

// hämtar express
import Express from 'express'

// importerar cors
import cors from 'cors'

// hämtar postgress sql
import pg from 'pg'

// hämtar client paketet så kommunikationen mellan server och databas fungerar

import Client from 'pg'

// hämtar body-parser (ett middelware som )
import bodyParser from 'body-parser'
// importerar path för att använda statiska filer
import path from 'path'

// implementerar express
const app = express()

// lägger in middelware
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

// cors
app.use(cors())
// express ska anvämnds med json-format
app.use(express.json())
// förb'ttra cors
app.use((request, response, next)=>{
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
})

// använder path för att komma åt filer
app.use(express.static(path.join(path.resolve(), 'public')))
