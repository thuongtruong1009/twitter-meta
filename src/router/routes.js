const routes = [{
        path: '/',
        component: () =>
            import ('layouts/MainLayout.vue'),
        children: [{
                path: '',
                component: () =>
                    import ('src/pages/PageHome.vue'),
                name: 'Home'

            }, {
                path: '/explore',
                component: () =>
                    import ('src/pages/PageExplore.vue'),
                name: 'Explore'
            }, {
                path: '/notifications',
                component: () =>
                    import ('src/pages/PageNotifications.vue'),
                name: 'Notifications'
            },
            {
                path: '/messages',
                component: () =>
                    import ('src/pages/PageMessages.vue'),
                name: 'Messages'
            },
            {
                path: '/bookmarks',
                component: () =>
                    import ('src/pages/PageBookmarks.vue'),
                name: 'Bookmarks'
            },
            {
                path: '/lists',
                component: () =>
                    import ('src/pages/PageLists.vue'),
                name: 'Lists'
            },
            {
                path: '/profile',
                component: () =>
                    import ('src/pages/PageProfile.vue'),
                name: 'Profile'
            },
        ]
    },

    {
        path: '/:catchAll(.*)*',
        component: () =>
            import ('pages/Error404.vue')
    }
]

export default routes