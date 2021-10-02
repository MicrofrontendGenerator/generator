installedModulePath=$(npm root -g)/microfrontend-generator
starterProjectPath=$installedModulePath/templates/$projectType/
mkdir $projectTitle
cd $projectTitle
initiatedProjectPath=`pwd`

cd $(npm root -g)/microfrontend-generator
npx hygen container-generator package-generator $generatorPayload --initiatedProjectPath=$initiatedProjectPath
npx hygen container-generator html-title-generator $generatorPayload --initiatedProjectPath=$initiatedProjectPath

echo Copying starter project ...
cp -r $starterProjectPath $initiatedProjectPath
echo ${projectTitle} has been created successfully
echo Installing ${projectTitle} dependancies ..
cd $initiatedProjectPath
yarn install
echo "${projectTitle} is ready! to run the project kindly use command"
echo "cd ${projectTitle} && yarn start"