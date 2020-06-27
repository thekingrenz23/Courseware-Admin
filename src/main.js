import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import wysiwyg from "vue-wysiwyg"

Vue.use(wysiwyg, {maxHeight: "500px", hideModules: { image: false } })

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
	if(to.path != '/login'){
		if (!store.getters.logged) next('/login')
		else next()
	}else{
		if (store.getters.logged) next('/')
	  	else next()
	}
})

new Vue({
  	router,
  	store,
  	render: h => h(App)
}).$mount('#app')
