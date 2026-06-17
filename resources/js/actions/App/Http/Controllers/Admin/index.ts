import PlayerController from './PlayerController'
import StandingController from './StandingController'


const Admin = {
    PlayerController: Object.assign(PlayerController, PlayerController),
    StandingController: Object.assign(StandingController, StandingController),
}

export default Admin