import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/kompetisi/week/{fixture}'
*/
export const report = (args: { fixture: string | number } | [fixture: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: report.url(args, options),
    method: 'get',
})

report.definition = {
    methods: ["get","head"],
    url: '/kompetisi/week/{fixture}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/kompetisi/week/{fixture}'
*/
report.url = (args: { fixture: string | number } | [fixture: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { fixture: args }
    }


    if (Array.isArray(args)) {
        args = {
            fixture: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        fixture: args.fixture,
    }

    return report.definition.url
            .replace('{fixture}', parsedArgs.fixture.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/kompetisi/week/{fixture}'
*/
report.get = (args: { fixture: string | number } | [fixture: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: report.url(args, options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/kompetisi/week/{fixture}'
*/
report.head = (args: { fixture: string | number } | [fixture: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: report.url(args, options),
    method: 'head',
})




const match = {
    report: Object.assign(report, report),
}

export default match