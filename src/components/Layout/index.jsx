import { useState } from "react";
import Header from '../Header';
import SearchBar from '../SearchBar';
import Card from '../Card';

const Layout = () => {
  const [user, setUser] = useState(null);

  const fetchUsername = async ({ username }) => {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'authorization': `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
      }
    });
    const data = await response.json();
    setUser(data);
  };

  return (
    <div className='w-screen h-screen flex justify-center items-center flex-col bg-custom-primary text-white dark:bg-black dark:text-white'>
      <div className="flex flex-col w-1/2 h-1/2 rounded-lg p-8">
        <Header />
        <SearchBar fetchUsername={fetchUsername} />
        <Card user={user} />
      </div>
    </div>
  );
};

export default Layout;
