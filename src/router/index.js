import Vue from 'vue'
import VueRouter from 'vue-router'

import { 
	ManageStories, ComposeStory, ManageTeachers,
	Login, Out, ManageSections, ManageSchoolYear
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
	},
	{
		path: '/login',
		name: 'Login',
		component: Login
	},
	{
		path: '/out',
		name: 'Out',
		component: Out
	},
	{
		path: '/sections',
		name: 'ManageSections',
		component: ManageSections
	},
	{
		path: '/schoolyear',
		name: 'ManageSchoolYear',
		component: ManageSchoolYear
	}
]

const router = new VueRouter({
	routes
})

export default router
