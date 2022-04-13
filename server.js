require("./config/config");
const { getAllBuilds, getBuildLeases, deleteBuildLease } = require('./services/azure');

const app = async () => {

    const builds = await getAllBuilds();

    builds.forEach( async build => {
        if(build.retainedByRelease) {
            const leases = await getBuildLeases(build.id);

            leases.forEach(async lease => {
                if(lease.protectPipeline === true) await deleteBuildLease(lease.leaseId);
            });
        }
    });

    console.log('Protect pipeline retention leases deleted successfully');
}

app();

