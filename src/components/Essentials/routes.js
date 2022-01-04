
import Home from '../Home/component'
import Personal from '../Personal/component'
import HelpSupport from '../HelpSupport/component'
import ProductServices from '../ProductServices/component'
import Store from '../Store/component'

export default [

    {
        component: Home,
        name: 'Home',
        path: '/'
    },
    {
        component: Personal,
        name: 'Personal',
        path: '/personal'
    },
    {
        component: HelpSupport,
        name: 'Help',
        path: '/help-support'
    },
    {
        component: ProductServices,
        name: 'Product',
        path: '/products-services'
    },
    {
        component: Store,
        name: 'Store',
        path: '/store'
    }
]