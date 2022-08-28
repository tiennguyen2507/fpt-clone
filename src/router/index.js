import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'root',
			component: () => import('../views/Home.vue'),
		},
		{
			path: '/:pathMatch(.*)*',
			component: () => import('../views/Home.vue'),
		},
	],
	strict: true,
});
export default router;
