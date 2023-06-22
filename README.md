To access and explore the project, you can visit the following URL: https://dark-plum-duckling-hose.cyclic.app/.
# BankDetailsMapping
first commit updated all csv files about bank details to mongodb by mongoimport.
This project provides a Node.js application that retrieves bank branch details from a MongoDB database named "bankDetails". The "branches" collection within the database contains approximately 127,000 documents, each representing a bank branch

# installation
## If you prefer to work in developer mode and have a local copy of the project.
1.You can use the following command to clone the repository:https://github.com/Fibinjohnson/BankDetailsMapping.git
2.After cloning the repository, you can navigate to the project's directory and start working with the code locally.
3.Install the required dependencies by navigating to the project directory and running the following command:npm install.
4.To access the bank data stored in the CSV files and convert it into JSON format for easier access, you can follow these steps:

 - Clone the repository containing the CSV files to your local machine.
 - Install the required dependencies by running the command npm install --save json-server in the project's directory. This will install the JSON Server package.
-  Convert the CSV files to JSON format using a script or tool of your choice. There are various libraries and tools available for CSV to JSON conversion in different 
   programming languages. Choose the one that suits your needs best.
-  Once you have the JSON data, save it in a file (e.g., bankData.json) in the project's directory.
insead,
.Note that if you have a large number of documents (127k in your case), the performance of JSON Server may be impacted. In such cases, you might consider using a more robust database solution, such as MongoDB, to handle the large dataset more efficiently.
- Make sure you have MongoDB installed and running on your system. I prefer using mongodb.

- Import the "bankDetails" database into your MongoDB instance. You can use the following command to import the database dump:mongorestore --db bankDetails /path/to .csv 
  file/bankDetails.
- Ensure that you have MongoDB installed and the mongorestore command is accessible from your command-line interface. This command will restore the "bankDetails" database 
  from the dump files into your MongoDB instance.
  Or using mongodb compass to directly import the csv data to database
5. Set up the environment variables by creating a `.env` file and populating it with the required values such as mongodb_connection_url

# Usage
Visit the homepage at http://localhost:3000 to search for bank branch details based on bank ID or bank name.
The search results will be displayed on the body page.
 this application utilizes MongoDB as the database and provides web-based interfaces for searching and displaying the data.
Visit the IFSC page at http://localhost:3000/ifsc to search for bank  based on IFSC code.
The IFSC search results will be displayed on the IFSC result page.
Note: The MongoDB connection URL should be in the format `mongodb://<host>:<port>/<database>`. Replace `<host>`, `<port>`, and `<database>` with the appropriate values for your MongoDB setup.


  
# API Endpoints
## The application exposes the following API endpoints:

GET /bankDetails: Retrieves all bank details.
POST /bankDetails: Searches for bank details based on bank name or bank ID.
GET /ifsc: Renders the IFSC search page.
POST /ifsc: Searches for bank details based on IFSC.



# Technologies used
Node.js
Express.js
MongoDB
EJS templating engine
lodash library
dotenv package

# Database setup
Note: The MongoDB connection URL should be in the format `mongodb://<host>:<port>/<database>`. Replace `<host>`, `<port>`, and `<database>` with the appropriate values for your MongoDB setup.

## Usage

1. Import the `connectToDb` function from the connection module in your Node.js application.
2. Call the `connectToDb` function to establish a connection to the MongoDB database.

```javascript
const { connectToDb } = require("./connection");

connectToDb()
  .then((db) => {
    // Use the `db` object to perform database operations
    console.log("Connection successful");
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
  });



