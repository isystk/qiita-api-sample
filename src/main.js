import './assets/sass/normalize.scss';
import './assets/sass/common.scss';

import _ from 'lodash';
window._ = _;

import Vue from "vue"
import App from "./pages/index"
import router from './router'
import store from './store'

new Vue({
    el: "#app",
    router,
    store,
    template: "<App/>",
    components: { App }
})
