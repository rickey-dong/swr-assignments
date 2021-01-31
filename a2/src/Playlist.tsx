import React, {useState, ChangeEvent} from 'react';
import Song from './Song';
const initialSongData = [
    {title: 'Never Gonna Give You Up', artist: 'Rick Astley'}
];

const Playlist = () => {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [data, setData] = useState(initialSongData);
    const changeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        const title = event.currentTarget.value;
        setTitle(title);
    }
    const changeArtist = (event: ChangeEvent<HTMLInputElement>) => {
        const artist = event.currentTarget.value;
        setArtist(artist);
    }
    const Add = () => {
        const newSongs = data.concat({title, artist});
        setData(newSongs);
    }
    return (
        <div>
            <div>This is my playlist:</div>
            <ul>
                {data.map(({title, artist}, index) => (
                    <li key={index}><Song title={title} artist={artist}/></li>
                ))}
            </ul>
            <div>
                <input 
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={changeTitle}
                />
                <input
                type="text"
                placeholder="Enter artist"
                value={artist}
                onChange={changeArtist}
                />
                <button type="button" onClick={Add}>Add Song</button>
            </div>
        </div>
    );
}

export default Playlist;