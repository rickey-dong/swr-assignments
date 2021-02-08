import React, {useState, ChangeEvent, FormEvent} from 'react';
import './App.css';
import Filtered from './Filtered';
import Other from './Other';
function App() {
  const [searchQ, setSearchQ] = useState('');
  const handleSearchQ = (event: ChangeEvent<HTMLInputElement>) =>
  {
    const searchQuery = event.currentTarget.value;
    setSearchQ(searchQuery);
  }
  const [friendList, setFriendList] = useState<string[]>([]);
  const AddFriend = (event: any) => {
    event.preventDefault();
    setFriendList(friendList.concat(event.target.value));
    event.currentTarget.reset();
  }
  return (
    <div className="App">
      <span>Search Query:</span>
      <input type="text" value={searchQ} onChange={handleSearchQ}/>
      <br/>
      <p>Add Friend to List</p>
      <form onSubmit={AddFriend}>
        <input type="text" />
        <button type="submit">Add Friend</button>
      </form>
      <div>
        <Filtered query={searchQ} friends={friendList}/>
        <Other query={searchQ} friends={friendList}/>
      </div>
    </div>
  );
}

export default App;
