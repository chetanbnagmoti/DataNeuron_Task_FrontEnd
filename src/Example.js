import React, { useState } from 'react';
import { Resizable } from 'react-resizable';

const Example = ({ width, height, handleSize, lockAspectRatio, axis, minConstraints, maxConstraints, onResize, resizeHandles }) => {
    const [size, setSize] = useState({ width, height });
  
    const handleResize = (event, { size }) => {
        setSize(size);
        if (onResize) {
          onResize(event, { node: event.target, size });
        }
      };
      
      const handleElement = (
        <div>
          {resizeHandles.includes('n') && <div className="resizable-handle n" />}
          {resizeHandles.includes('w') && <div className="resizable-handle w" />}
          {resizeHandles.includes('e') && <div className="resizable-handle e" />}
          {resizeHandles.includes('s') && <div className="resizable-handle s" />}
          {resizeHandles.includes('nw') && <div className="resizable-handle nw" />}
          {resizeHandles.includes('ne') && <div className="resizable-handle ne" />}
          {resizeHandles.includes('sw') && <div className="resizable-handle sw" />}
          {resizeHandles.includes('se') && <div className="resizable-handle se" />}
        </div>
      );
      
      return (
        <Resizable
          width={size.width}
          height={size.height}
          handle={handleElement}
          handleSize={handleSize}
          lockAspectRatio={lockAspectRatio}
          axis={axis}
          minConstraints={minConstraints}
          maxConstraints={maxConstraints}
          onResize={handleResize}
          resizeHandles={resizeHandles}
        >
          <div className="box" style={{ width: size.width + 'px', height: size.height + 'px' }}>
            <span>Contents</span>
          </div>
        </Resizable>
      );
  };
  

export default Example;
