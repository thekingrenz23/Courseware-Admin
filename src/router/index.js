import Vue from 'vue'
import VueRouter from 'vue-router'

import { 
	ManageStories, ComposeStory, ManageTeachers
} from '../views/index'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'ManageStories',
		component: ManageStories
	},
	{
		path: '/compose',
		name: 'ComposeStory',
		component: ComposeStory
	},
	{
		path: '/teachers',
		name: 'ManageTeachers',
		component: ManageTeachers
	}
]

const router = new VueRouter({
	routes
})

export default router
