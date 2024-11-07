import { useParams } from 'react-router-dom';

function useSurveyId() {
  const params = useParams();

  const id = parseInt(params.surveyId);

  return id;
}

export default useSurveyId;
