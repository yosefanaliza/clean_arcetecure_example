import express from 'express';
import userRoutes from './src/routes/user.routes.js';
import postRoutes from './src/routes/post.routes.js';

const app = express();
app.use(express.json());

// users routes
app.use('/users', userRoutes);

//posts routes
app.use('/posts', postRoutes);

// Error handling middleware
app.use((req, res) => {
    res.status(404).send('Not found');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});