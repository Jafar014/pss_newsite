import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\JadwalController::store
* @see app/Http/Controllers/Admin/JadwalController.php:29
* @route '/admin/kompetisi/jadwal'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/kompetisi/jadwal',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\JadwalController::store
* @see app/Http/Controllers/Admin/JadwalController.php:29
* @route '/admin/kompetisi/jadwal'
*/
store.url = (options?: RouteQueryOptions) => {




    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\JadwalController::store
* @see app/Http/Controllers/Admin/JadwalController.php:29
* @route '/admin/kompetisi/jadwal'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})


/**
* @see \App\Http\Controllers\Admin\JadwalController::update
* @see app/Http/Controllers/Admin/JadwalController.php:48
* @route '/admin/kompetisi/jadwal/{id}'
*/
export const update = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/kompetisi/jadwal/{id}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\JadwalController::update
* @see app/Http/Controllers/Admin/JadwalController.php:48
* @route '/admin/kompetisi/jadwal/{id}'
*/
update.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }


    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        id: args.id,
    }

    return update.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\JadwalController::update
* @see app/Http/Controllers/Admin/JadwalController.php:48
* @route '/admin/kompetisi/jadwal/{id}'
*/
update.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})


/**
* @see \App\Http\Controllers\Admin\JadwalController::destroy
* @see app/Http/Controllers/Admin/JadwalController.php:67
* @route '/admin/kompetisi/jadwal/{id}'
*/
export const destroy = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/kompetisi/jadwal/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\JadwalController::destroy
* @see app/Http/Controllers/Admin/JadwalController.php:67
* @route '/admin/kompetisi/jadwal/{id}'
*/
destroy.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }


    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        id: args.id,
    }

    return destroy.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\JadwalController::destroy
* @see app/Http/Controllers/Admin/JadwalController.php:67
* @route '/admin/kompetisi/jadwal/{id}'
*/
destroy.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})




const jadwal = {
    store: Object.assign(store, store),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default jadwal