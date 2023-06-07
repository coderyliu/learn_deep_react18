import React, { memo } from "react";

import { getQuestionDataByIdFetch } from "@/api/modules/question";
import getComponentFn, { ComponentInfo } from "@/components/question-cpn";

type PropsType = {
  id: string;
  title: string;
  desc?: string;
  js?: string;
  css?: string;
  isPublished: boolean;
  isDeleted: boolean;
  componentList: ComponentInfo[];
};

// eslint-disable-next-line react/display-name
const QuestionPage: React.FC<PropsType> = memo((props: PropsType) => {
  const { id, title, isPublished, isDeleted, componentList = [] } = props;

  // 已经被删除的，提示错误
  if (isDeleted) {
    return (
      <>
        <h1>{title}</h1>
        <p>该问卷已经被删除</p>
      </>
    );
  }

  // 尚未发布的，提示错误
  if (!isPublished) {
    return (
      <>
        <h1>{title}</h1>
        <p>该问卷尚未发布</p>
      </>
    );
  }

  // 遍历组件
  const ComponentListElement = (
    <>
      {componentList.map((c) => {
        const Cpn = getComponentFn(c);
        if (!Cpn) return null;

        return (
          <div key={c.fe_id} style={{ borderBottom: "1px solid #f1f1f1" }}>
            {Cpn}
          </div>
        );
      })}
    </>
  );

  return (
    <>
      <form action="/api/answer" method="post">
        <input type="hidden" name="questionId" defaultValue={id} />

        {ComponentListElement}

        <div
          style={{
            textAlign: "center",
            margin: "16px",
          }}
        >
          <button
            type="submit"
            style={{
              color: "#fff",
              backgroundColor: "#1677ff",
              border: "1px solid transparent",
              padding: "4px 15px",
              borderRadius: "3px",
            }}
          >
            提交
          </button>
        </div>
      </form>
    </>
  );
});

export async function getServerSideProps(context: any) {
  const { id = "" } = context.params;

  // 获取数据
  const data = await getQuestionDataByIdFetch(id);
  console.log(data);

  return {
    props: data,
  };
}

export default QuestionPage;
