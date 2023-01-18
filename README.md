# Data usage tracker app

Your community school wants to roll out a data consumption tracker app to help track the usage of data accross all apps that the students are using. 

You are asked to help them create the web application. Each student is sent `500mb` of data per month. The students can top-up if they have run out of data. There's is a usage string for all the apps e.g `("YouTube, Sportify, Zoom, Slack, Khan Academy")` Each app got data usage per minute. 


`Calculate the total usage based on the Apps and minutes entered.`

### Note:

* Create a code for a user upon registration
* Each user starts with a data balance starts of 500mb
* Users can top up and use the buy data	
* Create a list of apps and the data usage per minute for the app
* Users can submit usage time for each app in minutes
* The app calculates total usage for each app per user.

## Factory Function 

Create a factory function called `DataUsageTracker`

Method name | Description
------------------------ | ---------------
`registerUser(first_name, last_name, email)` | Create a username & code for a user
`findUser(usercode)` | Find a user by code.
`registerAppUsage(usercode, app_id, minUsed)` | Record app usage for a given app & user
`totalCostPerUser(usercode)` | Total usage cost per user. Calculated from minutes recorded & cost
`totalUsage` |  Total usage across all apps & users
`availableData(usercode)` |  Show how much data is still available for use.
`mostUsedApp(usercode)` |  Return the app the user spend the most money on. Also returned how mush was spent ` {app_name : 'Spox', amount : 230} `
`sendDataToAnotherUser(from_user_code, to_user_code, airtime)` |  Send another user data. You own data should decreas and the users data should decrease.

If you send a user data you earn points - which will give you more data upon top-up

## Table structure

* Create 3 tables: learner, application & `userCode(username)` | Create a username & code for a. 	
 table
The data cost per mb is R0.09 or 9 cents per mb for all students.




### The learner_application table has these fields: 

`id,`
`leaner_id,`
`app_id,`
`minutes`

### The application table has these fields:
 
`id,` 
`name,`
`usage_per_minute`











