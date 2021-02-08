import React, {useState, ChangeEvent, FormEvent} from 'react';
import './App.css';
import Filtered from './Filtered';
import Other from './Other';

const currentFriendsList = [''];

function App() {
  const [searchQ, setSearchQ] = useState('');
  const handleSearchQ = (event: ChangeEvent<HTMLInputElement>) =>
  {
    const searchQuery = event.currentTarget.value;
    setSearchQ(searchQuery);
  }
  const [name, setName] = useState('');
  const [friendList, setFriendList] = useState(currentFriendsList);
  if (friendList[0] === '')
    {
      friendList.shift();
    }
  const changeName = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.currentTarget.value;
    setName(name);
}
  const AddFriend = (event: any) => {
    const newFriend = friendList.concat(name);
    if (newFriend[0] === '')
    {
      newFriend.shift();
    }
    setFriendList(newFriend);
    event.preventDefault();
    setName('');
  }
  return (
    <div className="App">
      <span>Search Query:</span>
      <input type="text" value={searchQ} onChange={handleSearchQ}/>
      <br/>
      <p>Add Friend to List</p>
      <form >
        <input type="text" value={name} onChange={changeName}/>
        <button type="submit" onClick={AddFriend}>Add Friend</button>
      </form>
      <div>
        <Filtered query={searchQ} friends={friendList}/>
        <Other query={searchQ} friends={friendList}/>
      </div>
    </div>
  );
}

export default App;
