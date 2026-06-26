import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
import loginDf2c2a from './login'
import newsB3a6f8 from './news'
import staffC58c8e from './staff'
import player895a40 from './player'
import kompetisi from './kompetisi'
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/admin/login'
*/
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/admin/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/admin/login'
*/
login.url = (options?: RouteQueryOptions) => {




    return login.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/admin/login'
*/
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/admin/login'
*/
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})


/**
* @see routes/web.php:63
* @route '/admin/logout'
*/
export const logout = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: logout.url(options),
    method: 'get',
})

logout.definition = {
    methods: ["get","post","head"],
    url: '/admin/logout',
} satisfies RouteDefinition<["get","post","head"]>

/**
* @see routes/web.php:63
* @route '/admin/logout'
*/
logout.url = (options?: RouteQueryOptions) => {




    return logout.definition.url + queryParams(options)
}

/**
* @see routes/web.php:63
* @route '/admin/logout'
*/
logout.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: logout.url(options),
    method: 'get',
})

/**
* @see routes/web.php:63
* @route '/admin/logout'
*/
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

/**
* @see routes/web.php:63
* @route '/admin/logout'
*/
logout.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: logout.url(options),
    method: 'head',
})


/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/admin'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/admin',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/admin'
*/
dashboard.url = (options?: RouteQueryOptions) => {




    return dashboard.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/admin'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/admin'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})


/**
* @see \App\Http\Controllers\Admin\NewsController::news
* @see app/Http/Controllers/Admin/NewsController.php:12
* @route '/admin/berita'
*/
export const news = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: news.url(options),
    method: 'get',
})

news.definition = {
    methods: ["get","head"],
    url: '/admin/berita',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\NewsController::news
* @see app/Http/Controllers/Admin/NewsController.php:12
* @route '/admin/berita'
*/
news.url = (options?: RouteQueryOptions) => {




    return news.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\NewsController::news
* @see app/Http/Controllers/Admin/NewsController.php:12
* @route '/admin/berita'
*/
news.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: news.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\NewsController::news
* @see app/Http/Controllers/Admin/NewsController.php:12
* @route '/admin/berita'
*/
news.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: news.url(options),
    method: 'head',
})


/**
* @see routes/web.php:92
* @route '/admin/sejarah'
*/
export const history = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: history.url(options),
    method: 'get',
})

history.definition = {
    methods: ["get","head"],
    url: '/admin/sejarah',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:92
* @route '/admin/sejarah'
*/
history.url = (options?: RouteQueryOptions) => {




    return history.definition.url + queryParams(options)
}

/**
* @see routes/web.php:92
* @route '/admin/sejarah'
*/
history.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: history.url(options),
    method: 'get',
})

/**
* @see routes/web.php:92
* @route '/admin/sejarah'
*/
history.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: history.url(options),
    method: 'head',
})


/**
* @see routes/web.php:104
* @route '/admin/staff'
*/
export const staff = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: staff.url(options),
    method: 'get',
})

staff.definition = {
    methods: ["get","head"],
    url: '/admin/staff',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:104
* @route '/admin/staff'
*/
staff.url = (options?: RouteQueryOptions) => {




    return staff.definition.url + queryParams(options)
}

/**
* @see routes/web.php:104
* @route '/admin/staff'
*/
staff.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: staff.url(options),
    method: 'get',
})

/**
* @see routes/web.php:104
* @route '/admin/staff'
*/
staff.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: staff.url(options),
    method: 'head',
})


/**
* @see \App\Http\Controllers\Admin\PlayerController::player
* @see app/Http/Controllers/Admin/PlayerController.php:12
* @route '/admin/pemain'
*/
export const player = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: player.url(options),
    method: 'get',
})

player.definition = {
    methods: ["get","head"],
    url: '/admin/pemain',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\PlayerController::player
* @see app/Http/Controllers/Admin/PlayerController.php:12
* @route '/admin/pemain'
*/
player.url = (options?: RouteQueryOptions) => {




    return player.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PlayerController::player
* @see app/Http/Controllers/Admin/PlayerController.php:12
* @route '/admin/pemain'
*/
player.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: player.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\PlayerController::player
* @see app/Http/Controllers/Admin/PlayerController.php:12
* @route '/admin/pemain'
*/
player.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: player.url(options),
    method: 'head',
})


/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/admin/settings'
*/
export const settings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: settings.url(options),
    method: 'get',
})

settings.definition = {
    methods: ["get","head"],
    url: '/admin/settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/admin/settings'
*/
settings.url = (options?: RouteQueryOptions) => {




    return settings.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/admin/settings'
*/
settings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: settings.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/admin/settings'
*/
settings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: settings.url(options),
    method: 'head',
})




const admin = {
    login: Object.assign(login, loginDf2c2a),
    logout: Object.assign(logout, logout),
    dashboard: Object.assign(dashboard, dashboard),
    news: Object.assign(news, newsB3a6f8),
    history: Object.assign(history, history),
    staff: Object.assign(staff, staffC58c8e),
    player: Object.assign(player, player895a40),
    kompetisi: Object.assign(kompetisi, kompetisi),
    settings: Object.assign(settings, settings),
}

export default admin