import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\StandingController::index
* @see app/Http/Controllers/Admin/StandingController.php:12
* @route '/admin/kompetisi/klasemen'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/kompetisi/klasemen',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\StandingController::index
* @see app/Http/Controllers/Admin/StandingController.php:12
* @route '/admin/kompetisi/klasemen'
*/
index.url = (options?: RouteQueryOptions) => {




    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\StandingController::index
* @see app/Http/Controllers/Admin/StandingController.php:12
* @route '/admin/kompetisi/klasemen'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\StandingController::index
* @see app/Http/Controllers/Admin/StandingController.php:12
* @route '/admin/kompetisi/klasemen'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})


/**
* @see \App\Http\Controllers\Admin\StandingController::update
* @see app/Http/Controllers/Admin/StandingController.php:45
* @route '/admin/kompetisi/klasemen/{standing}'
*/
export const update = (args: { standing: number | { id: number } } | [standing: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/kompetisi/klasemen/{standing}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\StandingController::update
* @see app/Http/Controllers/Admin/StandingController.php:45
* @route '/admin/kompetisi/klasemen/{standing}'
*/
update.url = (args: { standing: number | { id: number } } | [standing: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { standing: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { standing: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            standing: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        standing: typeof args.standing === 'object'
        ? args.standing.id
        : args.standing,
    }

    return update.definition.url
            .replace('{standing}', parsedArgs.standing.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\StandingController::update
* @see app/Http/Controllers/Admin/StandingController.php:45
* @route '/admin/kompetisi/klasemen/{standing}'
*/
update.put = (args: { standing: number | { id: number } } | [standing: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})


/**
* @see \App\Http\Controllers\Admin\StandingController::destroy
* @see app/Http/Controllers/Admin/StandingController.php:67
* @route '/admin/kompetisi/klasemen/{standing}'
*/
export const destroy = (args: { standing: number | { id: number } } | [standing: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/kompetisi/klasemen/{standing}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\StandingController::destroy
* @see app/Http/Controllers/Admin/StandingController.php:67
* @route '/admin/kompetisi/klasemen/{standing}'
*/
destroy.url = (args: { standing: number | { id: number } } | [standing: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { standing: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { standing: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            standing: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        standing: typeof args.standing === 'object'
        ? args.standing.id
        : args.standing,
    }

    return destroy.definition.url
            .replace('{standing}', parsedArgs.standing.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\StandingController::destroy
* @see app/Http/Controllers/Admin/StandingController.php:67
* @route '/admin/kompetisi/klasemen/{standing}'
*/
destroy.delete = (args: { standing: number | { id: number } } | [standing: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})


const StandingController = { index, update, destroy }

export default StandingController