const express = require('express');
const app = express();
const helloRouter = require('./routes/hello');
const authRouter = require('./routes/auth');
const serviceRoute = require('./routes/servicesRoute');
const fullBodyRoute = require('./routes/fullBodyRoute');  
const fetchRestaurantItemsRoute = require('./routes/fetchRestaurantItems');
const amenityFetchRoute = require('./routes/amenityFetchRoute');
const cors = require('cors');


app.use(express.json());

app.use(cors());
app.use('/api/hello', helloRouter);
app.use('/api/auth', authRouter);
app.use('/api/services', serviceRoute );
app.use('/api/fullbody', fullBodyRoute );
app.use('/api', fetchRestaurantItemsRoute);
app.use('/api/amenity', amenityFetchRoute);

// quick health / debug endpoint
app.get('/api/ping', (req, res) => res.status(200).json({ success: true, message: 'pong' }));


const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
// hello world endpoint
module.exports = app;
