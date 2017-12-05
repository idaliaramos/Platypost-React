// import createUser from '../../api/createUser';

export default function createUserThunk(attributes) {
  return async (dispatch, getState, env) => {
    try {
      // const user = await createUser(attributes);
      console.log(user, 'this is the user');
      dispatch({ type: 'CREATE_USER_COMPLETED', user });
      return user;
    } catch (error) {
      dispatch({ type: 'FAILED' });
    }
  };
}
