export default {
    singular: true,
    plugins: [
      ['umi-plugin-react',{
          //这里暂时没有添加配置，该插件不会起作用，我们会在后面的课程中按照需求打开相应的配置
          antd: true,
          dva: true,
          dynamicImport: {
            loadingComponent: './components/PageLoading/index',
            webpackChunkName: true,
            level: 3,
          },
    }],
  ],
  routes: [{
    path: '/',
    component: '../layout',
    routes: [
      {
        path: '/',
        component: 'Hello',
      },
      {
        path: '/hello',
        component: 'Hello'
      },
      {
        path: '/dashboard',
        routes: [
          { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
          { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
          { path: '/dashboard/workplace', component: 'Dashboard/Workplace' }
        ]
      }
    ]
  }],
};