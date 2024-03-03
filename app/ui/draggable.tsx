'use client';

import React, { useState, useCallback, useRef } from "react";

export default function Draggable() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const dragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  const onMouseDown = useCallback(
    (event: any) => {
      dragging.current = true;
      dragOffset.current = {
        x: event.clientX - position.x,
        y: event.clientY - position.y,
      };
    },
    [position]
  );

  const onMouseMove = useCallback((event: any) => {
    if (dragging.current) {
      setPosition({
        x: event.clientX - dragOffset.current.x,
        y: event.clientY - dragOffset.current.y,
      });
    }
  }, []);

  const onMouseUp = useCallback(() => {
    dragging.current = false;
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
        userSelect: "none",
        cursor: "grab",
      }}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      I'm draggable
    </div>
  );
}
