import React from "react";

export const metadata = {
  title: "Food Page",
  description: "This Page describe how to fetch API!",
};

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
