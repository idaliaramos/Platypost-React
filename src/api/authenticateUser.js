import env from '../env';

export default async function authenticate(credentials) {
  console.log(credentials, 'url');
  try {
    // const response = await fetch(`${env.API_BASE_URL}/users`, {
    const response = await fetch('http://localhost:8080/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    });
    const body = await response.json();
    if (body.error) throw new Error(body.message);
    return body;
  } catch (error) {
    if (error.message.startsWith('AuthenticationService.ERROR_'))
      // ownprops.history.push('/login');
      //update state with errors to display user as why they arent able to log in
      throw error;
    throw new Error('AuthenticationService.ERROR_UNEXPECTED');
  }
}
