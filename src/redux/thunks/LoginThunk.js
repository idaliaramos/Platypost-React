import decode from 'jwt-decode';

import authenticate from '../../api/authenticateUser';
import getUser from '../../api/getUser';
import { defer } from '../../utils/getFunc';

export default {
  create(credentials, history) {
    return async (dispatch, getState) => {
      try {
        const { token } = await authenticate(credentials);
        localStorage.setItem('token', token);

        const { sub: userId } = decode(token);
        const user = await getUser(userId, { token });

        defer(() => {
          history.push('/send');
        });

        dispatch({ type: 'LOGIN', token, user });
        return { token, user };
      } catch (error) {
        localStorage.removeItem('token');
        console.log(error, 'error');
        throw error;
      }
    };
  }
};
