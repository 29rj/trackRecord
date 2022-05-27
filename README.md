# trackRecord
## Description About The Project:
This is back-end poject based on the transaction and basic CRUD operations with JWT (bearer token) for authentication and authorization.<br>
## Important Highlights:
a) This project is made in NodeJs using ExpressJS web framework.<br>
b) For the SQL database , PostgresSQL have been used.<br>
c) For the REST API, I have used 'Postman'.<br>
## Endpoints:
a) <b>/users/signup:</b> (POST Request) It is used for the registration of the user, which takes input as follows:<br>
<ul>
  <li>username</li>
  <li>name</li>
  <li>mobile number</li>
  <li>password</li>
</ul>

b) <b>/users/signin:</b> (POST Request) It is used to login by taking username and password and generating the bearer token.<br><br>
c) <b>/transactions/view:</b> (GET Request) It is used to view all the details of the current logged in user. Following informations are displayed:<br>
  
<ul>
  <li>username</li>
  <li>name</li>
  <li>mobile number</li>
  <li>current balance</li>
</ul>

d) <b>/transactions/credit:</b>(POST Request) It is used to add amount to the curr_balance by taking input from the user and display the acknowledgement to the user.<br><br>
e) <b>/transactions/debit:</b> (POST Request) It is used to deduct amount from the curr_balance by taking input from the user and display the acknowledgement to the user.<br><br>
