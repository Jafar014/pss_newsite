import PlayerController from './PlayerController'
import StandingController from './StandingController'
import JadwalController from './JadwalController'


const Admin = {
    PlayerController: Object.assign(PlayerController, PlayerController),
    StandingController: Object.assign(StandingController, StandingController),
    JadwalController: Object.assign(JadwalController, JadwalController),
}

export default Admin