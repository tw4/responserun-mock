# responserun-mock

## Overview

`responserun-mock` is a simple TypeScript library that allows developers to generate Turkish names. It provides functions for creating random Turkish male and female first names.

## Installation
```
npm install --save-dev responserun-mock
```

## example

```javascript
const { createMaleFirstName, Locale, multipleRandomizer } = require('responserun-mock');


const turkishMaleName = createMaleFirstName(Locale.tr);

// multiple create object
const random = multipleRandomizer(
  () => ({
    name: createMaleFirstName(Locale.tr),
  }),
    5
  );

console.log(`Random Turkish Male Name: ${turkishMaleName}`);
console.log(random);
```

### jsx example
```javascript
mport { useEffect, useState } from "react";
import {
  Locale,
  createAddress,
  createFemaleFirstName,
  createSurname,
  generateUuid4,
  multipleRandomizer,
} from "responserun-mock";

interface User {
  id: string;
  name: string;
  surname: string;
  address: string;
}

const TestPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const userList = multipleRandomizer(
      () => ({
        id: generateUuid4(),
        name: createFemaleFirstName(Locale.tr),
        surname: createSurname(Locale.tr),
        address: createAddress(Locale.tr),
      }),
      5
    );
    setUsers(userList);
  }, []);

  return (
    <div className="p-2">
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              {user.name} {user.surname}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TestPage;
```

## Wiki

For more information, please check our [Wiki page](https://github.com/responserun/responserun-mock/wiki).


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



## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
