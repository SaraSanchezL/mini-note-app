# A small application to keep notes.

Made with SQL, Node JS and React.

## Description:

- It is designed to practice basic Backend concepts with Node JS and SQL.
- Node JS is used to create static server, create communication with the database through endpoints (read, save, delete notes).
- SQL is used to create the database where the notes written in the app will be saved. At the moment you can only add title and description.
- React is used to create application functions with events (API requests to paint previously saved notes, save notes, delete notes, save form input values...).
- It will be deployed on Heroku once it is functional.

## To do:

- Error message if empty fields or failed request.
- Create an endpoint with UPDATE verb to update notes database information.
- Refactor and review code.
- Styles with CSS.
- Deployed on Heroku.

### How to start the backend

At the root of the project:

1. Run `npm install`.
1. Run `npm start` or `npm run dev`.

The backend will start at http://localhost:4000

### How to run the frontend

At the root of the project:

1. Run `cd web`.
1. Run `npm install`.
1. Run `npm start` or `npm run dev`.
1. Open the page http://localhost:3000
