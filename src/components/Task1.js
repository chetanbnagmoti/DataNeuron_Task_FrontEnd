import React from 'react'
import Example from '../Example.js';

const Task1 = () => {
    const handleResize = (event, data) => {
        console.log('Resized:', data.size);
      };
  return (
    <div className="container-1">
      {[...Array(3)].map((_, index) => (
        <Example
          key={index}
          width={200}
          height={200}
          handleSize={[10, 10]}
          lockAspectRatio={false}
          axis="both"
          minConstraints={[100, 100]}
          maxConstraints={[Infinity, Infinity]}
          onResize={handleResize}
          resizeHandles={['s', 'w', 'e', 'n', 'sw', 'nw', 'se', 'ne']}
        />
      ))}
    </div>
  )
}

export default Task1