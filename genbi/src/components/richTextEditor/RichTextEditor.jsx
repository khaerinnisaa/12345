// // components/RichTextEditor.js
// import { useState } from "react";
// import dynamic from "next/dynamic";
// import "react-quill/dist/quill.snow.css";
// import "./index.css";

// // Import Quill hanya di sisi klien
// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

// const RichTextEditor = ({ value, onChange }) => {
//   const [text, setText] = useState("");

//   const handleChange = (value) => {
//     setText(value);
//   };

//   const modules = {
//     toolbar: [
//       [{ header: "1" }, { header: "2" }, { font: [] }],
//       [{ size: [] }],
//       ["bold", "italic", "underline", "strike", "blockquote"],
//       [{ list: "ordered" }, { list: "bullet" }],
//       ["link", "image"],
//       ["clean"],
//     ],
//   };

//   return (
//     <div className="editor-container">
//       <ReactQuill
//         value={value}
//         onChange={onChange}
//         modules={modules}
//         className="editor"
//       />
//     </div>
//   );
// };

// export default RichTextEditor;

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

// Import Quill hanya di sisi klien
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const RichTextEditor = ({ value, onChange }) => {
  const [text, setText] = useState(value || "");

  useEffect(() => {
    setText(value || ""); // Sync state with prop
  }, [value]);

  const handleChange = (value) => {
    setText(value);
    onChange(value);
  };

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };

  return (
    <div className="editor-container">
      <ReactQuill
        value={text}
        onChange={handleChange}
        modules={modules}
        className="editor"
      />
    </div>
  );
};

export default RichTextEditor;
