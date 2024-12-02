import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const { topicsData, onClickTopic } = props;
  const topicsArray = topicsData.map((topic) => {
    return (
      <TopicListItem
        key={topic.id}
        topicData={topic}
        onClickTopic={onClickTopic}
      />
    );
  });
  return <div className="top-nav-bar__topic-list">{topicsArray}</div>;
};

export default TopicList;
