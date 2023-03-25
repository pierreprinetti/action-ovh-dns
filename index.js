import { getInput, setOutput, setFailed } from '@actions/core';
import { readFile } from 'node:fs/promises';
import ovh from 'ovh';

try {
	const zoneName = getInput('zone-name');
	const zoneFile = getInput('zone-file');
	const client = ovh({
		appKey: process.env.OVH_APP_KEY,
		appSecret: process.env.OVH_APP_SECRET,
		consumerKey: process.env.OVH_CONSUMER_KEY,
	});
	const zoneData = await readFile(zoneFile, { encoding: 'utf8' });
	const response = await client.requestPromised('POST', `/domain/zone/${zoneName}/import`, { zoneFile: zoneData });
	setOutput("response", response)
} catch (err) {
	setFailed(err.message)
}
