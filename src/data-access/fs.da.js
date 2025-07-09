// File system-based CRUD operations for a JSON file database

const FILE_PATH = './lib/db.txt';

// Helper to read JSON file
export function readItems() {
    try {
        if (!fs.existsSync(FILE_PATH)) return [];
        const data = fs.readFileSync(FILE_PATH, 'utf-8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading file:', err);
        return [];
    }
}

// Helper to write JSON file
export function writeItems(items) {
    try {
        fs.writeFileSync(FILE_PATH, JSON.stringify(items, null, 2), 'utf-8');
    } catch (err) {
        console.error('Error writing file:', err);
    }
}