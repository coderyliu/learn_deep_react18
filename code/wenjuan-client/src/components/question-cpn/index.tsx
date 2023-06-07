import QuestionInfo from "./question-info";
import QuestionTitle from "./question-title";
import QuestionParagraph from "./question-pagagraph";
import QuestionTextArea from "./question-textarea";
import QuestionInput from "./question-input";
import QuestionRadio from "./question-radio";
import QuestionCheckbox from "./question-checkbox";

export type ComponentInfo = {
  fe_id: string;
  type: string;
  title: string;
  isHidden: boolean;
  props: any;
};

const getComponentFn = (comp: ComponentInfo) => {
  const { fe_id, type, isHidden, props: cpnProps = {} } = comp;

  if (isHidden) return null;

  if (type === "questionInput") {
    return <QuestionInput fe_id={fe_id} props={cpnProps} />;
  }

  if (type === "questionRadio") {
    return <QuestionRadio fe_id={fe_id} props={cpnProps} />;
  }

  if (type === "questionCheckbox") {
    return <QuestionCheckbox fe_id={fe_id} props={cpnProps} />;
  }

  if (type === "questionTextarea") {
    return <QuestionTextArea fe_id={fe_id} props={cpnProps} />;
  }

  if (type === "questionInfo") {
    return <QuestionInfo {...cpnProps} />;
  }

  if (type === "questionTitle") {
    return <QuestionTitle {...cpnProps} />;
  }

  if (type === "questionParagraph") {
    return <QuestionParagraph {...cpnProps} />;
  }

  return null;
};

export default getComponentFn;
