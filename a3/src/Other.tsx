import React from 'react';

type FriendsInfo = {
    readonly query: string,
    readonly friends: string[]
};

const Other = ({query, friends}: FriendsInfo) =>
{
    const otherList = friends.filter(friend => !friend.toLowerCase().includes(query.toLowerCase()));
    return (
        <div>
            <h1>Other List</h1>
            {otherList.length !== 0
            ? <div>
                <ul>
                    {otherList.map((friend, index) => <li key={index}>{friend}</li>)}
                </ul>
            </div>
            : <p>No friends</p>}
        </div>
    )
}

export default Other;