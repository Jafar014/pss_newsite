import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
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

/**
* @see \App\Http\Controllers\KompetisiController::index
* @see app/Http/Controllers/KompetisiController.php:10
* @route '/kompetisi'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KompetisiController::index
* @see app/Http/Controllers/KompetisiController.php:10
* @route '/kompetisi'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KompetisiController::index
* @see app/Http/Controllers/KompetisiController.php:10
* @route '/kompetisi'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

const KompetisiController = { index }

export default KompetisiController