import appRequest, { ResDataType } from "..";

// 提交答卷
export const postQuestionDataFetch = async (answer: {
  [key: string]: any;
}): Promise<ResDataType> => {
  const data = await appRequest.request({
    url: "/api/answer",
    method: "post",
    data: answer,
  });

  return data as ResDataType;
};
