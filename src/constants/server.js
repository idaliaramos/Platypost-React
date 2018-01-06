const PAYMENT_SERVER_URL =
  process.env.NODE_ENV === 'production'
    ? 'http://platypost110017-env.us-west-1.elasticbeanstalk.com'
    : 'http://localhost:8080';
//changebacktolocalhost
// ://mailapp-backend-187406.appspot.com
export default PAYMENT_SERVER_URL;
