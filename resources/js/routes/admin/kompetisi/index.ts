import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../wayfinder'
import klasemenEb49a7 from './klasemen'
/**
* @see \App\Http\Controllers\Admin\StandingController::klasemen
* @see app/Http/Controllers/Admin/StandingController.php:12
* @route '/admin/kompetisi/klasemen'
*/
export const klasemen = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: klasemen.url(options),
    method: 'get',
})

klasemen.definition = {
    methods: ["get","head"],
    url: '/admin/kompetisi/klasemen',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\StandingController::klasemen
* @see app/Http/Controllers/Admin/StandingController.php:12
* @route '/admin/kompetisi/klasemen'
*/
klasemen.url = (options?: RouteQueryOptions) => {




    return klasemen.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\StandingController::klasemen
* @see app/Http/Controllers/Admin/StandingController.php:12
* @route '/admin/kompetisi/klasemen'
*/
klasemen.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: klasemen.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\StandingController::klasemen
* @see app/Http/Controllers/Admin/StandingController.php:12
* @route '/admin/kompetisi/klasemen'
*/
klasemen.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: klasemen.url(options),
    method: 'head',
})




const kompetisi = {
    klasemen: Object.assign(klasemen, klasemenEb49a7),
}

export default kompetisi