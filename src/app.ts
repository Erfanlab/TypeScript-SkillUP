// Import required modules
import express, { Request, Response } from 'express';

// Create an instance of the Express application
const app = express();
const PORT = 3001;

// Middleware to parse JSON bodies
app.use(express.json());

// Define a basic route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, my name is erfan labbafi !');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});