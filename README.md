<h2>Motivation</h2>
Experiment with typescript-json-schema to create a JSON schema. This will be used by JSON schema validator like ajv to validate dynamically an interface-based object : js object e.g. request in express server or react-quiz object in react app. 


<h2>Installation</h2>

```
npm i
```

<h2>Usage</h2>
<ul>

<li>
Create an interface . here we have also @maximum @minimum annotation (docs ??)

```ts
interface IPet {
    name: string;
    /**
     * @minimum 1
     * @maximum 100
     */
    legs: number;
  }
  
  export default interface IPerson {
    name: string;
    age?: number;
    pets: IPet[];
  }
```

</li>

<li>
Create a schema for specific interface - IPerson from a specific file .\src\IPerson.ts and put the schema in IPerson.schema.json

```
npx typescript-json-schema .\src\IPerson.ts IPerson --out IPerson.schema.json
```
</li>


<li>
The created schema 

```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "definitions": {
        "IPet": {
            "properties": {
                "legs": {
                    "maximum": 100,
                    "minimum": 1,
                    "type": "number"
                },
                "name": {
                    "type": "string"
                }
            },
            "type": "object"
        }
    },
    "properties": {
        "age": {
            "type": "number"
        },
        "name": {
            "type": "string"
        },
        "pets": {
            "items": {
                "$ref": "#/definitions/IPet"
            },
            "type": "array"
        }
    },
    "type": "object"
}

```
</li>

<li>
Now you can use the schema on IPerson object that you got externally
</li>

</ul>



<h2>Points of interest</h2>
<ul>
<li>Currently, only JSON schema is created and it is not used with ajv . for samples using ajv check <a href='https://github.com/NathanKr/json-schema-validator-js-playground'>here</a></li>
<ul>
