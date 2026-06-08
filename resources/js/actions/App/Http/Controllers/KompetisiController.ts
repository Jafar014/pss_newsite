import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\KompetisiController::index
* @see app/Http/Controllers/KompetisiController.php:10
* @route '/kompetisi'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/kompetisi',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\KompetisiController::index
* @see app/Http/Controllers/KompetisiController.php:10
* @route '/kompetisi'
*/
index.url = (options?: RouteQueryOptions) => {




    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\KompetisiController::index
* @see app/Http/Controllers/KompetisiController.php:10
* @route '/kompetisi'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KompetisiController::index
* @see app/Http/Controllers/KompetisiController.php:10
* @route '/kompetisi'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})


const KompetisiController = { index }

export default KompetisiController