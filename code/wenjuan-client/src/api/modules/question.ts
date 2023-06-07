import appRequest, { ResDataType } from "..";

// 获取单个问卷数据
export const getQuestionDataByIdFetch = async (
  id: string
): Promise<ResDataType> => {
  const data = await appRequest.request({
    url: `/api/question/${id}`,
  });

  return data as ResDataType;
};
