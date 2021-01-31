import React from 'react';

type info = { readonly title: string; readonly artist: string};
const Song = ({title, artist}: info) => {
    return (
        <div>{title} by {artist} is a good song</div>
    )
};

export default Song;