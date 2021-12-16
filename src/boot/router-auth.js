import {
  SessionStorage
} from 'quasar'

export default ({
                  router
                }) =>
{
  router.beforeEach((to, from, next) =>
  {
    let userExists = !!SessionStorage.getItem('user-data');
    console.log(userExists, SessionStorage.getItem('user-data'));
    if (!userExists && to.path !== '/')
    {
      next('/');
    } else if (userExists && to.path === '/')
    {
      next('/home');
    } else
    {
      next();
    }
  })

}
