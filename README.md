# swagger
Swagger UI / API

## Run Commands
- _component_ is the parent directory where the test specs live.
- _testcase_ is the individual test case you want to run.

If you want to run a single test use a single component and test case, if you want to run all
the tests in a component you can leave the _TESTCASE_ field empty or to run everything you can
leave both the _COMPONENT_ and _TESTCASE_ fields empty.

To run tests enter _COMPONENT_ and _TESTCASE_ in terminal where the repo lives.

## CLI commands
### Login
- Appearance: COMPONENT=login TESTCASE=appearance npm run wdio
- Invalid: COMPONENT=login TESTCASE=invalid npm run wdio
- Login: COMPONENT=login TESTCASE=login npm run wdio
- All Login Tests: COMPONENT=login TESTCASE= npm run wdio
### Products
- addRemoveCart: COMPONENT=products TESTCASE=addRemoveCart npm run wdio
- Appearance: COMPONENT=products TESTCASE=appearance npm run wdio
- Menu: COMPONENT=products TESTCASE=menu npm run wdio
- Sort: COMPONENT=products TESTCASE=sort npm run wdio
- All Products Tests: COMPONENT=products TESTCASE= npm run wdio
### e2e
- e2e: COMPONENT=e2e TESTCASE=e2e npm run wdio
