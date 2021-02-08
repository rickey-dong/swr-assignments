import React from 'react';

type FriendsInfo = {
    readonly query: string,
    readonly friends: string[]
};

const Filtered = ({query, friends}: FriendsInfo) =>
{
   const filterList = friends.filter(friend => friend.toLowerCase().includes(query.toLowerCase()));
    return (
        <div>
            <h1>Filtered List</h1>
            {filterList.length !== 0
            ? <div>
                <ul>
                    {filterList.map((friend, index) => <li key={index}>{friend}</li>)}
                </ul>
            </div>
            : <p>No friends</p>}
        </div>
    )
}

export default Filtered;