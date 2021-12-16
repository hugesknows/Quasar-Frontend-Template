const LoginLayout = import('layouts/LoginLayout.vue');
const DashboardLayout = import('layouts/DashboardLayout.vue');

const LoginView = import('pages/login/LoginView.vue');
const HomeView = import('pages/dashboard/HomeView.vue');



const routes = [
  {
    path: '',
    component: () => LoginLayout,
    children: [
      {path: '', component: LoginView}
    ]
  },
  {
    path: '/home',
    component: () => DashboardLayout,
    children: [
      {path: '', component: HomeView}
    ]
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
