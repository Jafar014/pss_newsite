import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/galeri/{matchday}'
*/
export const gallery = (args: { matchday: string | number } | [matchday: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: gallery.url(args, options),
    method: 'get',
})

gallery.definition = {
    methods: ["get","head"],
    url: '/galeri/{matchday}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/galeri/{matchday}'
*/
gallery.url = (args: { matchday: string | number } | [matchday: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { matchday: args }
    }


    if (Array.isArray(args)) {
        args = {
            matchday: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        matchday: args.matchday,
    }

    return gallery.definition.url
            .replace('{matchday}', parsedArgs.matchday.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/galeri/{matchday}'
*/
gallery.get = (args: { matchday: string | number } | [matchday: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: gallery.url(args, options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/galeri/{matchday}'
*/
gallery.head = (args: { matchday: string | number } | [matchday: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: gallery.url(args, options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/galeri/{matchday}'
*/
const galleryForm = (args: { matchday: string | number } | [matchday: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: gallery.url(args, options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/galeri/{matchday}'
*/
galleryForm.get = (args: { matchday: string | number } | [matchday: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: gallery.url(args, options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/galeri/{matchday}'
*/
galleryForm.head = (args: { matchday: string | number } | [matchday: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: gallery.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

gallery.form = galleryForm



const content = {
    gallery: Object.assign(gallery, gallery),
}

export default content