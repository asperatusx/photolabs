import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const { topicsData } = props;
  const topicsArray = topicsData.map(topic => {
    return (
      <TopicListItem key={topic.id} topicData={topic}/>
    )
  })
  return (
    <div className="top-nav-bar__topic-list">
      {topicsArray}
    </div>
  );
};

export default TopicList;
