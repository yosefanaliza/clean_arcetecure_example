# Node App JS

A modular Node.js application for managing users, posts, players, and riddles using a simple file-based database. The project demonstrates clean separation of concerns with controllers, services, and data-access layers.

## Features
- User CRUD operations with validation, filtering, and sorting
- Post creation and retrieval
- Player and riddle management (extensible)
- File-based persistence (no external database required)
- Modular code structure for scalability

## Project Structure
```
node_app_js/
├── index.js                 # Entry point, HTTP server
├── package.json             # Project metadata and scripts
├── controllers/             # Request handlers for each resource
│   ├── posts.controllers.js
│   └── users.controllers.js
├── data-access/             # File-based data access logic
│   ├── fs.da.js             # Shared file read/write helpers
│   ├── player.da.js         # Player data access
│   ├── post.da.js           # Post data access
│   ├── riddle.da.js         # Riddle data access
│   └── user.da.js           # User data access
├── lib/
│   ├── db.txt               # User data (JSON)
│   └── posts.txt            # Post data (JSON)
├── models/                  # Domain models
│   └── User.js
├── routes/                  # Route handlers
│   ├── post.routes.js
│   ├── router.js
│   └── user.routes.js
├── services/                # Business logic
│   ├── post.services.js
│   └── user.services.js
└── utils/                   # Utility functions
    ├── db.js
    ├── logger.js
    └── time.js
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)

### Installation
1. Clone the repository or download the source code.
2. Install dependencies:
   ```sh
   npm install
   ```

### Running the App
To start the application:
```sh
npm start
```
Or for development with auto-reload (requires `nodemon`):
```sh
npm run dev
```

## API Overview

### Users
- `GET /users` — List all users
- `POST /users` — Create a new user
- `PUT /users` — Update a user (extendable)
- `DELETE /users` — Delete a user (extendable)

### Posts
- `GET /posts` — List all posts
- `POST /posts` — Create a new post

### Players & Riddles
- Data-access and model layers provided for extension

## Code Overview
- **controllers/**: Handle HTTP requests and responses
- **services/**: Business logic, validation, and data processing
- **data-access/**: File-based CRUD operations
- **models/**: Domain models (e.g., User)
- **routes/**: Route dispatchers for each resource
- **utils/**: Utility functions (timing, logging, etc.)

## License
ISC
