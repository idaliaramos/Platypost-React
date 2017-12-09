const STRIPE_PUBLISHABLE =
  process.env.NODE_ENV === 'production'
    ? 'pk_test_maSJzpsEAisC3LrcQtV6Tvqn'
    : 'pk_test_maSJzpsEAisC3LrcQtV6Tvqn';

export default STRIPE_PUBLISHABLE;
