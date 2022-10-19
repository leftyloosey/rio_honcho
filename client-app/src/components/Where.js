// import React, { useState } from 'react';

  async function handleSubmit () {

  // const response = await  fetch('http://localhost:8000/path')
  // .then((response) => response.json())
  // .then((data) => console.log(data));
  //   console.log(response)

  (async () => {
    const rawResponse = await fetch('http://localhost:8000/path', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({a: 1, b: 'Textual content'})
    });
    const content = await rawResponse.json();
  
    console.log(content);
  })();
  }

export default function Where() {

    handleSubmit()

}