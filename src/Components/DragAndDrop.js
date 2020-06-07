import React, { useState, useEffect } from "react";

const DragAndDrop = (props) => {
  const [drag, setDrag] = useState(false);
  const [dragCounter, setDragCounter] = useState(0);

  const dropRef = React.createRef();
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragIn = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragCounter(dragCounter + 1);
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setDrag(SVGComponentTransferFunctionElement);
    }
  };

  const handleDragOut = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragCounter(dragCounter - 1);
    if (dragCounter === 0) {
      setDrag(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDrag(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleDrop(e.dataTransfer.files);
      e.dataTransfer.clearData();
      setDragCounter(0);
    }
  };

  useEffect(() => {
    let div = dropRef.current;
    div.addEventListener("dragenter", handleDragIn);
    div.addEventListener("dragleave", handleDragOut);
    div.addEventListener("dragover", handleDrag);
    div.addEventListener("drop", handleDrop);

    const removeEventListeners = () => {
      let div = dropRef.current;
      div.removeEventListener("dragenter", handleDragIn);
      div.removeEventListener("dragleave", handleDragOut);
      div.removeEventListener("dragover", handleDrag);
      div.removeEventListener("drop", handleDrop);
    };
    return function cleanup() {
      removeEventListeners();
    };
  }, []);

  return (
    <div
      style={{ display: "inline-block", position: "relative" }}
      ref={dropRef}
    >
      {drag && (
        <div
          style={{
            border: "dashed grey 4px",
            backgroundColor: "rgba(255,255,255,.8)",
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 9999,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              right: 0,
              left: 0,
              textAlign: "center",
              color: "grey",
              fontSize: 36,
            }}
          >
            <div>drop here :)</div>
          </div>
        </div>
      )}
      {props.children}
    </div>
  );
};

export default DragAndDrop;
