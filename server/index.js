import app from './server.js';

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Local server running on http://localhost:${PORT}`);
});
