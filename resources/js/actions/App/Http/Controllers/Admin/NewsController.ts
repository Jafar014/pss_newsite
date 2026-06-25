import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\NewsController::index
* @see app/Http/Controllers/Admin/NewsController.php:12
* @route '/admin/berita'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/berita',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\NewsController::index
* @see app/Http/Controllers/Admin/NewsController.php:12
* @route '/admin/berita'
*/
index.url = (options?: RouteQueryOptions) => {




    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\NewsController::index
* @see app/Http/Controllers/Admin/NewsController.php:12
* @route '/admin/berita'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\NewsController::index
* @see app/Http/Controllers/Admin/NewsController.php:12
* @route '/admin/berita'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})


/**
* @see \App\Http\Controllers\Admin\NewsController::store
* @see app/Http/Controllers/Admin/NewsController.php:21
* @route '/admin/berita'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/berita',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\NewsController::store
* @see app/Http/Controllers/Admin/NewsController.php:21
* @route '/admin/berita'
*/
store.url = (options?: RouteQueryOptions) => {




    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\NewsController::store
* @see app/Http/Controllers/Admin/NewsController.php:21
* @route '/admin/berita'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})


/**
* @see \App\Http\Controllers\Admin\NewsController::update
* @see app/Http/Controllers/Admin/NewsController.php:42
* @route '/admin/berita/{news}'
*/
export const update = (args: { news: number | { id: number } } | [news: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/berita/{news}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\NewsController::update
* @see app/Http/Controllers/Admin/NewsController.php:42
* @route '/admin/berita/{news}'
*/
update.url = (args: { news: number | { id: number } } | [news: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { news: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { news: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            news: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        news: typeof args.news === 'object'
        ? args.news.id
        : args.news,
    }

    return update.definition.url
            .replace('{news}', parsedArgs.news.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\NewsController::update
* @see app/Http/Controllers/Admin/NewsController.php:42
* @route '/admin/berita/{news}'
*/
update.put = (args: { news: number | { id: number } } | [news: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})


/**
* @see \App\Http\Controllers\Admin\NewsController::destroy
* @see app/Http/Controllers/Admin/NewsController.php:63
* @route '/admin/berita/{news}'
*/
export const destroy = (args: { news: number | { id: number } } | [news: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/berita/{news}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\NewsController::destroy
* @see app/Http/Controllers/Admin/NewsController.php:63
* @route '/admin/berita/{news}'
*/
destroy.url = (args: { news: number | { id: number } } | [news: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { news: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { news: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            news: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        news: typeof args.news === 'object'
        ? args.news.id
        : args.news,
    }

    return destroy.definition.url
            .replace('{news}', parsedArgs.news.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\NewsController::destroy
* @see app/Http/Controllers/Admin/NewsController.php:63
* @route '/admin/berita/{news}'
*/
destroy.delete = (args: { news: number | { id: number } } | [news: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})


const NewsController = { index, store, update, destroy }

export default NewsController