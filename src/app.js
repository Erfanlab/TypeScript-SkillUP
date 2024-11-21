"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import required modules
const express_1 = __importDefault(require("express"));
// Create an instance of the Express application
const app = (0, express_1.default)();
const PORT = 3000;
// Middleware to parse JSON bodies
app.use(express_1.default.json());
// Define a basic route
app.get('/', (req, res) => {
    res.send('Hello, TypeScript with Express!');
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
