// Import the necessary modules
import express from 'express';
import { convert } from './convert';

// Create an express app
const app = express();

// Set up the '/convert' route to handle file conversion requests
app.post('/convert', function(req, res) {
  convert(req.body.file, req.body.format, function(err, convertedFile) {
    if (err) {
      // Handle the error
      res.status(500).send(err);
    } else {
      // Send the converted file back to the client
      res.send(convertedFile);
    }
  });
});

// Start the server
app.listen(5500, function() {
  console.log('Server listening on port 5500');
});

