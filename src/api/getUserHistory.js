import env from '../env';
import decode from 'jwt-decode';
// export default function getUserHistory(userId) {
export default function getUserHistory() {
  const token = localStorage.getItem('token');
  const { sub: userId } = decode(token);
  console.log(env.API_BASE_URL, 'API_BASE_URL');
  // return fetch(`${env.API_BASE_URL}/users/${userId}/mail`, {

  return fetch(`${env.API_BASE_URL}/users/${userId}/mail`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  }).then(response => {
    console.log(response.status, 'this is the resp on get history');
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

  //TODO: do i need to do this? below
  // .then(mails => {
  //   console.log(mails, 'testing');
  //   return mails
  //     .map(mail => {
  //       return {
  //         id: mail.id,
  //         receiverAddress: mail.mailData.to
  //       };
  //     })
  //     .then(x => console.log(x, 'this is what we get back'));
  // });
  // .catch(error){
  //
  // };
}
