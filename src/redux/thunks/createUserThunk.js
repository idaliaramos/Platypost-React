import createUser from '../../api/createUser';

export default {
  create(attributes) {
    return async (dispatch, getState) => {
      try {
        const user = await createUser(attributes);
        dispatch({ type: 'CREATE_USER', user });
        return user;
      } catch (error) {
        console.log(error);
      }
    };
  }
};
