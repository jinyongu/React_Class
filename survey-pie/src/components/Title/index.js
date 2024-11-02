import styled from 'styled-components';

function Title({ children }) {
  return (
    <TitleWrapper>
      <span>Q.</span>
      {children}
    </TitleWrapper>
  );
}

const TitleWrapper = styled.h1`
  font-size: 24px;
  font-weight: bold;
  line-height: 28.13px;
  color: rgba(18, 17, 17, 1);
  margin: 0;

  span {
    margin-right: 12px;
  }
`;

export default Title;
