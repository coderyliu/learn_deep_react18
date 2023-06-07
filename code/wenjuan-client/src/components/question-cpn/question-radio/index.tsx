import React, { memo } from "react";

import styles from "./style.module.scss";

type PropsType = {
  fe_id: string;
  props: {
    title: string;
    options: Array<{ text: string; value: string }>;
    value: string;
    isVertical?: boolean;
  };
};

// eslint-disable-next-line react/display-name
const QuestionRadio: React.FC<PropsType> = memo((props: PropsType) => {
  const { fe_id, props: cpnProps } = props;

  return (
    <>
      <p>{cpnProps.title}</p>
      <ul className={styles.list}>
        {cpnProps.options.map((opt) => {
          const { text, value: val } = opt;

          return (
            <li
              key={text}
              className={
                cpnProps.isVertical
                  ? styles.verticalItem
                  : styles.horizontalItem
              }
            >
              <label htmlFor={text}>
                <input
                  type="radio"
                  name={fe_id}
                  id={text}
                  value={val}
                  defaultChecked={val === cpnProps.value}
                />
                {text}
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
});

export default QuestionRadio;
