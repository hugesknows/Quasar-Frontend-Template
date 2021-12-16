import {
  SessionStorage
} from 'quasar'
import {api} from 'boot/axios'

export function AUTH_REQUEST(state, payload)
{
  state.user = payload.user;
  SessionStorage.set("user-data", state.user);
  setAxiosHeaders(state.user.accessToken);
}

if (SessionStorage.has("user-data"))
{
  let user = SessionStorage.getItem('user-data');
  setAxiosHeaders(user.accessToken);
}

function setAxiosHeaders(token)
{
  api.defaults.headers.common["Authorization"] = "Bearer " + token;
}

function purgeAxiosHeaders()
{
  api.defaults.headers.common["Authorization"] = null;
}
