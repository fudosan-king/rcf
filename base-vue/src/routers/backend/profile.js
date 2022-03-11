export default [
    {
        path: 'profile',
        name: 'profile.admin',
        component: () => import('../../views/backend/profile/Profile'),
        meta: {
            requiresAuth: true,
        },
    },
]
