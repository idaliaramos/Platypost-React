import env from '../env';
// export default function getUserHistory(userId) {
export default function getUserHistory() {
  // const token = localStorage.getItem('token');

  // return fetch(`${env.API_BASE_URL}/mail/${userId}/history`, {
  return fetch(`https://api.airtable.com/v0/appc09MoVXC3pk1s4/mail`, {
    headers: {
      'Content-Type': 'application/json'
      // Authorization: `Bearer ${token}`
    }
  })
    .then(response => {
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
    })
    .then(mail => {
      console.log(mail);
      return adventureCards.map(adventureCard => {
        return {
          id: mail.id,
          category: mail.senderAddress,
          name: mail.receiverAddress,
          description: mail.message,
          location: mail.date,
          url: mail.url
        };
      });
    });
  // .catch(error){
  //
  // };
}
