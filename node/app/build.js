const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const build = async (projectName) => {
    const projectPath = path.join("clones", projectName);
    const dockerfilePath = path.join(projectPath, "Dockerfile");

    fs.copyFileSync(`..${path.sep}docker${path.sep}Dockerfile`, dockerfilePath);
    execSync(
        `docker build -t ${projectName} ${projectPath} --no-cache`,
        { stdio: 'inherit' }
    );
};

module.exports = build;