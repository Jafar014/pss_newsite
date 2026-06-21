import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../wayfinder'
import klasemenEb49a7 from './klasemen'
import jadwalE4a04c from './jadwal'
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


/**
* @see \App\Http\Controllers\Admin\JadwalController::jadwal
* @see app/Http/Controllers/Admin/JadwalController.php:11
* @route '/admin/kompetisi/jadwal'
*/
export const jadwal = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: jadwal.url(options),
    method: 'get',
})

jadwal.definition = {
    methods: ["get","head"],
    url: '/admin/kompetisi/jadwal',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\JadwalController::jadwal
* @see app/Http/Controllers/Admin/JadwalController.php:11
* @route '/admin/kompetisi/jadwal'
*/
jadwal.url = (options?: RouteQueryOptions) => {




    return jadwal.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\JadwalController::jadwal
* @see app/Http/Controllers/Admin/JadwalController.php:11
* @route '/admin/kompetisi/jadwal'
*/
jadwal.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: jadwal.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\JadwalController::jadwal
* @see app/Http/Controllers/Admin/JadwalController.php:11
* @route '/admin/kompetisi/jadwal'
*/
jadwal.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: jadwal.url(options),
    method: 'head',
})




const kompetisi = {
    klasemen: Object.assign(klasemen, klasemenEb49a7),
    jadwal: Object.assign(jadwal, jadwalE4a04c),
}

export default kompetisi