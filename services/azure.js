const axios = require('axios');

const headers = {
    Authorization: `Basic ${Buffer.from(process.env.USERNAME + ':' + process.env.PAT).toString('base64')}`
}

const getAllBuilds = async () => {
    const params = { 
        "definitions": process.env.BUILD_DEFINITION_ID, 
        "statusFilter": "completed", 
        "api-version": "6.0" 
    };

    try {
        const res = await axios.get(
            `${process.env.BASE_API_URL}/build/builds`, { headers, params }
        );
        return res.data.value;
    } catch (e) {
        console.log(e.message)
    }
}

const getBuildLeases = async buildID => {
    const params = {
        'api-version': '7.1-preview.1'
    }

    try {
        const res = await axios.get(
            `${process.env.BASE_API_URL}/build/builds/${buildID}/leases`, { headers, params }
        );
        return res.data.value;
    } catch (e) {
        console.log(e.message);
    }
}

const deleteBuildLease = async leaseID => {
    const params = {
        'api-version': '6.1-preview.1'
    }

    try {
        await axios.delete(
            `${process.env.BASE_API_URL}/build/retention/leases?ids=${leaseID}`, { headers, params }
        );
    } catch (e) {
        console.log(e.message);
    }
}

module.exports = {
    getAllBuilds,
    getBuildLeases,
    deleteBuildLease
}