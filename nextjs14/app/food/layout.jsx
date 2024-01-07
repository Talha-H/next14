import React from "react";

const layoutFood = ({ children }) => {
  return (
    <div className="max-w-xl">
      <div className="mockup-code mb-8">
        <pre data-prefix="$">
          <code>Hello Developers!</code>
        </pre>
        <pre data-prefix="$">
          <code>Here Is food API</code>
        </pre>
      </div>
      {children}
    </div>
  );
};

export default layoutFood;
