# automationForValidation

run tests: 
> npx wdio run ./wdio.conf.js 
(or)
> npx wdio
(or)
Run individual File:
> npx wdio wdio.conf.js --spec ./test/specs/audio.player.specs.js

Jenkins Integration:

1- Select the github repo
2- Add the batch command to install the required npm packages: npm install
3- Add the batch command to run the test [use any command specifed above]
4- Post build action- publish Junit report - report/*xml

Generate Allure Report: [Integrate with jenkins by installing the allure plugin]
> allure generate allure-results --clean

Open the allure report:
> allure open

 