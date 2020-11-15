import PropTypes from "prop-types";
import React from "react";
import tabsStyles from "./tabs.module.css";

// TODO: make this component work nice with children components instead of an array

const Tabs = ({ tabs, defaultTab }) => {
  let [activeTab, setActiveTab] = React.useState(defaultTab);

  const tabVisible = function (currentTab) {
    if (currentTab === activeTab) {
      return true;
    }
  };

  return (
    <div>
      <ul className={tabsStyles.nav}>
        {tabs.map(function (tab, i) {
          return (
            <li className={tabsStyles.navItem} id={"tab-" + i} key={i}>
              <button
                className={tabVisible(i) ? tabsStyles.active : null}
                onClick={() => setActiveTab(i)}
              >
                {tab.title}
              </button>
            </li>
          );
        })}
      </ul>
      {tabs.map(function (tab, i) {
        return (
          <div
            className={
              tabsStyles.tabContent +
              " " +
              (!tabVisible(i) ? tabsStyles.hidden : null)
            }
            id={"tab-" + i}
            key={i}
          >
            {tab.content}
          </div>
        );
      })}
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.array,
  defaultTab: PropTypes.number,
};

Tabs.defaultProps = {
  tabs: [
    {
      title: "Tab 1",
      content: "Tab 1 content",
    },
    {
      title: "Tab 2",
      content: "Tab 2 content",
    },
  ],
  defaultTab: 0,
};

export default Tabs;
