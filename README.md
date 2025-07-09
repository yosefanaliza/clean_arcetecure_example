# Node App JS

A modular Node.js application for managing users, posts, players, and riddles using a simple file-based database. The project demonstrates clean separation of concerns with controllers, services, and data-access layers.

## Layered Architecture

### 1. Routes
Defines the HTTP endpoints and maps them to controller functions. Each resource (users, posts, etc.) has its own Express router for clean separation.

### 2. Controllers
Handle incoming HTTP requests, call the appropriate service functions, and send responses. Controllers are responsible for request/response logic and error handling.

### 3. Services
Contain the business logic, validation, and data processing for each resource. Services act as an intermediary between controllers and data-access, ensuring data integrity and applying business rules.

### 4. Data-Access
Responsible for reading and writing data to the file system (or database). Data-access modules provide CRUD operations for each resource, using shared helpers for file operations.

### 5. Models
Define the structure and behavior of domain entities (e.g., User, Player). Models are used to create and manipulate resource objects throughout the app.

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
