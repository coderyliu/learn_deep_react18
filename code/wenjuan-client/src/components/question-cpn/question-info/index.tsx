import React, { memo } from "react";

type PropsType = {
  title: string;
  desc?: string;
};

// eslint-disable-next-line react/display-name
const QuestionInfo: React.FC<PropsType> = memo((props: PropsType) => {
  const { title, desc } = props;

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
});

export default QuestionInfo;
