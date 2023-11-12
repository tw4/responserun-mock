# responserun-mock

## Overview

`responserun-mock` is a simple TypeScript library that allows developers to generate Turkish names. It provides functions for creating random Turkish male and female first names.

## Tests

The project includes a suite of tests. To ensure they run successfully, use the following command:

```bash
npm test
```

Additionally, to check code coverage, you can use the following command:

```bash
npm run coverage
```

This command generates a coverage report indicating how much of the code is covered by the tests. You can access the detailed report [here](https://responserun.github.io/responserun-mock/)

## Installation
```
npm install responserun-mock
```

## example

```javascript
const { createMaleFirstName, createFemaleFirstName, Locale } = require('responserun-mock');

const turkishMaleName = createMaleFirstName(Locale.tr);

console.log(`Random Turkish Male Name: ${turkishMaleName}`);
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
