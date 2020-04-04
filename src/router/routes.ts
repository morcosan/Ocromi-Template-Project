import { RouteConfig } from 'vue-router';


const routes: RouteConfig[] = [
   {
      path: '/',
      component: () => import('../layouts/MainLayout.vue'),
      children: [
         { path: '', component: () => import('../pages/Index.vue') },
      ],
   },
];

// always leave this as last one
routes.push({
   path: '*',
   component: () => import('../pages/Error404.vue'),
});

export default routes;
