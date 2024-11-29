import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import topics from "mocks/topics";

const TopicList = () => {
  const topicsArray = topics.map(topic => {
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
