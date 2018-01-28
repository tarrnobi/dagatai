# Dagata.io
Dagatal is the Icelandic word for calendar. Whilst stuck in some unseasonably cold and snowy weather, I decided that it would be a great excuse to look at the MERN stack in Node.js; to develop a simple calendar application that can pull and save data with different templates to a Mongo Database.

Second to this, It was another excuse to look at how 'proper' testing with React works. This project uses a combination of what the react-test-renderer package offers (mostly Jest), along with extra functionality from Enzyme.

## Installation
Fork/Clone the repository as required and install the dependencies using:
`npm install`

copy the values in `.sample-env` to your own `.env` file or run `node setup.js` which will do this for you.

Fill in the details as required. You will need access to a MongoDB instance. I used mLab.

* `API_PORT`: The port you want express to run on
* `DB_USER` : The database username
* `DB_PASSWORD`: The database password
* `DB_INSTANCE`: the unique instance details for your mongo DB
* `REACT_APP_API_HOST`: The server URL.

Example:
```
API_PORT = 3001
DB_USER  = dagatai_dba
DB_PASSWORD = <yourpassword>
DB_INSTANCE = <yourinstance>.mlab.com:<yourport>/dagatai
REACT_APP_API_HOST = http://localhost:3001
```

To run the project: `npm run start-dev`

To test it: `npm test`
