module.exports = {
  port: process.env.PORT || 3000,
  db: 'mongodb://localhost/supperclubdb',
  secret: process.env.SECRET || "shhh i think this is top secret"
};
