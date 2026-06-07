import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/berita'
*/
const Controller7c2fabf6cf13e33fa98781521c318790 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller7c2fabf6cf13e33fa98781521c318790.url(options),
    method: 'get',
})

Controller7c2fabf6cf13e33fa98781521c318790.definition = {
    methods: ["get","head"],
    url: '/berita',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/berita'
*/
Controller7c2fabf6cf13e33fa98781521c318790.url = (options?: RouteQueryOptions) => {




    return Controller7c2fabf6cf13e33fa98781521c318790.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/berita'
*/
Controller7c2fabf6cf13e33fa98781521c318790.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller7c2fabf6cf13e33fa98781521c318790.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/berita'
*/
Controller7c2fabf6cf13e33fa98781521c318790.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller7c2fabf6cf13e33fa98781521c318790.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/berita'
*/
const Controller7c2fabf6cf13e33fa98781521c318790Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller7c2fabf6cf13e33fa98781521c318790.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/berita'
*/
Controller7c2fabf6cf13e33fa98781521c318790Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller7c2fabf6cf13e33fa98781521c318790.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/berita'
*/
Controller7c2fabf6cf13e33fa98781521c318790Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller7c2fabf6cf13e33fa98781521c318790.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Controller7c2fabf6cf13e33fa98781521c318790.form = Controller7c2fabf6cf13e33fa98781521c318790Form
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/berita/{id}'
*/
const Controller7fd6671e5791ce57d99c9195685861f4 = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller7fd6671e5791ce57d99c9195685861f4.url(args, options),
    method: 'get',
})

Controller7fd6671e5791ce57d99c9195685861f4.definition = {
    methods: ["get","head"],
    url: '/berita/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/berita/{id}'
*/
Controller7fd6671e5791ce57d99c9195685861f4.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return Controller7fd6671e5791ce57d99c9195685861f4.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/berita/{id}'
*/
Controller7fd6671e5791ce57d99c9195685861f4.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller7fd6671e5791ce57d99c9195685861f4.url(args, options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/berita/{id}'
*/
Controller7fd6671e5791ce57d99c9195685861f4.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller7fd6671e5791ce57d99c9195685861f4.url(args, options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/berita/{id}'
*/
const Controller7fd6671e5791ce57d99c9195685861f4Form = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller7fd6671e5791ce57d99c9195685861f4.url(args, options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/berita/{id}'
*/
Controller7fd6671e5791ce57d99c9195685861f4Form.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller7fd6671e5791ce57d99c9195685861f4.url(args, options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/berita/{id}'
*/
Controller7fd6671e5791ce57d99c9195685861f4Form.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller7fd6671e5791ce57d99c9195685861f4.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Controller7fd6671e5791ce57d99c9195685861f4.form = Controller7fd6671e5791ce57d99c9195685861f4Form
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/galeri'
*/
const Controllerf6d7c31aa90fe6c4f7bac34f2d5f9927 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllerf6d7c31aa90fe6c4f7bac34f2d5f9927.url(options),
    method: 'get',
})

Controllerf6d7c31aa90fe6c4f7bac34f2d5f9927.definition = {
    methods: ["get","head"],
    url: '/galeri',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/galeri'
*/
Controllerf6d7c31aa90fe6c4f7bac34f2d5f9927.url = (options?: RouteQueryOptions) => {




    return Controllerf6d7c31aa90fe6c4f7bac34f2d5f9927.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/galeri'
*/
Controllerf6d7c31aa90fe6c4f7bac34f2d5f9927.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllerf6d7c31aa90fe6c4f7bac34f2d5f9927.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/galeri'
*/
Controllerf6d7c31aa90fe6c4f7bac34f2d5f9927.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllerf6d7c31aa90fe6c4f7bac34f2d5f9927.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/galeri'
*/
const Controllerf6d7c31aa90fe6c4f7bac34f2d5f9927Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controllerf6d7c31aa90fe6c4f7bac34f2d5f9927.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/galeri'
*/
Controllerf6d7c31aa90fe6c4f7bac34f2d5f9927Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controllerf6d7c31aa90fe6c4f7bac34f2d5f9927.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/galeri'
*/
Controllerf6d7c31aa90fe6c4f7bac34f2d5f9927Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controllerf6d7c31aa90fe6c4f7bac34f2d5f9927.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Controllerf6d7c31aa90fe6c4f7bac34f2d5f9927.form = Controllerf6d7c31aa90fe6c4f7bac34f2d5f9927Form
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/galeri/{matchday}'
*/
const Controllerf32d98fc125a64f3804aabfa93fac72e = (args: { matchday: string | number } | [matchday: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllerf32d98fc125a64f3804aabfa93fac72e.url(args, options),
    method: 'get',
})

Controllerf32d98fc125a64f3804aabfa93fac72e.definition = {
    methods: ["get","head"],
    url: '/galeri/{matchday}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/galeri/{matchday}'
*/
Controllerf32d98fc125a64f3804aabfa93fac72e.url = (args: { matchday: string | number } | [matchday: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return Controllerf32d98fc125a64f3804aabfa93fac72e.definition.url
            .replace('{matchday}', parsedArgs.matchday.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/galeri/{matchday}'
*/
Controllerf32d98fc125a64f3804aabfa93fac72e.get = (args: { matchday: string | number } | [matchday: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllerf32d98fc125a64f3804aabfa93fac72e.url(args, options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/galeri/{matchday}'
*/
Controllerf32d98fc125a64f3804aabfa93fac72e.head = (args: { matchday: string | number } | [matchday: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllerf32d98fc125a64f3804aabfa93fac72e.url(args, options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/galeri/{matchday}'
*/
const Controllerf32d98fc125a64f3804aabfa93fac72eForm = (args: { matchday: string | number } | [matchday: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controllerf32d98fc125a64f3804aabfa93fac72e.url(args, options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/galeri/{matchday}'
*/
Controllerf32d98fc125a64f3804aabfa93fac72eForm.get = (args: { matchday: string | number } | [matchday: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controllerf32d98fc125a64f3804aabfa93fac72e.url(args, options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/galeri/{matchday}'
*/
Controllerf32d98fc125a64f3804aabfa93fac72eForm.head = (args: { matchday: string | number } | [matchday: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controllerf32d98fc125a64f3804aabfa93fac72e.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Controllerf32d98fc125a64f3804aabfa93fac72e.form = Controllerf32d98fc125a64f3804aabfa93fac72eForm
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/sejarah'
*/
const Controllerb60353b9af63346da6531c969f3c88aa = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllerb60353b9af63346da6531c969f3c88aa.url(options),
    method: 'get',
})

Controllerb60353b9af63346da6531c969f3c88aa.definition = {
    methods: ["get","head"],
    url: '/sejarah',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/sejarah'
*/
Controllerb60353b9af63346da6531c969f3c88aa.url = (options?: RouteQueryOptions) => {




    return Controllerb60353b9af63346da6531c969f3c88aa.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/sejarah'
*/
Controllerb60353b9af63346da6531c969f3c88aa.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllerb60353b9af63346da6531c969f3c88aa.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/sejarah'
*/
Controllerb60353b9af63346da6531c969f3c88aa.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllerb60353b9af63346da6531c969f3c88aa.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/sejarah'
*/
const Controllerb60353b9af63346da6531c969f3c88aaForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controllerb60353b9af63346da6531c969f3c88aa.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/sejarah'
*/
Controllerb60353b9af63346da6531c969f3c88aaForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controllerb60353b9af63346da6531c969f3c88aa.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/sejarah'
*/
Controllerb60353b9af63346da6531c969f3c88aaForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controllerb60353b9af63346da6531c969f3c88aa.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Controllerb60353b9af63346da6531c969f3c88aa.form = Controllerb60353b9af63346da6531c969f3c88aaForm
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/toko'
*/
const Controllercdaf2abb28cbdea7312af490ce0209a8 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllercdaf2abb28cbdea7312af490ce0209a8.url(options),
    method: 'get',
})

Controllercdaf2abb28cbdea7312af490ce0209a8.definition = {
    methods: ["get","head"],
    url: '/toko',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/toko'
*/
Controllercdaf2abb28cbdea7312af490ce0209a8.url = (options?: RouteQueryOptions) => {




    return Controllercdaf2abb28cbdea7312af490ce0209a8.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/toko'
*/
Controllercdaf2abb28cbdea7312af490ce0209a8.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllercdaf2abb28cbdea7312af490ce0209a8.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/toko'
*/
Controllercdaf2abb28cbdea7312af490ce0209a8.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllercdaf2abb28cbdea7312af490ce0209a8.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/toko'
*/
const Controllercdaf2abb28cbdea7312af490ce0209a8Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controllercdaf2abb28cbdea7312af490ce0209a8.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/toko'
*/
Controllercdaf2abb28cbdea7312af490ce0209a8Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controllercdaf2abb28cbdea7312af490ce0209a8.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/toko'
*/
Controllercdaf2abb28cbdea7312af490ce0209a8Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controllercdaf2abb28cbdea7312af490ce0209a8.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Controllercdaf2abb28cbdea7312af490ce0209a8.form = Controllercdaf2abb28cbdea7312af490ce0209a8Form
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/toko/produk/{slug}'
*/
const Controller7fcaf28783392f055ba130625810575b = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller7fcaf28783392f055ba130625810575b.url(args, options),
    method: 'get',
})

Controller7fcaf28783392f055ba130625810575b.definition = {
    methods: ["get","head"],
    url: '/toko/produk/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/toko/produk/{slug}'
*/
Controller7fcaf28783392f055ba130625810575b.url = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { slug: args }
    }


    if (Array.isArray(args)) {
        args = {
            slug: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        slug: args.slug,
    }

    return Controller7fcaf28783392f055ba130625810575b.definition.url
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/toko/produk/{slug}'
*/
Controller7fcaf28783392f055ba130625810575b.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller7fcaf28783392f055ba130625810575b.url(args, options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/toko/produk/{slug}'
*/
Controller7fcaf28783392f055ba130625810575b.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller7fcaf28783392f055ba130625810575b.url(args, options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/toko/produk/{slug}'
*/
const Controller7fcaf28783392f055ba130625810575bForm = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller7fcaf28783392f055ba130625810575b.url(args, options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/toko/produk/{slug}'
*/
Controller7fcaf28783392f055ba130625810575bForm.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller7fcaf28783392f055ba130625810575b.url(args, options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/toko/produk/{slug}'
*/
Controller7fcaf28783392f055ba130625810575bForm.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller7fcaf28783392f055ba130625810575b.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Controller7fcaf28783392f055ba130625810575b.form = Controller7fcaf28783392f055ba130625810575bForm
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/kompetisi/week/{fixture}'
*/
const Controllere7ce0873180e6a081832893786a2f0de = (args: { fixture: string | number } | [fixture: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllere7ce0873180e6a081832893786a2f0de.url(args, options),
    method: 'get',
})

Controllere7ce0873180e6a081832893786a2f0de.definition = {
    methods: ["get","head"],
    url: '/kompetisi/week/{fixture}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/kompetisi/week/{fixture}'
*/
Controllere7ce0873180e6a081832893786a2f0de.url = (args: { fixture: string | number } | [fixture: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return Controllere7ce0873180e6a081832893786a2f0de.definition.url
            .replace('{fixture}', parsedArgs.fixture.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/kompetisi/week/{fixture}'
*/
Controllere7ce0873180e6a081832893786a2f0de.get = (args: { fixture: string | number } | [fixture: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllere7ce0873180e6a081832893786a2f0de.url(args, options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/kompetisi/week/{fixture}'
*/
Controllere7ce0873180e6a081832893786a2f0de.head = (args: { fixture: string | number } | [fixture: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllere7ce0873180e6a081832893786a2f0de.url(args, options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/kompetisi/week/{fixture}'
*/
const Controllere7ce0873180e6a081832893786a2f0deForm = (args: { fixture: string | number } | [fixture: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controllere7ce0873180e6a081832893786a2f0de.url(args, options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/kompetisi/week/{fixture}'
*/
Controllere7ce0873180e6a081832893786a2f0deForm.get = (args: { fixture: string | number } | [fixture: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controllere7ce0873180e6a081832893786a2f0de.url(args, options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/kompetisi/week/{fixture}'
*/
Controllere7ce0873180e6a081832893786a2f0deForm.head = (args: { fixture: string | number } | [fixture: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controllere7ce0873180e6a081832893786a2f0de.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Controllere7ce0873180e6a081832893786a2f0de.form = Controllere7ce0873180e6a081832893786a2f0deForm
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/old'
*/
const Controllerd90ca654c95b4b3571163afa649f5027 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllerd90ca654c95b4b3571163afa649f5027.url(options),
    method: 'get',
})

Controllerd90ca654c95b4b3571163afa649f5027.definition = {
    methods: ["get","head"],
    url: '/old',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/old'
*/
Controllerd90ca654c95b4b3571163afa649f5027.url = (options?: RouteQueryOptions) => {




    return Controllerd90ca654c95b4b3571163afa649f5027.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/old'
*/
Controllerd90ca654c95b4b3571163afa649f5027.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllerd90ca654c95b4b3571163afa649f5027.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/old'
*/
Controllerd90ca654c95b4b3571163afa649f5027.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllerd90ca654c95b4b3571163afa649f5027.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/old'
*/
const Controllerd90ca654c95b4b3571163afa649f5027Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controllerd90ca654c95b4b3571163afa649f5027.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/old'
*/
Controllerd90ca654c95b4b3571163afa649f5027Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controllerd90ca654c95b4b3571163afa649f5027.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/old'
*/
Controllerd90ca654c95b4b3571163afa649f5027Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controllerd90ca654c95b4b3571163afa649f5027.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Controllerd90ca654c95b4b3571163afa649f5027.form = Controllerd90ca654c95b4b3571163afa649f5027Form
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/dashboard'
*/
const Controller42a740574ecbfbac32f8cc353fc32db9 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller42a740574ecbfbac32f8cc353fc32db9.url(options),
    method: 'get',
})

Controller42a740574ecbfbac32f8cc353fc32db9.definition = {
    methods: ["get","head"],
    url: '/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/dashboard'
*/
Controller42a740574ecbfbac32f8cc353fc32db9.url = (options?: RouteQueryOptions) => {




    return Controller42a740574ecbfbac32f8cc353fc32db9.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/dashboard'
*/
Controller42a740574ecbfbac32f8cc353fc32db9.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller42a740574ecbfbac32f8cc353fc32db9.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/dashboard'
*/
Controller42a740574ecbfbac32f8cc353fc32db9.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller42a740574ecbfbac32f8cc353fc32db9.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/dashboard'
*/
const Controller42a740574ecbfbac32f8cc353fc32db9Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller42a740574ecbfbac32f8cc353fc32db9.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/dashboard'
*/
Controller42a740574ecbfbac32f8cc353fc32db9Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller42a740574ecbfbac32f8cc353fc32db9.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/dashboard'
*/
Controller42a740574ecbfbac32f8cc353fc32db9Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller42a740574ecbfbac32f8cc353fc32db9.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Controller42a740574ecbfbac32f8cc353fc32db9.form = Controller42a740574ecbfbac32f8cc353fc32db9Form
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/settings/appearance'
*/
const Controllere19ee86e9cf603ce1a59a1ec5d21dec5 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
    method: 'get',
})

Controllere19ee86e9cf603ce1a59a1ec5d21dec5.definition = {
    methods: ["get","head"],
    url: '/settings/appearance',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/settings/appearance'
*/
Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url = (options?: RouteQueryOptions) => {




    return Controllere19ee86e9cf603ce1a59a1ec5d21dec5.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/settings/appearance'
*/
Controllere19ee86e9cf603ce1a59a1ec5d21dec5.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/settings/appearance'
*/
Controllere19ee86e9cf603ce1a59a1ec5d21dec5.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/settings/appearance'
*/
const Controllere19ee86e9cf603ce1a59a1ec5d21dec5Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/settings/appearance'
*/
Controllere19ee86e9cf603ce1a59a1ec5d21dec5Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/settings/appearance'
*/
Controllere19ee86e9cf603ce1a59a1ec5d21dec5Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Controllere19ee86e9cf603ce1a59a1ec5d21dec5.form = Controllere19ee86e9cf603ce1a59a1ec5d21dec5Form

const Controller = {
    '/berita': Controller7c2fabf6cf13e33fa98781521c318790,
    '/berita/{id}': Controller7fd6671e5791ce57d99c9195685861f4,
    '/galeri': Controllerf6d7c31aa90fe6c4f7bac34f2d5f9927,
    '/galeri/{matchday}': Controllerf32d98fc125a64f3804aabfa93fac72e,
    '/sejarah': Controllerb60353b9af63346da6531c969f3c88aa,
    '/toko': Controllercdaf2abb28cbdea7312af490ce0209a8,
    '/toko/produk/{slug}': Controller7fcaf28783392f055ba130625810575b,
    '/kompetisi/week/{fixture}': Controllere7ce0873180e6a081832893786a2f0de,
    '/old': Controllerd90ca654c95b4b3571163afa649f5027,
    '/dashboard': Controller42a740574ecbfbac32f8cc353fc32db9,
    '/settings/appearance': Controllere19ee86e9cf603ce1a59a1ec5d21dec5,
}




export default Controller