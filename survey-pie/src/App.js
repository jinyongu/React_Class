import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import CompletionPage from './pages/CompletionPage';
import SurveyPage from './pages/SurveyPage';

function App() {
  return (
    <div className="App">
      <AppWrapper>
        <Box>
          <Routes>
            <Route path="/done" element={<CompletionPage />} />
            <Route path="/survey/:surveyId" element={<SurveyPage />}>
              <Route path=":step" element={<SurveyPage />} />
            </Route>
          </Routes>
        </Box>
      </AppWrapper>
    </div>
  );
}

const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f6f6;
`;

const Box = styled.div`
  background-color: #ffffff;
  width: 700px;
  min-height: 500px;
  border-radius: 16px;
  box-shadow: 0 2 10 rgba(0, 0, 0, 0.07);
  padding: 60px;
  display: flex;
  box-sizing: border-box;
`;

export default App;
