// Add your code here
function submitData(name, email){
    const data = {
        name: "Steve",
        email: "steve@steve.com",
};

const url = "http://localhost:3000/users";

const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(data), // Convert data to JSON string
  };

return fetch(url, requestOptions)
  .then(response => response.json())
  .then(data => {
    document.body.innerHTML += data.id; // Append the new ID to the DOM
    console.log("POST request successful:", data);
  })
  .catch(error => {
    document.body.innerHTML += error.message; // Append the error message to the DOM
    console.error("Error during POST request:", error);
  })
};