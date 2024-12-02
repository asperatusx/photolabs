import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { id, title } = props.topicData;
  const { onClickTopic } = props;
  return (
    <div className="topic-list__item" onClick={() => onClickTopic(id)}>
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
