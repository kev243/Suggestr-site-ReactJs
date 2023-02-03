import "./faq.css";
import { questions } from "../../data/questionData";
import Question from "../../components/question/Question";

const FAQ = () => {
  return (
    <div className="faq-container section__margin">
      <div className="faq-content">
        <div className="faq-container-top">
          <p>FAQ</p>
          <h3>Au cas où vous auriez manqué quelque chose.</h3>
        </div>
        <div className="faq-contaier-down">
          <div className="faq-questions">
            {questions.map((question) => {
              return <Question question={question} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
