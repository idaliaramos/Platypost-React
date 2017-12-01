const STRIPE_PUBLISHABLE =
  process.env.NODE_ENV === 'production'
    ? 'pk_live_MY_PUBLISHABLE_KEY'
    : 'pk_test_maSJzpsEAisC3LrcQtV6Tvqn';

export default STRIPE_PUBLISHABLE;
