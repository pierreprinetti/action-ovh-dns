const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs/promises');

const zoneFile = core.getInput('zone-file');
const zoneName = core.getInput('zone-name');

var ovh = require('ovh')({
	appKey: process.env.OVH_APP_KEY,
	appSecret: process.env.OVH_APP_SECRET,
	consumerKey: process.env.OVH_CONSUMER_KEY
});

fs.readFile(zoneFile, { encoding: 'utf8' }).then(zoneData => {
	ovh.requestPromised('POST', `/domain/zone/${zoneName}/import`, { zoneFile: zoneData })
		.then(response => {core.setOutput("response", response)})
		.catch(err => { core.setFailed(err.message)})
}).catch(err => { core.setFailed(err.message)})
