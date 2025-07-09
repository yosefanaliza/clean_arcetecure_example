import express from 'express';
import userRoutes from './routes/user.routes.js';
import postRoutes from './routes/post.routes.js';

const app = express();
app.use(express.json());

app.use('/users', userRoutes);
app.use('/posts', postRoutes);

app.use((req, res) => {
    res.status(404).send('Not found');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// fetch("http://localhost:8080/users")
// fetch("http://localhost:8080/posts")
// fetch("http://localhost:8080/places")

// users

// GET
// POST
// UPDATE
// DELETE