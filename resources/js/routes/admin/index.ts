import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
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
* @see routes/web.php:63
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
* @see routes/web.php:63
* @route '/admin/berita'
*/
news.url = (options?: RouteQueryOptions) => {




    return news.definition.url + queryParams(options)
}

/**
* @see routes/web.php:63
* @route '/admin/berita'
*/
news.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: news.url(options),
    method: 'get',
})

/**
* @see routes/web.php:63
* @route '/admin/berita'
*/
news.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: news.url(options),
    method: 'head',
})


/**
* @see routes/web.php:70
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
* @see routes/web.php:70
* @route '/admin/staff'
*/
staff.url = (options?: RouteQueryOptions) => {




    return staff.definition.url + queryParams(options)
}

/**
* @see routes/web.php:70
* @route '/admin/staff'
*/
staff.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: staff.url(options),
    method: 'get',
})

/**
* @see routes/web.php:70
* @route '/admin/staff'
*/
staff.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: staff.url(options),
    method: 'head',
})




const admin = {
    login: Object.assign(login, login),
    dashboard: Object.assign(dashboard, dashboard),
    news: Object.assign(news, news),
    staff: Object.assign(staff, staff),
}

export default admin