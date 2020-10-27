import routing from "../../routing.config";

const getIp = () => {
    let ip = "localhost";
    const { networkInterfaces } = require("os");
    const nets = networkInterfaces();
    nets && Object.keys(nets).map(netName => {
        let net = nets[netName];
        net && net.map(network => {
            if (network.family === "IPv4" && !network.internal) {
                ip = network.address
            }
        });
    });
    return ip;
}

const log = () => {
    process.env.NODE_ENV === "development" ?
        console.log(`Click for open project http://${getIp()}:${routing.port}`) :
        console.log(`Server run on port ${routing.port}`);
}

export default log;
