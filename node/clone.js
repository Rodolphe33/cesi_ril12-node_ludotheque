const gitCloner = require('git-cloner');

gitCloner(
    ['https://github.com/SamuelBagattin/morpio'],
    {
        dest: `${__dirname}/clones`,
        urlType: 'https'
    },
    (err, data) => {
        console.log(err || data.__dirname);
    }
);

module.exports = gitCloner;