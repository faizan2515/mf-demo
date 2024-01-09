const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Get the list of directories in the root folder
const rootDir = path.resolve(__dirname, ".."); // Assuming this script is in the 'scripts' folder
const directories = fs
  .readdirSync(rootDir, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);

// Build an array of commands for concurrently
const commands = directories
  .map((directory) => {
    const packageJsonPath = path.join(rootDir, directory, "package.json");
    if (fs.existsSync(packageJsonPath)) {
      return `"cd ${directory} && yarn && yarn start"`;
    } else {
      console.log(`Skipping ${directory} - no package.json found.`);
      return null;
    }
  })
  .filter((command) => command !== null);

// Run the commands concurrently
if (commands.length > 0) {
  const commandString = commands.join(" ");
  execSync(`concurrently --kill-others ${commandString}`, {
    stdio: "inherit",
    cwd: rootDir
  });
} else {
  console.log("No projects to start.");
}
