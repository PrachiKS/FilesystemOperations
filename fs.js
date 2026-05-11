const fs = require('fs').promises;

async function manageFiles() {
  const fileName = 'example.txt';
  const newFileName = 'renamed_example.txt';

  try {
    // 1. Create a new file and write data to it
    await fs.writeFile(fileName, 'Hello, this is some initial data!');
    console.log(`Created and wrote to ${fileName}`);

    // 2. Read and display the contents of the file
    const data = await fs.readFile(fileName, 'utf8');
    console.log(`File contents: ${data}`);

    // 3. Rename the file
    await fs.rename(fileName, newFileName);
    console.log(`Renamed ${fileName} to ${newFileName}`);

    // 4. Delete the file
    await fs.unlink(newFileName);
    console.log(`Deleted ${newFileName}`);

  } catch (error) {
    // 5. Handle errors
    console.error('An error occurred during file operations:', error.message);
  }
}

manageFiles();
