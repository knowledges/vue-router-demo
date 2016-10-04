/**
 * Created by qbl on 2016-09-28
 */
import $ from 'jquery'
export default function (router) {
    router.map({
        '/':{
            component (resolve) {
                require(['./ad'], resolve)
            }
        },
        '/m':{
            component (resolve) {
                require(['./home'], resolve)
            },
            subRoutes: {
                '/': {
                    component(resolve){
                        require(['./components/A/A'],resolve)
                    }
                },
                '/home': {
                    component(resolve){
                        require(['./components/A/A'],resolve)
                    }
                },
                '/routeA':{
                    component (resolve) {
                        require(['./views/RouterA/contentA'], resolve)
                    },
                    subRoutes:{
                        '/':{
                            component(resolve){
                                require(['./views/RouterA/orders'],resolve)
                            }
                        },
                        '/order':{
                            component(resolve){
                                require(['./views/RouterA/orders'],resolve)
                            }
                        },
                        '/add':{
                            component(resolve){
                                require(['./views/RouterA/adds'],resolve)
                            }
                        },
                        '/list':{
                            component(resolve){
                                require(['./views/RouterA/lists'],resolve)
                            }
                        }
                    }
                },
                '/routeB':{
                    component (resolve) {
                        require(['./views/RouterB/contentB'], resolve)
                    },
                    subRoutes:{
                        '/':{
                            component(resolve){
                                require(['./views/RouterB/orders'],resolve)
                            }
                        },
                        '/order':{
                            component(resolve){
                                require(['./views/RouterB/orders'],resolve)
                            },
                            subRoutes:{
                                '/':{
                                    component(resolve){
                                        require(['./components/RouterB/items'],resolve)
                                    }
                                },
                                '/items':{
                                    component(resolve){
                                        require(['./components/RouterB/items'],resolve)
                                    }
                                },
                                '/infos':{
                                    component(resolve){
                                        require(['./components/RouterB/infos'],resolve)
                                    }
                                }
                            }
                        },
                        '/order/items/:items':{
                            component(resolve){
                                require(['./components/RouterB/OrderInfos'],resolve)
                            }
                        },
                        '/add':{
                            component(resolve){
                                require(['./views/RouterB/adds'],resolve)
                            }
                        },
                        '/list':{
                            component(resolve){
                                require(['./views/RouterB/lists'],resolve)
                            }
                        }
                    }
                },
            }
        },
    });
    router.beforeEach(({to, from, next}) => {
        let toPath = to.path
        let fromPath = from.path
        console.log('to: ' + toPath + ' from: ' + fromPath)
        if (toPath.replace(/[^/]/g, '').length > 1) {
            router.app.isIndex = false
        }
        else {
            let depath = toPath === '/' || toPath === '/invite' || toPath === '/rank'
            router.app.isIndex = depath ? 0 : 1
        }
        next()//调用过度动画
    });

    router.afterEach(function ({to}) {
        console.log(`成功浏览到: ${to.path}`);
        // return router;
    })
}