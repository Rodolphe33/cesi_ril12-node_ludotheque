const fs = require('fs');
const path = require('path');
const {
    execSync
} = require('child_process');

const build = async (projectName) => {
    const projectPath = path.join(__dirname,"clones", projectName);
    const srcDockerfilePath = path.join(__dirname,'..', '..', 'docker', 'Dockefile');
    const dockerfilePath = path.join(projectPath, "Dockerfile");

    // fs.copyFileSync(`..${path.sep}docker${path.sep}Dockerfile`, dockerfilePath);
    fs.copyFileSync(srcDockerfilePath, dockerfilePath);
    execSync(
        `docker build -t ${projectName} ${projectPath} --no-cache`, {
            stdio: 'inherit'
        }
    );
};

module.exports = build;