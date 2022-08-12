import axios from "axios"
import express, { Request, Response } from "express"
import cors from "cors"

const apiURL: string = 'https://br1.api.riotgames.com'
const tokenRiot: string = 'RGAPI-6986923d-0de7-4893-b48c-51841e71f9c1'
const iconId: string = 'http://ddragon.leagueoflegends.com/cdn/12.15.1/img/profileicon'

const app = express()

app.use(express.json());
app.use(cors());

app.get('/summon/:summonerName', async (req: Request, res: Response) => {
    const { summonerName } = req.params
    const response = await axios.get(`${apiURL}/lol/summoner/v4/summoners/by-name/${summonerName}`, {
        headers: { "X-Riot-Token": tokenRiot }
    })
    const { id, profileIconId, summonerLevel } = response.data

    const responseRanked = await axios.get(`${apiURL}/lol/league/v4/entries/by-summoner/${id}`, {
        headers: { "X-Riot-Token": tokenRiot }
    })

    return res.json({
        summonerLevel,
        summonerName,
        profileIconId: `${iconId}/${profileIconId}.png`,
        responseRanked: responseRanked.data
    })
})

app.listen(5000, () => console.log('Serve conectado'))