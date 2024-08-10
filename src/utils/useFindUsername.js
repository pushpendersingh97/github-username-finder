import { useState } from "react";

const useFindUsername = () => {
  const [username, setUsername] = useState(null);
  
  const fetchUsername = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const data = await response.json();
    setUsername(data.username);
    console.log(data.username);
  }

  return { username, fetchUsername };
};

export default useFindUsername;
