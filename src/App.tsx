import React, {useState} from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Chats from './components/Chats';
import Profile from './components/Profile';
import Friends from './components/Friends';
import { Friend, SelectFriendFunction } from './types';

function App() {
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);
  const handleSelectFriend: SelectFriendFunction = (friend) => {
    setSelectedFriend(friend);
  };
  return (
    <div className=" w-full flex h-screen">
      <div className=' w-[30%] flex'>
        <Sidebar />
        <Friends onSelectFriend={handleSelectFriend} />
      </div>
      <div className=' w-[40%]'>
        <Chats selectedFriend={selectedFriend}  />
      </div>
      <div className=' w-[30%]'>
        <Profile selectedFriend={selectedFriend}  />
      </div>
    </div>
  );
}

export default App;
