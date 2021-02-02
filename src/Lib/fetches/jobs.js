import axios from "axios";
const { REACT_APP_URI_DEV } = process.env;

export const getJobResults = async (position, location) => {
    try {
      const response = await fetch(
        `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${position}&location=${location}`
      );
      const data  = await response.json();
      if (response.ok) {
        console.log(data);
        return data;
      } else {
        console.log("there was a problem fetching data");
      }
    } catch (err) {
      console.log(err);
    }
  };

