const {
    execSync
} = require('child_process');
const path = require('path');
const fs = require('fs');

const build = (project) => {
    const projectPath = `clones${path.sep}${project}${path.sep}`;
    const dockerFile = `${projectPath}Dockerfile`;

    fs.copyFileSync(`..${path.sep}docker${path.sep}Dockerfile`, dockerFile);
    execSync(`docker build -t ${project} ${projectPath} --no-cache`, {
        stdio: 'inherit'
    });
}
build('morpio');
module.exports = build;