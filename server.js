const express = require('express');
const errorHandler = require('./middleware/errorhandler');
const app = express();
const PORT = process.env.PORT || 8000;

// Middleware to parse JSON request bodies
app.use(express.json());
app.use("/api/contacts", require('./routes/contactRoutes'));
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));