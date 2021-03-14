# Oblig 2

_- Ida M. R. Gjeitsund_

---

## Content

1. [How to run and test project](#how-to-run-and-test-project)
    - [Run](#run)
    - [Test](#test)
2. [Frontend](#frontend)
    - [Technologies used](#technologies-used)
    - [Pages](#pages)
    - [Forms](#forms)
3. [Backend](#backend)
    - [Information](#information)
    - [Packages used](#packages-used)
    - [Notes](#notes)
4. [Room for improvement & other notes](#room-for-improvement-&-other-notes)

---

## How to run and test project

### Run

1. Run `yarn install-all` from the root folder to install all packages for front- and backend
2. Run `yarn start` from root folder
3. Open a second terminal and run `yarn devstart` from the /backend folder

### Test

1. Go to log in from the navigation
2. Click the link for _Register here_
3. Register a new user (or as many as you'd like)
4. Click the link for _Forgot password?_
5. Type in one of the registered e-mail addresses
6. Go back to log in and try to log in with one of the registered users

\*For all tests, you can also try inputting wrong information, like a e-mail address that doesn't exist or the wrong password, and see what happens.

---

## Frontend

### Technologies used

| Package name | Usage                               |
| ------------ | ----------------------------------- |
| React        | Frontend library                    |
| axios        | For sending requests to the backend |

### Pages

I moved all the main pages into a folder that is names /pages next to the /component folder, because it seemed a little more organized when there were so many components.

All the pages call on the **Form** component, except for Login, which just logs out the user and redirects to landing page.

### Forms

All the form components are in the [form-controls](./src/components/form-controls) folder.

#### Main Form component

I wanted to make a component that could work for all three forms. It might not be the best way to do this, but the form takes in an object which contains the information about all the subcomponents that should be in the form ([register example](./src/pages/register/formValues.json)). It also takes in a method for posting the form (POST/GET) and an endpoint for the API.

#### Subcomponents

| Name              | Information                                                                             |
| ----------------- | --------------------------------------------------------------------------------------- |
| FormInput         | Takes in type, pattern for validation, name and a title for the label                   |
| Select            | Takes in a list of options, name and a title for the label                              |
| MatchingPasswords | Generates two form-inputs with type password and validates if they match                |
| SubmitButton      | Is always rendered by a form, takes in prop that controls disabled status of the button |

---

## Backend

### Information

I set up a backend because I wanted to see if I could connect Express and React. The backend works fine with all the forms, but is not connected to the Dashboard or anything else in the app, because I didn't have the time.

### Packages used

| Package name | Usage                           |
| ------------ | ------------------------------- |
| express      | To set up API                   |
| mongoose     | For storing data                |
| bcrypt       | For securing passwords          |
| dotenv       | To set environment variables    |
| nodemon      | For automatic restart of server |

### Notes

-   The database schema used by mongoose can be found [here](./backend/models/User.js). The API sets values for location and availability to _home-office_ and _busy_ to all users with _Teacher_ role, so the user database could be used by the existing functionalities in the app.
-   The main functionality of the API can be found in the [users route](./backend/routes/user.js) and the [routes file](./backend/routes/routes.js) which it connects to.
-   I had mongoose connected to a mongoDB database, but since I don't want to send the file with my password, I've provided a .env file which connects it to your localhost. The database will therefore be empty until you register any users.
-   All passwords are encrypted using bcrypt.
-   The "forgot password" doesn't really do anything other than display a message to the user that they will be sent an e-mail.

---

## Room for improvement & other notes

If I had more time, I would've liked to

-   Set proptypes on all the components
-   Learn JWT and set up proper user authentication. Looked into it, but didn't have time
-   Connect the user system which displays status of teachers to the backend database
-   Add checks to see if user is unique before adding to database (unique e-mail)
-   Find a way to start both servers at once, I couldn't get 'concurrently' to work
-   Clean up the CSS. I had to focus on functionality, but I'm aware there are a lot of unnecessary duplicates in the css files etc.
-   Put more thought into separation of concerns, stateless vs. stateful, controlled vs. uncontrolled etc. I've tried to separate as best I could while coding, but with the limited time we got on this oblig, I didn't feel like I had time to plan out anything properly.

---

[Back to top](#oblig-2)
