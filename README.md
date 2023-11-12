# responserun-mock

## Overview

`responserun-mock` is a simple TypeScript library that allows developers to generate Turkish names. It provides functions for creating random Turkish male and female first names.

## Installation
```
npm install responserun-mock
```

```javascript
const { createMaleFirstName, createFemaleFirstName, Locale } = require('responserun-mock');

const turkishMaleName = createMaleFirstName(Locale.tr);

console.log(`Random Turkish Male Name: ${turkishMaleName}`);
```

## API
Generates a random Turkish male first name.

- `locale`: The language/locale for the generated name. Currently, only 'tr' (Turkish) is supported.

### `createMaleFirstName(locale: locale): string`

Generates a random Turkish male first name.

- `locale`: The language/locale for the generated name. Currently, only 'tr' (Turkish) is supported.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
