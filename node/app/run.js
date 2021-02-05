const fs = require('fs');
const getPort = require('get-port');
const path = require('path');
const { execSync } = require('child_process');

const isAngular = (projectName) => {
    const packageJsonPath = path.join("clones", projectName, "package.json");
    const packageJson = fs.readFileSync(packageJsonPath, "utf8");
    const dependencies = JSON.parse(packageJson).dependencies;

    return Object.keys(dependencies).some(dep => /angular/.test(dep));
};

const run = async (projectName) => {
    const {
        hostPort,
        containerPort
    } = await getDockerPorts(projectName);
    execSync(`docker stop ${projectName} || true`)
    execSync(
        `docker run -d --rm -p ${hostPort}:${containerPort} --name ${projectName} ${projectName}`,
        { stdio: 'inherit' }
    );
    return hostPort;
}

const getDockerPorts = async (project) => {
    const hostPort = await getPort();
    const containerPort = isAngular(project) ? 4200 : 3000;

    return {
        hostPort,
        containerPort,
    }
}

module.exports = run;