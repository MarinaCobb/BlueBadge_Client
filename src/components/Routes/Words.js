import React, { useEffect } from "react";


const Words = () => {
  fetch("https://", {
    "method": "",
    "headers": {
      "x-rapidapi-key": "ee4f6b207bmsh4e2127b75a59380p188a02jsnc26d6203c287",
      "content-type": "application/x-www-form-urlencoded"
    },
    "body": {}
  })
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log(err);
  });

  // useEffect(() => {
  //   Words();
  // }, []);

  return (
    <div>
    Hello from Words
    </div>
    )
}



export default Words;