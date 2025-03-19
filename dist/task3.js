"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
// File path for operations
const filePath = path.join(__dirname, 'example.txt');
console.log(filePath);
//Synchronous File Operations
function createFileSync() {
    try {
        fs.writeFileSync(filePath, 'Hello, this is a file created synchronously!');
        console.log('File created successfully (Sync)');
    }
    catch (err) {
        console.error('Error creating file (Sync):', err);
    }
}
// Read a file
function readFileSync() {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        console.log('File content (Sync):', data);
    }
    catch (err) {
        console.error('Error reading file (Sync):', err);
    }
}
// Update a file
function updateFileSync() {
    try {
        fs.appendFileSync(filePath, '\nAppended text (Sync)');
        console.log('File updated successfully (Sync)');
    }
    catch (err) {
        console.error('Error updating file (Sync):', err);
    }
}
// // Delete a file 
// function deleteFileSync() {
//   try {
//     fs.unlinkSync(filePath);
//     console.log('File deleted successfully (Sync)');
//   } catch (err) {
//     console.error('Error deleting file (Sync):', err);
//   }
// }
// // === Asynchronous File Operations ===
// // Create or write to a file (asynchronously)
// function createFileAsync() {
//   fs.writeFile(filePath, 'Hello, this is a file created asynchronously!', (err) => {
//     if (err) {
//       console.error('Error creating file (Async):', err);
//     } else {
//       console.log('File created successfully (Async)');
//     }
//   });
// }
// // Read a file (asynchronously)
// function readFileAsync() {
//   fs.readFile(filePath, 'utf-8', (err, data) => {
//     if (err) {
//       console.error('Error reading file (Async):', err);
//     } else {
//       console.log('File content (Async):', data);
//     }
//   });
// }
// // Update a file (asynchronously)
// function updateFileAsync() {
//   fs.appendFile(filePath, '\nAppended text (Async)', (err) => {
//     if (err) {
//       console.error('Error updating file (Async):', err);
//     } else {
//       console.log('File updated successfully (Async)');
//     }
//   });
// }
// // Delete a file (asynchronously)
// function deleteFileAsync() {
//   fs.unlink(filePath, (err) => {
//     if (err) {
//       console.error('Error deleting file (Async):', err);
//     } else {
//       console.log('File deleted successfully (Async)');
//     }
//   });
// }
// //  Stream File Operations
// // Create or write to a file using streams
// function createFileStream() {
//   const writeStream = fs.createWriteStream(filePath);
//   writeStream.write('Hello, this is a file created using streams!');
//   writeStream.end();
//   writeStream.on('finish', () => {
//     console.log('File created successfully using streams');
//   });
//   writeStream.on('error', (err) => {
//     console.error('Error creating file using streams:', err);
//   });
// }
// // Read a file using streams
// function readFileStream() {
//   const readStream = fs.createReadStream(filePath, 'utf-8');
//   readStream.on('data', (chunk) => {
//     console.log('File content (Stream):', chunk);
//   });
//   readStream.on('error', (err) => {
//     console.error('Error reading file using streams:', err);
//   });
// }
// // Update a file using streams (appending data)
// function updateFileStream() {
//   const writeStream = fs.createWriteStream(filePath, { flags: 'a' });
//   writeStream.write('\nAppended text using streams');
//   writeStream.end();
//   writeStream.on('finish', () => {
//     console.log('File updated successfully using streams');
//   });
//   writeStream.on('error', (err) => {
//     console.error('Error updating file using streams:', err);
//   });
// }
// // Delete a file using streams (Note: streams don't have a direct method for deletion, so we use unlink here)
// function deleteFileStream() {
//   fs.unlink(filePath, (err) => {
//     if (err) {
//       console.error('Error deleting file using streams:', err);
//     } else {
//       console.log('File deleted successfully (Stream method)');
//     }
//   });
// }
// === Example Usage ===
// Synchronous Operations
createFileSync();
readFileSync();
//updateFileSync();
//deleteFileSync();
// // Asynchronous Operations
// createFileAsync();
// setTimeout(() => {
//   readFileAsync();
//   updateFileAsync();
//   deleteFileAsync();
// }, 1000);
// // Stream Operations
// createFileStream();
// setTimeout(() => {
//   readFileStream();
//   updateFileStream();
//   deleteFileStream();
// }, 1000);
