# Import a DNS zone to an OVH domain

This action uploads a zone file to an OVH DNS zone.

## Inputs

### `zone-file`

**Required** The file containing the DNS zone.

### `zone-name`

**Required** The name of the domain zone.

### OVH application credentials

Head to the [OVH API token creation
page](https://eu.api.ovh.com/createToken/index.cgi?GET=/*&PUT=/*&POST=/*&DELETE=/*)
and generate a set of credentials. Then add the application key, the
application secret and the consumer key to your repository settings (under
`https://github.com/<organisation>/<repository>/settings/secrets/actions`). In
the example below, I use `OVH_APP_KEY`, `OVH_APP_SECRET` and `OVH_CONSUMER_KEY`
respectively.

## Outputs

### `response`

The API server response. Will likely be in this form:
```json
{
  "todoDate": "2023-03-24T09:23:26+01:00",
  "function": "ZoneImport",
  "canCancel": false,
  "canRelaunch": false,
  "lastUpdate": "2023-03-24T09:23:26+01:00",
  "status": "todo",
  "creationDate": "2023-03-24T09:23:26+01:00",
  "id": 356742835,
  "canAccelerate": false,
  "comment": null,
  "doneDate": null
}
```

## Example usage

```yaml
uses: pierreprinetti/action-ovh-dns-import@main
env:
  OVH_APP_KEY: ${{ secrets.OVH_APP_KEY }}
  OVH_APP_SECRET: ${{ secrets.OVH_APP_SECRET }}
  OVH_CONSUMER_KEY: ${{ secrets.OVH_CONSUMER_KEY }}
with:
  zone-file: path-to/your-zone.txt
  zone-name: your-domain-name.tld
```
