# shevchenko.js military extension

[shevchenko.js](https://github.com/tooleks/shevchenko-js) extension for declension of Ukrainian military ranks and appointments.

## User Guide

### Installation

#### npm

To install the library using [npm](https://docs.npmjs.com) package manager, use the following command:

```bash
npm install --save shevchenko@^3.1.0 shevchenko-ext-military
```

### Import

The extension comes in two formats: CommonJS module and ECMAScript module. You can select the format that best suits your needs.

#### CommonJS

To import the extension as a CommonJS module, use the following code:

```JavaScript
const { militaryExtension } = require('shevchenko-ext-military');
```

#### ECMAScript

To import the extension as an ECMAScript module, use the following code:

```JavaScript
import { militaryExtension } from 'shevchenko-ext-military';
```

### Use Cases

#### Military rank and appointment declension

```JavaScript
const shevchenko = require('shevchenko');
const { militaryExtension } = require('shevchenko-ext-military');

shevchenko.registerExtension(militaryExtension);

async function main() {
  const input = {
    gender: 'masculine',
    militaryRank: 'солдат',
    militaryAppointment: 'помічник гранатометника',
    familyName: 'Шевченко',
    givenName: 'Тарас',
    patronymicName: 'Григорович',
  };

  const output = await shevchenko.inGenitive(input);

  console.log(output); // { militaryRank: "солдата", militaryAppointment: "помічника гранатометника", familyName: "Шевченка", givenName: "Тараса", patronymicName: "Григоровича" }
}

main().catch((error) => console.error(error));
```
