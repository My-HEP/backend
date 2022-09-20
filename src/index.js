const express = require('express');
const Sentry = require('@sentry/node');
const Tracing = require('@sentry/tracing');
const cors = require('cors');
const bodyParser = require('body-parser');

const sharedRoutes = require('./routes/sharedRoutes');

const app = express();
const port = 3001;

Sentry.init({
  dsn: 'https://23762ca7a2274c619b476cf0ccad0580@o1372411.ingest.sentry.io/6677310',
  integrations: [
    new Sentry.Integrations.Http({ tracing: true }),

    new Tracing.Integrations.Express({ app }),
  ],
  tracesSampleRate: 1.0,
});

app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());

app.use(bodyParser.json());
app.use(cors());

// app.get('/user', (req, res) => {
//   res.send({ hep_backend: 'Hello World!' });
// });

// app.post('/user', (req, res) => {
//   console.log(req.body);
// });

// Routes
app.use('/user', sharedRoutes);

app.use(Sentry.Handlers.errorHandler());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
