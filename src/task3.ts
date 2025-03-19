import * as fs from 'fs';
import * as path from 'path';

// File path for operations
const filePath = path.join(__dirname, 'example.txt');
console.log(filePath);
//Synchronous File Operations
function createFileSync() {
  try {
    fs.writeFileSync(filePath, 'Hello, this is a file created synchronously!');
    console.log('File created successfully (Sync)');
  } catch (err) {
    console.error('Error creating file (Sync):', err);
  }
}

// Read a file
function readFileSync() {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    console.log('File content (Sync):', data);
  } catch (err) {
    console.error('Error reading file (Sync):', err);
  }
}

// Update a file
function updateFileSync() {
  try {
    fs.appendFileSync(filePath, '\nAppended text (Sync)');
    console.log('File updated successfully (Sync)');
  } catch (err) {
    console.error('Error updating file (Sync):', err);
  }
}

// Delete a file 
function deleteFileSync() {
  try {
    fs.unlinkSync(filePath);
    console.log('File deleted successfully (Sync)');
  } catch (err) {
    console.error('Error deleting file (Sync):', err);
  }
}

// === Asynchronous File Operations ===

// Create or write to a file (asynchronously)
function createFileAsync() {
  fs.writeFile(filePath, 'Hello, this is a file created asynchronously!', (err) => {
    if (err) {
      console.error('Error creating file (Async):', err);
    } else {
      console.log('File created successfully (Async)');
    }
  });
}

// Read a file (asynchronously)
function readFileAsync() {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.error('Error reading file (Async):', err);
    } else {
      console.log('File content (Async):', data);
    }
  });
}

// Update a file (asynchronously)
function updateFileAsync() {
  fs.appendFile(filePath, '\nAppended text (Async)', (err) => {
    if (err) {
      console.error('Error updating file (Async):', err);
    } else {
      console.log('File updated successfully (Async)');
    }
  });
}

// Delete a file (asynchronously)
function deleteFileAsync() {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error('Error deleting file (Async):', err);
    } else {
      console.log('File deleted successfully (Async)');
    }
  });
}

//  Stream File Operations

// Create or write to a file using streams
function createFileStream() {
  const writeStream = fs.createWriteStream(filePath);
  writeStream.write('Hello, this is a file created using streams!');
  writeStream.end();
  writeStream.on('finish', () => {
    console.log('File created successfully using streams');
  });
  writeStream.on('error', (err) => {
    console.error('Error creating file using streams:', err);
  });
}

// Read a file using streams
function readFileStream() {
  const readStream = fs.createReadStream(filePath, 'utf-8');
  readStream.on('data', (chunk) => {
    console.log('File content (Stream):', chunk);
  });
  readStream.on('error', (err) => {
    console.error('Error reading file using streams:', err);
  });
}

// Update a file using streams (appending data)
function updateFileStream() {
  const writeStream = fs.createWriteStream(filePath, { flags: 'a' });
  writeStream.write('\nAppended text using streams');
  writeStream.end();
  writeStream.on('finish', () => {
    console.log('File updated successfully using streams');
  });
  writeStream.on('error', (err) => {
    console.error('Error updating file using streams:', err);
  });
}

// Delete a file using streams (Note: streams don't have a direct method for deletion, so we use unlink here)
function deleteFileStream() {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error('Error deleting file using streams:', err);
    } else {
      console.log('File deleted successfully (Stream method)');
    }
  });
}

// === Example Usage ===

// Synchronous Operations
createFileSync();
readFileSync();
updateFileSync();
deleteFileSync();

// Asynchronous Operations
createFileAsync();
setTimeout(() => {
  readFileAsync();
  updateFileAsync();
  deleteFileAsync();
}, 1000);

// Stream Operations
createFileStream();
setTimeout(() => {
  readFileStream();
  updateFileStream();
  deleteFileStream();
}, 1000);
