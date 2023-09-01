
<p align="center">
  <img src="./assets/logo.png" alt="drawing" height="100"/>
</p>

## Project Setup (Windows)

### Backend Server and Frontend Setup

1. Clone the project
2. Open the project using IDE of your choice
3. Using the terminal, 'cd' into 'code/client' and run `npm i` to install frontend dependencies
4. Using the terminal, 'cd' into 'code/server' and run `npm i` to install backend dependencies

### Database Initialization and Setup

1. Install [MySQL](https://dev.mysql.com/downloads/installer/) (Make sure to remember your root password!)
2. Install [MySQL Workbench](https://dev.mysql.com/downloads/workbench/) (Optional)
3. In a MySQL query console, or MySQL Workbench, run the SQL database initialization code located in [database/](database/) in this order:
- [cms_initialize_schema.sql](database/cms_initialize_schema.sql)
- [cms_populate_data.sql](database/cms_populate_data.sql)
4. In the locally cloned cms repository, head to [code/server/database.js](./server/database.js)
5. Modify the connection variables (user, password, host, and port) to reflect your MySQL installation

## Project Execution (Windows)
1. Using the terminal, 'cd' into 'code/client' and run `npm start` to start the frontend
2. Using the terminal, 'cd' into 'code/server' and run `npm run server` to start the backend 
3. Open [http://localhost:3000](http://localhost:3000)
4. Use any of the following credentials to sign-in:
</br>

| Username      | Password |
| ----------- | ----------- |
| user1      | user1 |
| admin   | admin |
</br>

The frontend will be running on port 3000 and the backend will be running on port 5000.

**Note: 2 video demonstrations have been included below as a substitute for the document containing screen dumps of the application.**

https://github.com/ahmaad-ansari/Course-Management-System/assets/88805493/43fa2417-ada3-4475-8163-f4ddaf41a05e

https://github.com/ahmaad-ansari/Course-Management-System/assets/88805493/051c4583-0843-49dd-bc09-b000b535b5d6




