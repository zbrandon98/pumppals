# Setting Up Your Development Environment

Before you begin, create a folder for this cohort wherever you want to store any GitHub repos that you will be cloning on your device in this cohort. You can name it include, cohort, or literally anything you want to. If you choose to name it "include", do not use a '#' in your folder name, it'll cause a bunch of problems later.

## 1. NODE.JS

Node.js is a runtime environment that is used to run Javascript code. It comes with the Node Package Manager (npm) that helps us manage the Javascript packages used in our project. To set up node.js:

1. Download the Node.js installer for your OS from https://nodejs.org/en/download/current
2. Run the installer and follow the installation wizard.
3. Once the installation finishes, open a terminal on VSCode and type _node --version_ to verify your node installation. Type _npm --v_ to verify your npm installation.

   a. If you get an error saying that node or npm is not recognized as a command, try restarting VSCode to see if the issue fixes itself. (If you had VSCode opened while installing Node, this should fix it.)
   b. If the problem persists, search for _Environment variables_ in your Start menu. Click on _Edit your Environment variables_. Click on _Environment Variables_ in the new window that opens up.
   c. Find the variable _Path_ and click on _Edit_.
   d. Check for _C:\Program Files\nodejs\\_ in the list of paths that appear. If it's not there, click on _New_ and add it to the list.
   e. Restart VSCode and it should ideally work now.

## 2. ESLINT EXTENSION

ESLint is an extension that ensures that your code adheres to certain code style. It also auto-formats your code on save in VSCode. To enable it:

1. Go to the Extensions tab on VSCode and install _ESLint_.
2. Once it is installed, open your Command Palette by pressing **Ctrl + SHift + P**/**Command + Shift + P** and search for **Preferences: Open Workspace Settings (JSON)**. Open the file and add this code into the file. This will autoformat your code on save and also configure tab sizes:

   ```json
   {
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "eslint.validate": [
        "javascript"
    ],
    "[javascript]": {
        "editor.indentSize": 2
    }, 
    "[prisma]": {
        "editor.indentSize": 2
    }
   ```

## 3. Postgres
1. Install postgres on your machine by following this tutorial. https://www.sqlshack.com/setting-up-a-postgresql-database-on-mac/. If you're on windows, the steps are the same once postgres is up and running: create a new user and give them CREATEDB permissions.
2. Create a new database for your local development.


## 4. DBeaver/TablePlus/PGAdmin
1. Install one of these tools (I use DBeaver but people literally use any of these and they are all the same). This is so you can view your postgres database with a nice UI. It also draws out some ER diagrams for you.
2. Connect to your database using your User Interface of choice.

## 5. environment file
Create a file called ```.env``` in the root of the codebase and paste in the following (username, password, and dbname to fit your own information).
```
DATABASE_URL="postgresql://username:password@localhost:5432/db_name?schema=public"
```
## Getting Started

Set up:

`npm install` for package installations. This will install all packages specified in the package.json file.

Run the development server:

```bash
npm run dev
```
Open up http://localhost:4000/graphql to open the graphql playground and test your server

Run a linting test for the /src folder:

```bash
npm run lint
```
## Adding a new Data Type
### Prisma
Prisma is our ORM (object relational mapping). It allows us to manipulate our database without writing raw SQL(which is very error prone). It transforms our CRUD operations into an object oriented style.

Prisma also creates database migrations for us. Database Migrations are effectively incremental SQL commands that are fed to our database one by one to change schemas or seed the database.

To create a new data type, your first step is to create a new ```[DataType].schema``` file in the /prisma/models folder where the datatype name is **singular** (Post, User, Song, Playlist, UserInterface, ColorPalette).

After you're done making the schema, run ```npm run schema:gen``` to compile it. Prisma does not support multifile schemas so we had to use a bash script to combine it into schema.prisma manually.

### GraphQL
GraphQL is our REST API alternative. We are running an Apollo/GraphQL server on express. GraphQL has the benefit of allowing us to specify the structure of the data we want back from the server. This way, we avoid receiving excess data.

#### TypeDefs
When creating a new DataType, similarly to the Prisma schema, you have to define the schema in GraphQL, using the same DataType and field names as you did in the prisma file. To do so, add a file called ```[DataType].js``` in the /src/typeDefs folder once again using **singular** names for the datatype.

After creating the ```[DataType].js``` file, add it to the /src/typeDefs/index.js

#### Resolvers
GraphQL allows you to add fields to your typeDefs that do not correlate to a field in the database. When this happens, you have to define how GraphQL should handle the request. You can also use resolvers to define queries and mutations in GraphQL.

To do so, add a file called ```[DataType].js``` in the /src/resolvers folder once again using **singular** names for the datatype.

After creating the ```[DataType].js``` file, add it to the /src/resolvers/index.js

#### Services
Services are not built into GraphQL, but most people split the functionality from resolvers into the definitions and the actual logic behind the scenes. Our codebase defines these functions as static methods to a class that has the same name as the DataType but **PURAL**.

Create a ```[DataType(s)].js``` file in /src/services and copy the template from other files.

## Final Notes
As you can see, there is a lot of code to edit everytime you want to make new feature in the database. Basic Apollo/GraphQL servers keep everything in one file, but that is not scalable. In order to keep it scalable, I had to spend a lot of time setting up this codebase, which will never be exactly the same as any other codebase you see someone else set up in the future (since there are so many tradeoffs to consider).

Also, if you think it's a lot of work to add new features already, then you aren't ready for when we add in unit testing 🙂
