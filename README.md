# Getting Started with Instapost React App

This project executes APIs against [insta-post-app](https://bismarck.sdsu.edu/api/instapost-query) and displays api data in the ui with react. This project uses aws lamdba functions and api gateway.

## Below apis are executed in the project

- service-calls
- nicknames
- hashtags

## The available lamda functions are

- servicecallsfunction
- nicknamesfunction
- hashtagsfunction

## The available api gateways are

- instapostservicecallsapi
- instapostnicknamesapi
- instaposthashtagsapi

## For rendering data in tables, the below npm packages are installed

- react-bootstrap
- react-bootstrap-table-next
- react-bootstrap-table2-paginator

[BASE_URL](https://bismarck.sdsu.edu/api/instapost-query) enviorment variable needs to be set on the lamda functions to run this project

To run the project, run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

A sample screen of the UI is available [here](https://github.com/vanand96/cs648-instapost-react-app/public/instapost-ui.jpg).
