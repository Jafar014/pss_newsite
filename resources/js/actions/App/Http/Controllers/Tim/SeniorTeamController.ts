import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Tim\SeniorTeamController::index
* @see app/Http/Controllers/Tim/SeniorTeamController.php:13
* @route '/skuad'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/skuad',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Tim\SeniorTeamController::index
* @see app/Http/Controllers/Tim/SeniorTeamController.php:13
* @route '/skuad'
*/
index.url = (options?: RouteQueryOptions) => {




    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Tim\SeniorTeamController::index
* @see app/Http/Controllers/Tim/SeniorTeamController.php:13
* @route '/skuad'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tim\SeniorTeamController::index
* @see app/Http/Controllers/Tim/SeniorTeamController.php:13
* @route '/skuad'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Tim\SeniorTeamController::index
* @see app/Http/Controllers/Tim/SeniorTeamController.php:13
* @route '/skuad'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tim\SeniorTeamController::index
* @see app/Http/Controllers/Tim/SeniorTeamController.php:13
* @route '/skuad'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Tim\SeniorTeamController::index
* @see app/Http/Controllers/Tim/SeniorTeamController.php:13
* @route '/skuad'
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

const SeniorTeamController = { index }

export default SeniorTeamController