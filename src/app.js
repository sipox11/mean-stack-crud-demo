const express = require('express');
const app = express();

app.listen(3000, () => {
    // Start it with node src/app.js
    console.log('Server listening on port 3000...');
})