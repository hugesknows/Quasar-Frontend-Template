export function bearerToken(state)
{
  return state.user.accessToken ? "Bearer " + state.user.accessToken : null;
}
