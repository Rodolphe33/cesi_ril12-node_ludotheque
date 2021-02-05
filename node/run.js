const {
    execSync
} = require('child_process');
const path = require('path');
const fs = require('fs');
const getPort = require('get-port');


const isAngular = (project) => {
    const projectPath = `clones${path.sep}${project}${path.sep}`;
    const packageJson = fs.readFileSync(`${projectPath}package.json`, 'utf8');
    const dependencies = JSON.parse(packageJson).dependencies;

    return Object.keys(dependencies).some(dep => /angular/.test(dep));
};

const run = async (project) => {
    const {
        hostPort,
        containerPort
    } = await getDockerPorts(project);
    console.log(hostPort);
    execSync(`docker stop ${project} || true`)
    execSync(`docker run -d --rm -p ${hostPort}:${containerPort} --name ${project} ${project}`, {
        stdio: 'inherit'
    });
}

const getDockerPorts = async (project) => {
    const hostPort = await getPort();
    const containerPort = isAngular(project) ? 4200 : 3000;

    return {
        hostPort,
        containerPort,
    }
}

run('morpio');

module.exports = run;