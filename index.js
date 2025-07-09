import express from 'express';
import userRoutes from './src/routes/user.routes.js';
import postRoutes from './src/routes/post.routes.js';
import riddlesRoutes from './src/routes/riddles.routes.js';

const app = express();
app.use(express.json());

// users routes
app.use('/users', userRoutes);

//posts routes
app.use('/posts', postRoutes);

app.use('/riddles', riddlesRoutes)

// Error handling middleware
app.use((req, res) => {
    res.status(404).send('Not found');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});