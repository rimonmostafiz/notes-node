# Notes Node
A node js application to save notes in file system.

### Getting Started

#### Prerequisites
- node js: 10.6.0
- yargs: 4.7.1

#### Installing
```
npm install
```

#### Commands
```
node app.js --help

node app.js add --help

node app.js read --help

node app.js remove --help
```

##### Example
  * **add:** Add new note
    * `node app.js add -t='some title' -b='some body'`
  * **list:** Print all note
    * `node app.js list`
  * **read:** Read a note
    * `node app.js read -t='some title'`
  * **remove:** Remove a note
    * `node app.js remove -t='some title'`

### Author
- **Rimon Mostafiz**

### License
This project is licensed under the MIT License