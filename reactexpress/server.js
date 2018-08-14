const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
  const customers = [
    { id: 1, firstName: 'Emma', lastName: 'Phommatha' },
    { id: 2, firstName: 'Jack', lastName: 'Phommatha' },
    { id: 3, firstName: 'Jenny', lastName: 'Holyer' },
    { id: 4, firstName: 'Donny', lastName: 'Holyer' },
    { id: 5, firstName: 'Noud', lastName: 'Vilayhong' },
    { id: 6, firstName: 'Katty', lastName: 'panaraj' },
    { id: 7, firstName: 'Pern', lastName: 'Phimmachak' },
    { id: 8, firstName: 'Nang', lastName: 'Chanthaboon' }
  ];
  res.json(customers);
})

const port = 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
