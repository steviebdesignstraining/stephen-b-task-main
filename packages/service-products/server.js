const express = require('express');
const cors = require('cors');
const mockProducts = require('@baby-octan/common/mockProducts');

const app = express();

app.get('/products', (_, res) => {
  return res.send(mockProducts);
});

app.get('/product/:code', (req, res) => {
  const code = req.params.code;
  const filteredProduct = mockProducts.results.filter((p) => p.code === code);
  return res.send(filteredProduct[0]);
});

// enable cors for local development
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen({ port: 4010 }, () =>
  console.log(`🚀 Server ready at http://localhost:4010`)
);
