# Data usage tracker app

[![Node.js CI](https://github.com/Mbalenh/data_usage_tracker_app/actions/workflows/postgres.yml/badge.svg)](https://github.com/Mbalenh/data_usage_tracker_app/actions/workflows/postgres.yml)
Your community school wants to roll out a data consumption tracker app to help track the usage of data accross all apps that the students are using. 

You are asked to help them create the web application. Each student is sent `500mb` of data per month. The students can top-up if they have run out of data. There's is a usage string for all the apps e.g `("YouTube, Sportify, Zoom, Slack, Khan Academy")` Each app got data usage per minute. 

The main app functionality is to - `Calculate the total data usage based on the Apps and minutes entered for each learner.`

This functionality is needed:

* Create a code for a user upon registration
* Each user starts with a data balance starts of 500mb
* Users can top up and use the buy data	
* Create a list of apps and the data usage per minute for the app
* Users can submit usage time for each app in minutes
* The app calculates total usage for each app per user.

## Factory Function 

Create a factory function called `DataUsageTracker` it should have the functions mentioned below.

Use `PostgreSQL` and `SQL` with NodeJS to create these functions.

Method name | Description
------------------------ | ---------------
`registerUser(first_name, last_name, email)` | Create a user in the database. Use https://www.npmjs.com/package/uid to create the id for the user.
`findUser(usercode)` | Find a user by code. Returns the user object from the database.
`registerAppUsage(usercode, app_id, minUsed)` | Record app usage for a given app & user
`totalCostPerUser(usercode)` | Total usage cost per user. Calculated from minutes recorded & cost
`totalUsage` |  Total usage across all apps & users
`availableData(usercode)` |  Show how much data is still available for use.
`mostUsedApp(usercode)` |  Return the app the user spend the most money on. Also returned how mush was spent ` {app_name : 'Spox', amount : 230} `
`sendDataToAnotherUser(from_user_code, to_user_code, airtime)` |  Send another user data. You own data should decreas and the users data should increase.

The data cost per mb is `R0.09` or `9 cents` per mb for all students.

Use TDD - Ensure all the methods above is tested using Mocha.
Ensure your tests are running in GitHub Actions.
Add your SQL scripts to GitHub.

## Table to create

Create 3 tables: 

* `learner`, 
* `application`
* `learner_application_usage`.

Create the SQL scripts to create these tables and add it to a `sql` folder in your project folder.

Note that the `application` table is populated using a sql script using `insert` statements. New users and app usage should be added via the `DataUsageTracker` Factory Function.

### The learner_table has these fields:

* `id`
* `first_name`
* `last_name`
* `email`
* `usercode`
* `data_balance` -> `starts with 500mb` - this column is a number.

### The learner_application_usage table has these fields: 

* `id,`
* `leaner_id,`
* `app_id,`
* `minutes_used` -

### The application table has these fields:
 
* `id,` 
* `name,`
* `usage_per_minute`

## Todo

Clone and fork this repo and email your work to `mentors@projectcodex.co` once done.

