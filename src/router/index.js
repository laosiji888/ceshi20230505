import Vue from 'vue'
import VueRouter from 'vue-router'
const home = () =>
    import ('../components/home.vue')
const mergePDF = () =>
    import ('../components/mergePDF')
const splitPDF = () =>
    import ('../components/splitPDF')
const compressPDF = () =>
    import ('../components/compressPDF')
const login = () =>
    import ('../components/login.vue')
const freeTrial = () =>
    import ('../components/freeTrial.vue')
const month = () =>
    import ('../components/month.vue')
const year = () =>
    import ('../components/year.vue')
const banner = () =>
    import ('../components/banner.vue')
const footer = () =>
    import ('../components/footer.vue')
const pptTopdf = () =>
    import ('../components/pptTopdf.vue')
const mergeUpload = () =>
    import ('../components/mergeUpload.vue')
const userpurch = () =>
    import ('../components/userpurch.vue')
const userinformation = () =>
    import ('../components/userinformation.vue')
const purchase = () =>
    import ('../components/purchase')
const forgetpassword = () =>
    import ('../components/forgetpassword.vue')
const WebViewer = () =>
    import ('../components/WebViewer.vue')
const edit = () =>
    import ('../components/edit.vue')
Vue.use(VueRouter)


const routes = [
    { path: '/', redirect: "/home" },

    {
        path: '/banner',
        component: banner,

        children: [
            { path: '/home', component: home },
            { path: '/mergePDF', component: mergePDF },
            { path: '/mergePDF', component: mergePDF },
            { path: '/splitPDF', component: splitPDF },
            { path: '/compressPDF', component: compressPDF },
            { path: '/forgetpassword', component: forgetpassword },
            { path: '/edit', component: edit },
            { path: '/login', component: login },
            {
                path: '/freeTrial',
                component: freeTrial,
                children: [
                    { path: '/month', component: month },
                    { path: '/year', component: year }
                ]
            },
            {
                path: '/userpurch',
                component: userpurch,
                children: [
                    { path: '/userinformation', component: userinformation },
                    { path: '/purchase', component: purchase }
                ]
            }, { path: '/pptTopdf', component: pptTopdf },
            { path: '/mergeUpload', component: mergeUpload },

        ]
    },
    { path: '/WebViewer', component: WebViewer },
    {
        path: '/footer',
        component: footer,
    }


]




const router = new VueRouter({
    routes,
    mode: "history"
})

export default router