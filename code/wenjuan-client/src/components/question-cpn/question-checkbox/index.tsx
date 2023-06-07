import React, { memo, useEffect, useState } from "react";

import styles from "./style.module.scss";

type PropsType = {
  fe_id: string;
  props: {
    title: string;
    options: { text: string; value: string; checked: boolean }[];
    value: string;
    isVertical?: boolean;
  };
};

// eslint-disable-next-line react/display-name
const QuestionCheckbox: React.FC<PropsType> = memo((props: PropsType) => {
  const { fe_id, props: cpnProps } = props;

  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  // 初始化 默认选中
  useEffect(() => {
    cpnProps.options?.forEach((item) => {
      const { value, checked } = item;

      if (checked)
        setSelectedValues((selectedValues) => selectedValues.concat(value));
    });
  }, [cpnProps.options]);

  const handleChecked = (value: string) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((v) => v !== value));
    } else {
      setSelectedValues((selectedValues) => selectedValues.concat(value));
    }
  };

  return (
    <>
      <p>{cpnProps.title}</p>
      {/* 隐藏域实现 */}
      <input type="hidden" name={fe_id} value={selectedValues.toString()} />
      <ul className={styles.list}>
        {cpnProps.options?.map((opt) => {
          const { text, value } = opt;
          {
            /* checkbox比较特殊，不能添加name属性可以通过隐藏域来实现 */
          }
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
                  type="checkbox"
                  id={text}
                  checked={selectedValues.includes(value)}
                  onChange={() => handleChecked(value)}
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

export default QuestionCheckbox;
