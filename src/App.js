import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import * as ReactBootStrap from "react-bootstrap";

const App = () => {
  const [servicecalls, updateServiceCalls] = useState([]);
  const [nicknames, updateNicknames] = useState([]);
  const [hashtags, updateHashtags] = useState([]);
  const [loading, setLoading] = useState(false);

  // Define function to call service calls API
  async function getServiceCalls() {
    const data = await API.get("instapostservicecallsapi", `/service-calls`);
    updateServiceCalls(data.service_calls_count["service-calls"]);
    setLoading(true);
    console.log(data.service_calls_count["service-calls"]);
  }

  // Define function to call nick names API
  async function getNickNames() {
    const data = await API.get("instapostnicknamesapi", `/nicknames`);
    updateNicknames(data.nicknames.nicknames);
    setLoading(true);
    console.log(data);
  }

  // Create a json object for the nick names
  const newnames = [];
  nicknames.forEach((value) => {
    newnames.push({ index: value });
  });

  // Define function to call hash tags API
  async function getHashTags() {
    const data = await API.get("instaposthashtagsapi", `/hashtags`);
    updateHashtags(data.hashtags.hashtags);
    setLoading(true);
    console.log(data.hashtags.hashtags);
  }

  // Create a json object for the hash tags
  const all_hashtags = [];
  hashtags.forEach((value) => {
    all_hashtags.push({ index: value });
  });

  // Define column names for the tables
  const hashtag_columns = [{ dataField: "index", text: "Hashtag" }];
  const nickname_columns = [{ dataField: "index", text: "Nickname" }];

  // Call functions when component loads
  useEffect(() => {
    getServiceCalls();
    getNickNames();
    getHashTags();
  }, []);

  return (
    <div className="App grid-container">
      <div className="grid-item">
        {loading ? (
          <div>
            <b>Service Calls</b>
            <br />
            <b>{servicecalls}</b>
          </div>
        ) : (
          <ReactBootStrap.Spinner animation="border" />
        )}
        <button onClick={getServiceCalls}>Refresh</button>
      </div>

      <div className="grid-item">
        {loading ? (
          <BootstrapTable
            keyField="hashtags"
            data={all_hashtags}
            columns={hashtag_columns}
            pagination={paginationFactory()}
            striped
            hover
            condensed
          />
        ) : (
          <ReactBootStrap.Spinner animation="border" />
        )}
        <button onClick={getHashTags}>Refresh</button>
      </div>

      <div className="grid-item">
        {loading ? (
          <BootstrapTable
            keyField="index"
            data={newnames}
            columns={nickname_columns}
            pagination={paginationFactory()}
            striped
            hover
            condensed
          />
        ) : (
          <ReactBootStrap.Spinner animation="border" />
        )}
        <button onClick={getHashTags}>Refresh</button>
      </div>
    </div>
  );
};

export default App;
