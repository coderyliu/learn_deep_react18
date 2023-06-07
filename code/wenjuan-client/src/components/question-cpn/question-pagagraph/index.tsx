import React, { memo } from "react";

type PropsType = {
  text: string;
  isCenter?: boolean;
};

// eslint-disable-next-line react/display-name
const QuestionParagraph: React.FC<PropsType> = memo((props: PropsType) => {
  const { text, isCenter } = props;

  // 换行
  const textList = text.split("\n");

  return (
    <p style={{ textAlign: isCenter ? "center" : "left" }}>
      {textList.map((t, index) => {
        return (
          <span key={index}>
            {index > 0 && <br />}
            {t}
          </span>
        );
      })}
    </p>
  );
});

export default QuestionParagraph;
