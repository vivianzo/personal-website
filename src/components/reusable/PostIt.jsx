import React from 'react';

const PostIt = ({ text, style }) => {
  return (
    <div className={`w-24 h-24 bg-pink2 p-2 shadow-lg hidden md:block ${style}`}>
      {text}
    </div>
  );
};

export default PostIt;