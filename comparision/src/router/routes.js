const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/QuasarPage.vue') },
      { path: 'quasar', component: () => import('pages/QuasarPage.vue') },
      { path: 'tabulator', component: () => import('pages/TabulatorPage.vue') },
      { path: 'grid', component: () => import('pages/AGPage.vue') },
      { path: 'grid2', component: () => import('pages/AGPage2.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
