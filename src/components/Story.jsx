import React from 'react';
import { useParams } from 'react-router-dom';

function Story() {

    const {id, storyId} = useParams();
    
  return (
    <div className='h-screen w-screen pt-32 flex items-center justify-center flex-col gap-2'>
      <h1>We can fetch the story data based on the Id</h1>
      <p>{storyId}</p>
    </div>
  );
}

export default Story;
