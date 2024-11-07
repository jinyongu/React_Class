import { useRecoilValue } from 'recoil';

import surveyState from '../stores/survey/surveyState';
import useStep from './useStep';

function useCurrentQuestion() {
  const step = useStep();
  const surveyData = useRecoilValue(surveyState);
  const questions = surveyData?.questions || [];

  // useEffect(() => {
  //   axios.get(`http://localhost:3001/surveys/${surveyId}`).then((res) => {
  //     console.log(res);
  //     setSurveyData(res.data);
  //   });
  // }, [setSurveyData, surveyId]);

  return questions[step];
}

export default useCurrentQuestion;
