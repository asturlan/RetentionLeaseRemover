const tryRequireConfig = () => {
    try {
        return require('./config.json');
    } catch (err) {
        return null;
    }
};

const config = tryRequireConfig();

if (config) {
    Object.keys(config).forEach(key => {
        process.env[key] = config[key];
    });
} else {
    console.log('\x1b[36m', 'config.json not found' ,'\x1b[0m');
}