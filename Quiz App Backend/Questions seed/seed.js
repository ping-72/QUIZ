import mongoose from "mongoose";
import dotenv  from "dotenv";
import Questions from "../models/questions.js";
import connectDb from "../db/connectDb.js";

dotenv.config();
connectDb();

const questions = [
    // all the 100 questions data
    // 1-10
        {
            "question": "Which of the following is a key characteristic of a primary key in a database?",
            "options": [
                "A primary key can be null",
                "A primary key can have duplicate values",
                "A primary key uniquely identifies each record in a table",
                "A primary key can be changed frequently"
            ],
            "correct_answer": "A primary key uniquely identifies each record in a table"
        },

        {
            "question": "What does SQL stand for?",
            "options": [
                "Structured Query Language",
                "Structured Question Language",
                "Sequential Query Language",
                "Structured Queue Language"
            ],
            "correct_answer": "Structured Query Language"
        },
        {
            "question": "Which SQL statement is used to create a new table in a database?",
            "options": [
                "CREATE TABLE",
                "ADD TABLE",
                "MAKE TABLE",
                "INSERT TABLE"
            ],
            "correct_answer": "CREATE TABLE"
        },
        {
            "question": "In a relational database, a row is also known as a ____.",
            "options": [
                "Attribute",
                "Field",
                "Tuple",
                "Domain"
            ],
            "correct_answer": "Tuple"
        },
        {
            "question": "Which of the following SQL commands is used to delete data from a database?",
            "options": [
                "REMOVE",
                "DELETE",
                "DROP",
                "CLEAR"
            ],
            "correct_answer": "DELETE"
        },
        {
            "question": "What is a foreign key?",
            "options": [
                "A key used to uniquely identify a row in another table",
                "A key that is composed of multiple fields",
                "A key that does not allow duplicate values",
                "A key that is automatically incremented"
            ],
            "correct_answer": "A key used to uniquely identify a row in another table"
        },
        {
            "question": "What is the purpose of the SQL SELECT statement?",
            "options": [
                "To update existing records in a database",
                "To delete records from a database",
                "To retrieve data from a database",
                "To create a new table in a database"
            ],
            "correct_answer": "To retrieve data from a database"
        },
        {
            "question": "Which clause is used to sort the result set in SQL?",
            "options": [
                "SORT BY",
                "ORDER BY",
                "GROUP BY",
                "ARRANGE BY"
            ],
            "correct_answer": "ORDER BY"
        },
        {
            "question": "Which of the following is not a type of SQL join?",
            "options": [
                "INNER JOIN",
                "LEFT JOIN",
                "RIGHT JOIN",
                "OUTER JOIN"
            ],
            "correct_answer": "OUTER JOIN"
        },
        {
            "question": "What does DML stand for?",
            "options": [
                "Data Manipulation Language",
                "Data Management Language",
                "Database Management Language",
                "Data Modeling Language"
            ],
            "correct_answer": "Data Manipulation Language"
        },
        // 11-20
        {
            "question": "Which SQL function is used to return the maximum value of a column?",
            "options": [
                "MAX()",
                "MIN()",
                "HIGHEST()",
                "TOP()"
            ],
            "correct_answer": "MAX()"
        },
        {
            "question": "Which of the following is not a database constraint?",
            "options": [
                "NOT NULL",
                "UNIQUE",
                "INDEX",
                "PRIMARY KEY"
            ],
            "correct_answer": "INDEX"
        },
        {
            "question": "Which normal form is considered adequate for relational database design?",
            "options": [
                "First normal form",
                "Second normal form",
                "Third normal form",
                "Fourth normal form"
            ],
            "correct_answer": "Third normal form"
        },
        {
            "question": "What is a unique key?",
            "options": [
                "A key that uniquely identifies each row in a table",
                "A key that can only contain null values",
                "A key that allows duplicate values",
                "A key that combines multiple columns"
            ],
            "correct_answer": "A key that uniquely identifies each row in a table"
        },
        {
            "question": "What is a database transaction?",
            "options": [
                "A single unit of work in a database",
                "A set of SQL queries that are executed together",
                "A method to create tables",
                "A way to retrieve data"
            ],
            "correct_answer": "A single unit of work in a database"
        },
        {
            "question": "Which of the following SQL statements is used to add new data to a database?",
            "options": [
                "INSERT INTO",
                "UPDATE",
                "ADD DATA",
                "ALTER TABLE"
            ],
            "correct_answer": "INSERT INTO"
        },
        {
            "question": "What does ACID stand for in the context of database transactions?",
            "options": [
                "Atomicity, Consistency, Isolation, Durability",
                "Atomicity, Concurrency, Isolation, Data Integrity",
                "Authentication, Consistency, Isolation, Durability",
                "Atomicity, Consistency, Integration, Durability"
            ],
            "correct_answer": "Atomicity, Consistency, Isolation, Durability"
        },
        {
            "question": "Which SQL clause is used to filter the records returned by a query?",
            "options": [
                "WHERE",
                "FILTER",
                "SEARCH",
                "SELECT"
            ],
            "correct_answer": "WHERE"
        },
        {
            "question": "What is an index in a database?",
            "options": [
                "A tool to retrieve data faster",
                "A column that ensures unique values",
                "A row that is uniquely identified",
                "A key that cannot be null"
            ],
            "correct_answer": "A tool to retrieve data faster"
        },
        {
            "question": "Which of the following is used to remove a table from a database?",
            "options": [
                "DELETE TABLE",
                "DROP TABLE",
                "REMOVE TABLE",
                "ERASE TABLE"
            ],
            "correct_answer": "DROP TABLE"
        },
        // 21-30
        {
            "question": "What is normalization in database design?",
            "options": [
                "The process of optimizing queries",
                "The process of organizing data to reduce redundancy",
                "The process of indexing tables",
                "The process of creating backups"
            ],
            "correct_answer": "The process of organizing data to reduce redundancy"
        },
        {
            "question": "Which SQL keyword is used to change a database table's structure?",
            "options": [
                "MODIFY",
                "CHANGE",
                "ALTER",
                "UPDATE"
            ],
            "correct_answer": "ALTER"
        },
        {
            "question": "What is the main purpose of a database trigger?",
            "options": [
                "To automatically backup data",
                "To enforce business rules",
                "To replicate data across tables",
                "To speed up query performance"
            ],
            "correct_answer": "To enforce business rules"
        },
        {
            "question": "Which of the following is a NoSQL database?",
            "options": [
                "MySQL",
                "Oracle",
                "MongoDB",
                "SQL Server"
            ],
            "correct_answer": "MongoDB"
        },
        {
            "question": "What is the purpose of the SQL JOIN clause?",
            "options": [
                "To combine rows from two or more tables",
                "To create a new table",
                "To delete records",
                "To update existing records"
            ],
            "correct_answer": "To combine rows from two or more tables"
        },
        {
            "question": "Which of the following is a type of database lock?",
            "options": [
                "Shared lock",
                "Private lock",
                "Public lock",
                "Open lock"
            ],
            "correct_answer": "Shared lock"
        },
        {
            "question": "What does the SQL keyword DISTINCT do?",
            "options": [
                "Returns all rows that match the criteria",
                "Returns only unique values",
                "Returns only duplicate values",
                "Returns the first matching row"
            ],
            "correct_answer": "Returns only unique values"
        },
        {
            "question": "Which of the following is a method to recover a database after a crash?",
            "options": [
                "Transaction log",
                "Indexing",
                "Normalization",
                "Data mining"
            ],
            "correct_answer": "Transaction log"
        },
        {
            "question": "What is the primary goal of data redundancy?",
            "options": [
                "To enhance data security",
                "To improve data retrieval speed",
                "To ensure data integrity",
                "To duplicate data for backup purposes"
            ],
            "correct_answer": "To ensure data integrity"
        },
        {
            "question": "Which of the following is a DDL command in SQL?",
            "options": [
                "SELECT",
                "INSERT",
                "UPDATE",
                "CREATE"
            ],
            "correct_answer": "CREATE"
        },
        // 31-40
        {
            "question": "What does the SQL keyword COUNT() do?",
            "options": [
                "Counts the number of columns",
                "Counts the number of rows",
                "Counts the number of tables",
                "Counts the number of databases"
            ],
            "correct_answer": "Counts the number of rows"
        },
        {
            "question": "Which of the following is a database isolation level?",
            "options": [
            "Read Committed",
            "Read Consistent",
            "Write Committed",
            "Write Consistent"
            ],
            "correct_answer": "Read Committed"
        },
            {
            "question": "What is the purpose of the GROUP BY clause in SQL?",
            "options": [
            "To filter records based on a condition",
            "To sort the result set",
            "To group rows that have the same values in specified columns",
            "To join multiple tables"
            ],
            "correct_answer": "To group rows that have the same values in specified columns"
            },
            {
            "question": "Which of the following is an example of a database management system?",
            "options": [
            "Python",
            "Java",
            "MySQL",
            "HTML"
            ],
            "correct_answer": "MySQL"
            },
            {
            "question": "What is the purpose of the HAVING clause in SQL?",
            "options": [
            "To specify search conditions for groups of rows or aggregates",
            "To sort the result set",
            "To filter records based on a condition",
            "To join multiple tables"
            ],
            "correct_answer": "To specify search conditions for groups of rows or aggregates"
            },
            {
            "question": "What does the SQL UNION operator do?",
            "options": [
            "Combines the result sets of two or more queries and returns all rows",
            "Returns only the rows that are common to two queries",
            "Combines the columns of two or more queries",
            "Deletes duplicate rows from the result set"
            ],
            "correct_answer": "Combines the result sets of two or more queries and returns all rows"
            },
            {
            "question": "Which of the following is a valid SQL constraint?",
            "options": [
            "JOIN",
            "GROUP",
            "FOREIGN KEY",
            "SELECT"
            ],
            "correct_answer": "FOREIGN KEY"
            },
            {
            "question": "What is the purpose of the SQL LIKE operator?",
            "options": [
            "To compare values for equality",
            "To compare values for inequality",
            "To search for a specified pattern in a column",
            "To sort the result set"
            ],
            "correct_answer": "To search for a specified pattern in a column"
            },
            {
            "question": "Which SQL statement is used to update data in a database?",
            "options": [
            "MODIFY",
            "CHANGE",
            "UPDATE",
            "INSERT"
            ],
            "correct_answer": "UPDATE"
            },
            {
            "question": "Which of the following is a valid SQL operator?",
            "options": [
            "==",
            "!=",
            "<>",
            "==="
            ],
            "correct_answer": "<>"
            },
        // 41-50
            {
            "question": "What is a join in SQL?",
            "options": [
            "A way to filter data",
            "A way to sort data",
            "A way to combine rows from two or more tables",
            "A way to update data"
            ],
            "correct_answer": "A way to combine rows from two or more tables"
            },
            {
            "question": "Which of the following is a valid SQL function?",
            "options": [
            "MIN()",
            "SUBSTRING()",
            "CONCAT()",
            "All of the above"
            ],
            "correct_answer": "All of the above"
            },
            {
            "question": "Which of the following is a valid SQL aggregate function?",
            "options": [
            "AVG()",
            "COUNT()",
            "SUM()",
            "All of the above"
            ],
            "correct_answer": "All of the above"
            },
            {
            "question": "What is a view in SQL?",
            "options": [
            "A virtual table based on the result-set of a SQL statement",
            "A physical copy of a table",
            "A method to store procedures",
            "A way to index data"
            ],
            "correct_answer": "A virtual table based on the result-set of a SQL statement"
            },
            {
            "question": "What does the SQL command DROP DATABASE do?",
            "options": [
            "Deletes the data within the database",
            "Deletes the entire database including its structure and data",
            "Removes only the tables within the database",
            "Removes only the views within the database"
            ],
            "correct_answer": "Deletes the entire database including its structure and data"
            },
            {
            "question": "Which SQL statement is used to return only different values?",
            "options": [
            "SELECT DISTINCT",
            "SELECT DIFFERENT",
            "SELECT UNIQUE",
            "SELECT VARIETY"
            ],
            "correct_answer": "SELECT DISTINCT"
            },
            {
            "question": "Which of the following is not a valid SQL data type?",
            "options": [
            "INTEGER",
            "VARCHAR",
            "DATE",
            "CHARACTER SET"
            ],
            "correct_answer": "CHARACTER SET"
            },
            {
            "question": "Which SQL statement is used to combine rows from two or more tables?",
            "options": [
            "SELECT",
            "JOIN",
            "UNION",
            "INTERSECT"
            ],
            "correct_answer": "JOIN"
            },
            {
            "question": "What is the main purpose of using an index in SQL?",
            "options": [
            "To improve the speed of data retrieval",
            "To ensure data integrity",
            "To create a backup",
            "To manage database transactions"
            ],
            "correct_answer": "To improve the speed of data retrieval"
            },
            {
            "question": "Which of the following is a type of database model?",
            "options": [
            "Relational model",
            "Hierarchical model",
            "Network model",
            "All of the above"
            ],
            "correct_answer": "All of the above"
            },
        // 51-60
            {
            "question": "Which of the following is not a characteristic of a relational database?",
            "options": [
            "Tables",
            "Primary keys",
            "Foreign keys",
            "Binary trees"
            ],
            "correct_answer": "Binary trees"
            },
            {
            "question": "Which SQL clause is used to group rows that have the same values in specified columns?",
            "options": [
            "ORDER BY",
            "GROUP BY",
            "HAVING",
            "WHERE"
            ],
            "correct_answer": "GROUP BY"
            },
            {
            "question": "Which of the following is a command to create a new user in a SQL database?",
            "options": [
            "ADD USER",
            "CREATE USER",
            "NEW USER",
            "INSERT USER"
            ],
            "correct_answer": "CREATE USER"
            },
            {
            "question": "What is the purpose of the SQL ROLLBACK statement?",
            "options": [
            "To save a transaction",
            "To undo transactions that have not yet been saved to the database",
            "To redo a previously undone transaction",
            "To delete a table"
            ],
            "correct_answer": "To undo transactions that have not yet been saved to the database"
            },
            {
            "question": "Which of the following is a valid SQL keyword?",
            "options": [
            "RETREAT",
            "ROLLBACK",
            "RETURN",
            "RECALL"
            ],
            "correct_answer": "ROLLBACK"
            },
            {
            "question": "Which of the following statements is used to end a transaction in SQL?",
            "options": [
            "COMMIT",
            "STOP",
            "END",
            "TERMINATE"
            ],
            "correct_answer": "COMMIT"
            },
            {
            "question": "Which of the following SQL statements is used to create a stored procedure?",
            "options": [
            "CREATE PROCEDURE",
            "NEW PROCEDURE",
            "MAKE PROCEDURE",
            "ADD PROCEDURE"
            ],
            "correct_answer": "CREATE PROCEDURE"
            },
            {
            "question": "What does the SQL keyword AS do?",
            "options": [
            "Renames a column or table with an alias",
            "Combines rows from two or more tables",
            "Sorts the result set",
            "Filters records based on a condition"
            ],
            "correct_answer": "Renames a column or table with an alias"
            },
            {
            "question": "Which SQL keyword is used to change the data type of a column?",
            "options": [
            "ALTER COLUMN",
            "MODIFY COLUMN",
            "CHANGE COLUMN",
            "UPDATE COLUMN"
            ],
            "correct_answer": "ALTER COLUMN"
            },
            {
            "question": "Which of the following is a valid SQL constraint?",
            "options": [
            "PRIMARY KEY",
            "NOT NULL",
            "UNIQUE",
            "All of the above"
            ],
            "correct_answer": "All of the above"
            },
        // 61-70
            {
            "question": "Which SQL clause is used to specify conditions that must be met for the records to be selected?",
            "options": [
            "HAVING",
            "WHERE",
            "GROUP BY",
            "ORDER BY"
            ],
            "correct_answer": "WHERE"
            },
            {
            "question": "Which of the following SQL statements is used to retrieve data from a database?",
            "options": [
            "SELECT",
            "GET",
            "FETCH",
            "RETRIEVE"
            ],
            "correct_answer": "SELECT"
            },
                {
                    "question": "Which of the following SQL statements is used to retrieve data from a database?",
                    "options": [
                        "SELECT",
                        "GET",
                        "FETCH",
                        "RETRIEVE"
                    ],
                    "correct_answer": "SELECT"
                },
                {
                    "question": "Which SQL keyword is used to retrieve a maximum value?",
                    "options": [
                        "MAX",
                        "HIGHEST",
                        "TOP",
                        "MAXIMUM"
                    ],
                    "correct_answer": "MAX"
                },
                {
                    "question": "What does the term 'entity' refer to in database design?",
                    "options": [
                        "A table",
                        "A column",
                        "A row",
                        "An object that exists and is distinguishable"
                    ],
                    "correct_answer": "An object that exists and is distinguishable"
                },
                {
                    "question": "What is a composite key?",
                    "options": [
                        "A primary key consisting of multiple columns",
                        "A primary key with unique constraints",
                        "A foreign key in multiple tables",
                        "A unique key with null values"
                    ],
                    "correct_answer": "A primary key consisting of multiple columns"
                },
                {
                    "question": "Which SQL command is used to remove all records from a table, including all spaces allocated for the records?",
                    "options": [
                        "TRUNCATE",
                        "DELETE",
                        "DROP",
                        "REMOVE"
                    ],
                    "correct_answer": "TRUNCATE"
                },
                {
                    "question": "Which of the following commands is used to save all transactions to the database?",
                    "options": [
                        "SAVE",
                        "COMMIT",
                        "ROLLBACK",
                        "END"
                    ],
                    "correct_answer": "COMMIT"
                },
                {
                    "question": "What does the SQL statement ALTER TABLE do?",
                    "options": [
                        "Changes the structure of an existing table",
                        "Deletes a table",
                        "Creates a new table",
                        "Removes data from a table"
                    ],
                    "correct_answer": "Changes the structure of an existing table"
                },
                {
                    "question": "Which of the following is not a valid SQL data type?",
                    "options": [
                        "INT",
                        "VARCHAR",
                        "CHAR",
                        "NUMBER"
                    ],
                    "correct_answer": "NUMBER"
                },
        // 71-80
                {
                    "question": "What is a cursor in SQL?",
                    "options": [
                        "A database object used to retrieve rows from a result set one at a time",
                        "A column in a table",
                        "A primary key",
                        "A method to backup data"
                    ],
                    "correct_answer": "A database object used to retrieve rows from a result set one at a time"
                },
                {
                    "question": "Which of the following is used to enforce a relationship between tables in a database?",
                    "options": [
                        "Index",
                        "Foreign key",
                        "Primary key",
                        "Constraint"
                    ],
                    "correct_answer": "Foreign key"
                },
                {
                    "question": "What is the purpose of the SQL IN operator?",
                    "options": [
                        "To specify multiple values in a WHERE clause",
                        "To create indexes",
                        "To join tables",
                        "To create a new table"
                    ],
                    "correct_answer": "To specify multiple values in a WHERE clause"
                },
                {
                    "question": "Which of the following is not a feature of a relational database?",
                    "options": [
                        "Tables",
                        "Hierarchical structure",
                        "Rows",
                        "Columns"
                    ],
                    "correct_answer": "Hierarchical structure"
                },
                {
                    "question": "What does the SQL keyword NULL represent?",
                    "options": [
                        "A zero value",
                        "An empty string",
                        "An unknown or missing value",
                        "A negative value"
                    ],
                    "correct_answer": "An unknown or missing value"
                },
                {
                    "question": "Which of the following statements is used to add a new column to an existing table?",
                    "options": [
                        "ADD COLUMN",
                        "INSERT COLUMN",
                        "MODIFY COLUMN",
                        "ALTER TABLE"
                    ],
                    "correct_answer": "ALTER TABLE"
                },
                {
                    "question": "What does the SQL statement GRANT do?",
                    "options": [
                        "Gives user access privileges to the database",
                        "Removes user access privileges from the database",
                        "Creates a new user",
                        "Deletes a user"
                    ],
                    "correct_answer": "Gives user access privileges to the database"
                },
                {
                    "question": "Which of the following is a valid SQL keyword used to modify an existing column in a table?",
                    "options": [
                        "MODIFY",
                        "CHANGE",
                        "UPDATE",
                        "ALTER"
                    ],
                    "correct_answer": "ALTER"
                },
                {
                    "question": "Which of the following is a set of commands used to control access to data in a database?",
                    "options": [
                        "DML",
                        "DDL",
                        "DCL",
                        "TCL"
                    ],
                    "correct_answer": "DCL"
                },
                {
                    "question": "Which SQL statement is used to combine the result-set of two or more SELECT statements?",
                    "options": [
                        "JOIN",
                        "UNION",
                        "MERGE",
                        "COMBINE"
                    ],
                    "correct_answer": "UNION"
                },
        // 81-90
                {
                    "question": "What is the purpose of the SQL BETWEEN operator?",
                    "options": [
                        "To search for a range of values in a column",
                        "To combine multiple queries",
                        "To sort the result set",
                        "To create a table"
                    ],
                    "correct_answer": "To search for a range of values in a column"
                },
                {
                    "question": "Which of the following is a method to avoid data redundancy in a database?",
                    "options": [
                        "Normalization",
                        "Indexing",
                        "Replication",
                        "Partitioning"
                    ],
                    "correct_answer": "Normalization"
                },
                {
                    "question": "What is the purpose of the SQL DELETE statement?",
                    "options": [
                        "To remove data from a table",
                        "To remove a table from the database",
                        "To remove a database",
                        "To remove a column from a table"
                    ],
                    "correct_answer": "To remove data from a table"
                },
                {
                    "question": "Which SQL clause is used to specify the conditions for a column in a table?",
                    "options": [
                        "HAVING",
                        "WHERE",
                        "GROUP BY",
                        "ORDER BY"
                    ],
                    "correct_answer": "WHERE"
                },
                {
                    "question": "What is a database schema?",
                    "options": [
                        "The physical structure of the database",
                        "The logical structure that defines the entire database",
                        "The data stored in the database",
                        "The security settings of the database"
                    ],
                    "correct_answer": "The logical structure that defines the entire database"
                },
                {
                    "question": "Which SQL statement is used to add a new column to a table?",
                    "options": [
                        "ADD COLUMN",
                        "INSERT COLUMN",
                        "ALTER TABLE",
                        "MODIFY TABLE"
                    ],
                    "correct_answer": "ALTER TABLE"
                },
                {
                    "question": "Which of the following is not an aggregate function in SQL?",
                    "options": [
                        "AVG",
                        "SUM",
                        "COUNT",
                        "ORDER BY"
                    ],
                    "correct_answer": "ORDER BY"
                },
                {
                    "question": "What does the SQL AVG() function do?",
                    "options": [
                        "Returns the sum of a numeric column",
                        "Returns the average value of a numeric column",
                        "Returns the highest value of a numeric column",
                        "Returns the lowest value of a numeric column"
                    ],
                    "correct_answer": "Returns the average value of a numeric column"
                },
                {
                    "question": "Which of the following is used to ensure that all values in a column are unique?",
                    "options": [
                        "PRIMARY KEY",
                        "FOREIGN KEY",
                        "UNIQUE",
                        "NOT NULL"
                    ],
                    "correct_answer": "UNIQUE"
                },
                {
                    "question": "Which of the following is a command to remove a user's access to a database?",
                    "options": [
                        "REVOKE",
                        "REMOVE",
                        "DELETE",
                        "DROP"
                    ],
                    "correct_answer": "REVOKE"
                },
        // 91-100
                {
                    "question": "What is the purpose of the SQL COUNT() function?",
                    "options": [
                        "To count the number of columns",
                        "To count the number of rows",
                        "To count the number of tables",
                        "To count the number of databases"
                    ],
                    "correct_answer": "To count the number of rows"
                },
                {
                    "question": "Which of the following is not a type of SQL constraint?",
                    "options": [
                        "DEFAULT",
                        "CHECK",
                        "AUTO_INCREMENT",
                        "COLUMN"
                    ],
                    "correct_answer": "COLUMN"
                },
                {
                    "question": "Which SQL function is used to add all the values in a column?",
                    "options": [
                        "SUM()",
                        "ADD()",
                        "TOTAL()",
                        "AVG()"
                    ],
                    "correct_answer": "SUM()"
                },
                {
                    "question": "Which SQL clause is used to specify the conditions for an aggregate function?",
                    "options": [
                        "WHERE",
                        "HAVING",
                        "GROUP BY",
                        "ORDER BY"
                    ],
                    "correct_answer": "HAVING"
                },
                {
                    "question": "What is the purpose of the SQL MIN() function?",
                    "options": [
                        "To return the minimum value in a column",
                        "To return the maximum value in a column",
                        "To return the average value in a column",
                        "To return the sum of all values in a column"
                    ],
                    "correct_answer": "To return the minimum value in a column"
                },
                {
                    "question": "Which SQL clause is used to sort the result set?",
                    "options": [
                        "ORDER BY",
                        "GROUP BY",
                        "SORT BY",
                        "WHERE"
                    ],
                    "correct_answer": "ORDER BY"
                },
                {
                    "question": "Which SQL statement is used to add a new row to a table?",
                    "options": [
                        "ADD ROW",
                        "INSERT INTO",
                        "UPDATE ROW",
                        "ADD DATA"
                    ],
                    "correct_answer": "INSERT INTO"
                },
                {
                    "question": "Which of the following is a valid SQL statement to create a database?",
                    "options": [
                        "CREATE DATABASE",
                        "NEW DATABASE",
                        "MAKE DATABASE",
                        "ADD DATABASE"
                    ],
                    "correct_answer": "CREATE DATABASE"
                },
                {
                    "question": "What does the SQL keyword AND do?",
                    "options": [
                        "Combines multiple conditions in a WHERE clause",
                        "Combines multiple columns",
                        "Combines multiple tables",
                        "Combines multiple databases"
                    ],
                    "correct_answer": "Combines multiple conditions in a WHERE clause"
                },
                {
                    "question": "Which of the following is used to remove a table from a database?",
                    "options": [
                        "DELETE TABLE",
                        "DROP TABLE",
                        "REMOVE TABLE",
                        "CLEAR TABLE"
                    ],
                    "correct_answer": "DROP TABLE"
                },
                // 101-110
                {
                    "question": "What is the purpose of the SQL DISTINCT keyword?",
                    "options": [
                        "To return only distinct (different) values",
                        "To return duplicate values",
                        "To sort the result set",
                        "To filter records based on a condition"
                    ],
                    "correct_answer": "To return only distinct (different) values"
                },
                {
                    "question": "Which SQL clause is used to limit the number of rows returned?",
                    "options": [
                        "LIMIT",
                        "RESTRICT",
                        "ROWNUM",
                        "TOP"
                    ],
                    "correct_answer": "LIMIT"
                },
                {
                    "question": "Which SQL statement is used to delete a database?",
                    "options": [
                        "DELETE DATABASE",
                        "DROP DATABASE",
                        "REMOVE DATABASE",
                        "CLEAR DATABASE"
                    ],
                    "correct_answer": "DROP DATABASE"
                },
                {
                    "question": "What does the SQL HAVING clause do?",
                    "options": [
                        "Specifies conditions on groups of rows",
                        "Filters rows before grouping",
                        "Sorts the result set",
                        "Specifies conditions on columns"
                    ],
                    "correct_answer": "Specifies conditions on groups of rows"
                },
                {
                    "question": "What is the purpose of the SQL CASE statement?",
                    "options": [
                        "To handle if-then-else type logic in SQL",
                        "To join multiple tables",
                        "To create a new table",
                        "To sort the result set"
                    ],
                    "correct_answer": "To handle if-then-else type logic in SQL"
                },
                {
                    "question": "Which SQL function returns the current date and time?",
                    "options": [
                        "GETDATE()",
                        "CURDATE()",
                        "SYSDATE()",
                        "All of the above"
                    ],
                    "correct_answer": "All of the above"
                },
                {
                    "question": "What does the SQL keyword UNIQUE do?",
                    "options": [
                        "Ensures all values in a column are unique",
                        "Ensures all values in a column are not null",
                        "Ensures all values in a column are integers",
                        "Ensures all values in a column are strings"
                    ],
                    "correct_answer": "Ensures all values in a column are unique"
                },
                {
                    "question": "Which SQL statement is used to create a new table?",
                    "options": [
                        "CREATE TABLE",
                        "NEW TABLE",
                        "MAKE TABLE",
                        "ADD TABLE"
                    ],
                    "correct_answer": "CREATE TABLE"
                },
        // 111-120
                {
                    "question": "What is a foreign key in a database?",
                    "options": [
                        "A key that uniquely identifies each row in a table",
                        "A key used to link two tables together",
                        "A key used to sort data",
                        "A key used to index data"
                    ],
                    "correct_answer": "A key used to link two tables together"
                },
                {
                    "question": "Which of the following is a valid SQL data type for storing binary data?",
                    "options": [
                        "BLOB",
                        "BINARY",
                        "VARBINARY",
                        "All of the above"
                    ],
                    "correct_answer": "All of the above"
                },
                {
                    "question": "Which of the following SQL statements is used to change the structure of an existing table?",
                    "options": [
                        "MODIFY TABLE",
                        "CHANGE TABLE",
                        "ALTER TABLE",
                        "UPDATE TABLE"
                    ],
                    "correct_answer": "ALTER TABLE"
                },
                {
                    "question": "Which SQL function is used to find the highest value in a column?",
                    "options": [
                        "MAX()",
                        "HIGH()",
                        "TOP()",
                        "GREATEST()"
                    ],
                    "correct_answer": "MAX()"
                },
                {
                    "question": "What is the purpose of the SQL CREATE INDEX statement?",
                    "options": [
                        "To create a new index on a table",
                        "To create a new table",
                        "To create a new database",
                        "To create a new column"
                    ],
                    "correct_answer": "To create a new index on a table"
                },
                {
                    "question": "Which of the following is used to ensure the accuracy and reliability of data in a database?",
                    "options": [
                        "Data integrity",
                        "Data redundancy",
                        "Data security",
                        "Data backup"
                    ],
                    "correct_answer": "Data integrity"
                },
                {
                    "question": "Which SQL function returns the number of rows in a table?",
                    "options": [
                        "COUNT()",
                        "SUM()",
                        "ROWS()",
                        "TOTAL()"
                    ],
                    "correct_answer": "COUNT()"
                },
                {
                    "question": "What is a primary key in a database?",
                    "options": [
                        "A key that uniquely identifies each row in a table",
                        "A key used to link two tables together",
                        "A key used to sort data",
                        "A key used to index data"
                    ],
                    "correct_answer": "A key that uniquely identifies each row in a table"
                },
                {
                    "question": "Which of the following is not a valid SQL keyword?",
                    "options": [
                        "SELECT",
                        "INSERT",
                        "UPDATE",
                        "FETCH"
                    ],
                    "correct_answer": "FETCH"
                },
                {
                    "question": "Which SQL statement is used to modify existing data in a table?",
                    "options": [
                        "MODIFY",
                        "CHANGE",
                        "UPDATE",
                        "ALTER"
                    ],
                    "correct_answer": "UPDATE"
                },
        // 121-130
                {
                    "question": "What is the purpose of the SQL IS NULL operator?",
                    "options": [
                        "To test for empty values",
                        "To test for non-empty values",
                        "To test for numeric values",
                        "To test for string values"
                    ],
                    "correct_answer": "To test for empty values"
                },
                {
                    "question": "Which SQL statement is used to create a new user?",
                    "options": [
                        "ADD USER",
                        "CREATE USER",
                        "NEW USER",
                        "INSERT USER"
                    ],
                    "correct_answer": "CREATE USER"
                },
                {
                    "question": "What is a transaction in SQL?",
                    "options": [
                        "A sequence of operations performed as a single logical unit of work",
                        "A single query",
                        "A table",
                        "A database"
                    ],
                    "correct_answer": "A sequence of operations performed as a single logical unit of work"
                },
                {
                    "question": "Which of the following is used to provide a logical separation of a database?",
                    "options": [
                        "Schema",
                        "Table",
                        "Row",
                        "Column"
                    ],
                    "correct_answer": "Schema"
                },
                {
                    "question": "Which SQL statement is used to grant privileges to a user?",
                    "options": [
                        "GRANT",
                        "GIVE",
                        "ALLOW",
                        "PERMIT"
                    ],
                    "correct_answer": "GRANT"
                },
                {
                    "question": "Which SQL function is used to find the lowest value in a column?",
                    "options": [
                        "MIN()",
                        "LOW()",
                        "BOTTOM()",
                        "LEAST()"
                    ],
                    "correct_answer": "MIN()"
                },
                {
                    "question": "Which of the following SQL statements is used to delete data from a table?",
                    "options": [
                        "REMOVE",
                        "DELETE",
                        "DROP",
                        "CLEAR"
                    ],
                    "correct_answer": "DELETE"
                },
                {
                    "question": "Which SQL statement is used to create a view?",
                    "options": [
                        "CREATE VIEW",
                        "MAKE VIEW",
                        "ADD VIEW",
                        "NEW VIEW"
                    ],
                    "correct_answer": "CREATE VIEW"
                },
                {
                    "question": "Which of the following is not a valid SQL operator?",
                    "options": [
                        "AND",
                        "OR",
                        "NOT",
                        "MAYBE"
                    ],
                    "correct_answer": "MAYBE"
                },
                {
                    "question": "Which SQL function is used to count the number of non-null values in a column?",
                    "options": [
                        "COUNT()",
                        "SUM()",
                        "ROWS()",
                        "TOTAL()"
                    ],
                    "correct_answer": "COUNT()"
                },
                {
                    "question": "What is the purpose of the SQL SUM() function?",
                    "options": [
                        "To add all the values in a column",
                        "To count the number of rows",
                        "To find the highest value in a column",
                        "To find the lowest value in a column"
                    ],
                    "correct_answer": "To add all the values in a column"
                },
                {
                    "question": "Which SQL statement is used to update a view?",
                    "options": [
                        "ALTER VIEW",
                        "MODIFY VIEW",
                        "UPDATE VIEW",
                        "CHANGE VIEW"
                    ],
                    "correct_answer": "ALTER VIEW"
                },
                {
                    "question": "Which of the following SQL constraints ensures that a column cannot have NULL values?",
                    "options": [
                        "NOT NULL",
                        "UNIQUE",
                        "PRIMARY KEY",
                        "DEFAULT"
                    ],
                    "correct_answer": "NOT NULL"
                }  
];

const seedDb = async()=>{
    try{
        await Questions.deleteMany({});
        await Questions.insertMany(questions);
        console.log('Database updated with 120 questions');
        process.exit();
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

seedDb();

// run node seed.js to save all the questions into database