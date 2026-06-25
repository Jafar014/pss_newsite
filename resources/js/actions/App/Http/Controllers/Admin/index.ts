import NewsController from './NewsController'
import PlayerController from './PlayerController'
import StandingController from './StandingController'
import JadwalController from './JadwalController'


const Admin = {
    NewsController: Object.assign(NewsController, NewsController),
    PlayerController: Object.assign(PlayerController, PlayerController),
    StandingController: Object.assign(StandingController, StandingController),
    JadwalController: Object.assign(JadwalController, JadwalController),
}

export default Admin