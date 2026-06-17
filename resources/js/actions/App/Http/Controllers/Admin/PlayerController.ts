import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\PlayerController::index
* @see app/Http/Controllers/Admin/PlayerController.php:12
* @route '/admin/pemain'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/pemain',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\PlayerController::index
* @see app/Http/Controllers/Admin/PlayerController.php:12
* @route '/admin/pemain'
*/
index.url = (options?: RouteQueryOptions) => {




    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PlayerController::index
* @see app/Http/Controllers/Admin/PlayerController.php:12
* @route '/admin/pemain'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\PlayerController::index
* @see app/Http/Controllers/Admin/PlayerController.php:12
* @route '/admin/pemain'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})


/**
* @see \App\Http\Controllers\Admin\PlayerController::store
* @see app/Http/Controllers/Admin/PlayerController.php:21
* @route '/admin/pemain'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/pemain',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\PlayerController::store
* @see app/Http/Controllers/Admin/PlayerController.php:21
* @route '/admin/pemain'
*/
store.url = (options?: RouteQueryOptions) => {




    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PlayerController::store
* @see app/Http/Controllers/Admin/PlayerController.php:21
* @route '/admin/pemain'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})


/**
* @see \App\Http\Controllers\Admin\PlayerController::update
* @see app/Http/Controllers/Admin/PlayerController.php:40
* @route '/admin/pemain/{player}'
*/
export const update = (args: { player: number | { id: number } } | [player: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/pemain/{player}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\PlayerController::update
* @see app/Http/Controllers/Admin/PlayerController.php:40
* @route '/admin/pemain/{player}'
*/
update.url = (args: { player: number | { id: number } } | [player: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { player: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { player: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            player: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        player: typeof args.player === 'object'
        ? args.player.id
        : args.player,
    }

    return update.definition.url
            .replace('{player}', parsedArgs.player.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PlayerController::update
* @see app/Http/Controllers/Admin/PlayerController.php:40
* @route '/admin/pemain/{player}'
*/
update.put = (args: { player: number | { id: number } } | [player: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})


/**
* @see \App\Http\Controllers\Admin\PlayerController::destroy
* @see app/Http/Controllers/Admin/PlayerController.php:59
* @route '/admin/pemain/{player}'
*/
export const destroy = (args: { player: number | { id: number } } | [player: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/pemain/{player}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\PlayerController::destroy
* @see app/Http/Controllers/Admin/PlayerController.php:59
* @route '/admin/pemain/{player}'
*/
destroy.url = (args: { player: number | { id: number } } | [player: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { player: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { player: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            player: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        player: typeof args.player === 'object'
        ? args.player.id
        : args.player,
    }

    return destroy.definition.url
            .replace('{player}', parsedArgs.player.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PlayerController::destroy
* @see app/Http/Controllers/Admin/PlayerController.php:59
* @route '/admin/pemain/{player}'
*/
destroy.delete = (args: { player: number | { id: number } } | [player: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})


const PlayerController = { index, store, update, destroy }

export default PlayerController