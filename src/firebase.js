const admin = require('firebase-admin');

const serviceAccountKey = require('../src/service-account.json');

function setupFirebase() {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccountKey),
  });
}

module.exports = {
  setupFirebase,
};
