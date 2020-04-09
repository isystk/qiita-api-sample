import './assets/sass/normalize.scss';
import './assets/sass/common.scss';

import axios from 'axios';
window.axios = axios;
import lodash from 'lodash';
window.lodash = lodash;
window._ = lodash;

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
