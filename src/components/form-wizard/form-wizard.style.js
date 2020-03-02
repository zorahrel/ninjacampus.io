import styled from 'styled-components';
import Soul from '../soul/soul.components';

const uiColor = '#7252B7';

export const Wrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const QuestionWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const QuestionTitle = styled.label`
  font-weight: bold;
  color: #ffffff;
  font-size: 28px;
`;
export const QuestionInput = styled.input`
  font-weight: 900;
  font-family: 'Montserrat', sans-serif;
  border: 0;
  outline: 0;
  font-size: 60px;
  border-bottom: 2px solid ${uiColor};
  color: #ffffff;
  background: transparent;
  padding: 10px 0;
  box-sizing: border-box;
  transition: all .2s;
  ::placeholder {
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
    color: ${uiColor};
  }
  :focus {
    padding-bottom: 6px;
    border-bottom-width: 6px;
  }
`;

export const FormSoul = styled(Soul)`
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
`;