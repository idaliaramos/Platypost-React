import env from '../env';
import decode from 'jwt-decode';
export default function getUserHistory() {
  const token = localStorage.getItem('token');
  const { sub: userId } = decode(token);
  //getting user history with their identified token
  return fetch(`${env.API_BASE_URL}/users/${userId}/mail`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  }).then(response => {
    if (response.status !== 200 && response.status !== 201) {
      // return undefined;
      console.log('not a 200');
      // throw new Error()
      // return;
      //check
    } else {
      return response.json();
    }
  });
}
