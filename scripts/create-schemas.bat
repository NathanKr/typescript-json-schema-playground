call npx typescript-json-schema ..\src\interfaces\IPerson.ts IPerson --out ..\src\schemas\IPerson.schema.json --required 
call npx typescript-json-schema ..\src\interfaces\IQuizFromServer.ts IQuizFromServer --out ..\src\schemas\IQuizFromServer.schema.json --required 
call npx typescript-json-schema ..\src\types\UnionType.ts UnionType --out ..\src\schemas\UnionType.schema.json --required 