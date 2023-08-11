export const navigation = [
    {
        title: 'Dashboard',
        link: 'dashboard',
        icon: 'pie-chart-2'
    },
    {
        title:'Roles & Permissions',
        icon: 'shield-outline',
        children:[
            {
                title:'Roles',
                icon:'people',
                link:'/roles-permission/roles'
            },
            {
                title:'Permissions',
                icon:'shield-off',
                link:'/roles-permission/permissions'
            }
        ]
    }
]