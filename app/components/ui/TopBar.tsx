import { useState } from "react";
import React from "react";

export default function TopBar({ tabs, children }) {
  const [activeTab, setActiveTab] = useState(tabs[0].name);
  const childrenArray = React.Children.toArray(children);

  return (
    <div>
      <div className="flex border-b">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`p-4 ${activeTab === tab.name ? "border-b-2 border-blue-500" : ""}`}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4">
        {childrenArray.find((child) => child.props.name === activeTab)}
      </div>
    </div>
  );
}
