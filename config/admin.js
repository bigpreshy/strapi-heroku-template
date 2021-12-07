module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '644306507b25711ede0402d2cf26b80b'),
  },
});
