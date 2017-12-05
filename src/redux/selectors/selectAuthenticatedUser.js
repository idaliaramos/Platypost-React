export default function selectAuthenticatedUser(state) {
  if (!state.authenticatedUserId) return null;
  const usersById = state.usersById || {};
  return usersById[state.authenticatedUserId] || null;
}
