import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import data from '../../constants/data.json';
import { CardQuestion } from 'components/molecules';
import VerticalyCentered from 'components/molecules/Modal';
import { Button } from 'components/atoms';

function GameRoom() {
  const router = useRouter();
  const { category } = router.query;
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const selectedCategoryData = data.find(
      (categoryData) => categoryData.category === category,
    );
    if (selectedCategoryData) {
      setQuestions(selectedCategoryData.questions);
    }
  }, [category]);

  const handleOpenQuestion = () => {
    const remainingQuestions = questions.filter(
      (question) => !answeredQuestions.includes(question.IdQuestion),
    );
    if (remainingQuestions.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
      const selectedQuestion = remainingQuestions[randomIndex];
      setCurrentQuestion(selectedQuestion);
      setShowModal(true);
    } else {
      setCurrentQuestion(null);
      setShowModal(true);
    }
  };

  const handleQuestionDone = () => {
    if (currentQuestion) {
      setAnsweredQuestions([...answeredQuestions, currentQuestion.IdQuestion]);
      setCurrentQuestion(null);
      setShowModal(false);
    }
  };

  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 h-screen px-10 flex flex-col items-center">
      <p className="text-lg text-center text-white md:text-xl uppercase underline underline-offset-8 font-bold mt-10 md:mt-0 mb-14">
        {category} questions
      </p>
      {showModal && (
        <div className="w-full h-screen fixed flex justify-center items-center inset-0 z-40 bg-black/50 backdrop-blur">
          {currentQuestion ? (
            <div
              className={`w-full mx-10 md:w-1/2 lg:w-1/4 p-5 text-red-900 dark:text-slate-900 rounded-lg h-fit flex flex-col justify-between space-y-10 bg-white`}
            >
              <p className="text-lg uppercase font-bold">
                {currentQuestion.Title}
              </p>
              <p className="text-md font-semibold">
                {currentQuestion.description}
              </p>
              <div className="flex justify-end">
                <Button
                  onClick={handleQuestionDone}
                  isExit={true}
                  text="Done"
                />
              </div>
            </div>
          ) : (
            <div
              className={`w-full mx-10 md:w-1/2 lg:w-1/4 p-5 text-red-900 dark:text-slate-900 rounded-lg h-fit flex flex-col justify-between space-y-5 bg-white`}
            >
              <p className="text-lg uppercase font-bold text-center">
                Game over
              </p>
              <p className="text-sm font-semibold">Thanks for playing!</p>
              <div className="flex justify-end">
                <Button
                  onClick={() => setShowModal(false)}
                  isExit={true}
                  text="Done"
                />
              </div>
            </div>
          )}
        </div>
      )}
      <CardQuestion
        title={category}
        onClick={handleOpenQuestion}
        text={'Open Question'}
      />
      {/* <div>
        <h3>Answered Questions:</h3>
        <ul>
          {answeredQuestions.map((answeredId) => (
            <li key={answeredId}>
              {
                questions.find((question) => question.IdQuestion === answeredId)
                  .Title
              }
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
}

export default GameRoom;
