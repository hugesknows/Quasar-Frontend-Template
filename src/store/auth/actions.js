import {api} from 'boot/axios'

export function AUTH_REQUEST({commit}, payload)
{
  return new Promise((resolve, reject) =>
  {
    api.post("/auth/login", payload).then(response =>
    {

      let responsePayload = {
        user: response.data
      }
      commit('AUTH_REQUEST', responsePayload);
      this.$router.push("/home");
      resolve();
    })
      .catch(error =>
      {
        reject(error);
      });
  })
}
