import http from 'http';
import { router } from './routes/router';

http.createServer(router).listen(8080);

// fetch("http://localhost:8080/users")
// fetch("http://localhost:8080/posts")
// fetch("http://localhost:8080/places")

// users

// GET
// POST
// UPDATE
// DELETE