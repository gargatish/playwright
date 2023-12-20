# playWright Installation
|
|_____npm install playwright typescript ts-node --save-dev

# Installation of different brower 
 |____ npm init playwright@latest -- --quiet --browser=chromium --browser=firefox --browser=webkit

# Installation of All Dependency 
|
|____ npm install / npm i

# Folder Structure 
|
|____ Playwright
        |
        |____ Support ____ POM (This folder has all the page files )
        |
        |____ testData (This folder has all the test data file)
        |
        |____ tests(This Folder is set to default Directory for running Test)
        |
        |____ playwright-report (This folder contains the test report in html format )
|
|____ Package.json (this has all the dependency)
|
|____ Playwright.congig.ts (To make test setup, we need to follow up here.)

# Running Playwright Test
|
|____ npx playwright test --project firefox (after project please use the browser name)