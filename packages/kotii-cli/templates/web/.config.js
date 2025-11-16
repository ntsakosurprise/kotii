import routes from './includes/routes'
// import tasks from './includes/tasks'
import * as middlewares from './includes/globals'

export default  {

    // domain: [{name: 'view engine',set: 'pug'},{name:'views',set: 'resources/views'},{name: 'static',set: 'public'}],
    middleware: {

       
        
        pprivate: {

            addMiddleware: middlewares.pprivate

        },
        all: {

            addMiddleware: middlewares.all
        }
        
    },
    router: routes,
    // kronjo: tasks,
    logger: {level: 'info'},
    cluster:{workers: 2,spawn: true,} ,
    server: 'server'



}