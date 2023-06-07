import React, { memo } from "react";

type PropsType = {
  text: string;
  level: number;
  isCenter?: number;
};

// eslint-disable-next-line react/display-name
const QuestionTitle: React.FC<PropsType> = memo((props: PropsType) => {
  const { text, level, isCenter } = props;

  if (level === 1)
    return <h1 style={{ textAlign: isCenter ? "center" : "left" }}>{text}</h1>;
  if (level === 2)
    return <h2 style={{ textAlign: isCenter ? "center" : "left" }}>{text}</h2>;
  if (level === 3)
    return <h3 style={{ textAlign: isCenter ? "center" : "left" }}>{text}</h3>;

  return <p style={{ textAlign: isCenter ? "center" : "left" }}>{text}</p>;
});

export default QuestionTitle;
