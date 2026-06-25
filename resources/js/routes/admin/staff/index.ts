import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see routes/web.php:102
* @route '/admin/staff'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/staff',
} satisfies RouteDefinition<["post"]>

/**
* @see routes/web.php:102
* @route '/admin/staff'
*/
store.url = (options?: RouteQueryOptions) => {




    return store.definition.url + queryParams(options)
}

/**
* @see routes/web.php:102
* @route '/admin/staff'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})


/**
* @see routes/web.php:115
* @route '/admin/staff/{staff}'
*/
export const update = (args: { staff: number | { id: number } } | [staff: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/staff/{staff}',
} satisfies RouteDefinition<["put"]>

/**
* @see routes/web.php:115
* @route '/admin/staff/{staff}'
*/
update.url = (args: { staff: number | { id: number } } | [staff: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { staff: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { staff: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            staff: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        staff: typeof args.staff === 'object'
        ? args.staff.id
        : args.staff,
    }

    return update.definition.url
            .replace('{staff}', parsedArgs.staff.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see routes/web.php:115
* @route '/admin/staff/{staff}'
*/
update.put = (args: { staff: number | { id: number } } | [staff: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})


/**
* @see routes/web.php:128
* @route '/admin/staff/{staff}'
*/
export const destroy = (args: { staff: number | { id: number } } | [staff: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/staff/{staff}',
} satisfies RouteDefinition<["delete"]>

/**
* @see routes/web.php:128
* @route '/admin/staff/{staff}'
*/
destroy.url = (args: { staff: number | { id: number } } | [staff: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { staff: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { staff: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            staff: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        staff: typeof args.staff === 'object'
        ? args.staff.id
        : args.staff,
    }

    return destroy.definition.url
            .replace('{staff}', parsedArgs.staff.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see routes/web.php:128
* @route '/admin/staff/{staff}'
*/
destroy.delete = (args: { staff: number | { id: number } } | [staff: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})




const staff = {
    store: Object.assign(store, store),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default staff