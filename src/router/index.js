import { createRouter, createWebHistory } from 'vue-router';
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'root',
			component: () => import('@/views/Home.vue'),
		},
		{
			path: '/login',
			name: 'login',
			component: () => import('@/components/auth/Login.vue'),
		},
		{
			path: '/:pathMatch(.*)*',
			component: () => import('@/components/notFound/NoFound.vue'),
		},
	],
	strict: true,
});
export default router;
