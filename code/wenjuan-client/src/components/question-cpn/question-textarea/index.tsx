import React, { memo } from "react";

import styles from "./style.module.scss";

type PropsType = {
  fe_id: string;
  props: {
    title: string;
    placeholder?: string;
  };
};

// eslint-disable-next-line react/display-name
const QuestionTextArea: React.FC<PropsType> = memo((props: PropsType) => {
  const { fe_id, props: cpnProps } = props;

  return (
    <>
      <p>{cpnProps.title}</p>
      <div className={styles.textAreaWrapper}>
        <textarea name={fe_id} placeholder={cpnProps.placeholder} />
      </div>
    </>
  );
});

export default QuestionTextArea;
