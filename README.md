# Node.js tool for deleting leases from pipeline builds
The tool goes trough each pipeline run and deletes leases that retain build. You can delete the pipeline normally afterwards.

## How to use

create and edit config/config.json with following parameters:

{
    "BASE_API_URL": https://{organization}/{project}/_apis
    "PAT": "{your_full_access_PAT}",
    "USERNAME": "{your_username}",
    "BUILD_DEFINITION_ID": "{number}"
}

notes:
- Create a PAT with full access in Azure Devops -> User settings -> Personal access tokens
- Build definition id can be found in URL when you open the pipeline in Azure Devops (definitionId)

## How to run

npm run start
