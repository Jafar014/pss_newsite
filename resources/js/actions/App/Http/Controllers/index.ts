import HomeController from './HomeController'
import Tim from './Tim'
import KompetisiController from './KompetisiController'
import Admin from './Admin'
import Settings from './Settings'


const Controllers = {
    HomeController: Object.assign(HomeController, HomeController),
    Tim: Object.assign(Tim, Tim),
    KompetisiController: Object.assign(KompetisiController, KompetisiController),
    Admin: Object.assign(Admin, Admin),
    Settings: Object.assign(Settings, Settings),
}

export default Controllers