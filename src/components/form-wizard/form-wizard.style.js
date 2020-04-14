import React from 'react';
import styled from 'styled-components';
import Soul from '../soul/soul.component';
import BackWhiteIcon from '../../assets/back_white.svg';

const uiColor = '#7252B7';

export const Wrapper = styled.div`
  width: 90vw;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  height: 100vh;
`;

export const FormTitle = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10vh;
`;

export const QuestionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  transform: translate(0, ${p => p.show ? '-30%' : (p.prev ? '100vh' : '-100vh')});
  opacity: ${p => p.show ? '1' : '0'};
  transition: all .3s;
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  @media (max-width: 480px) {
    display: block;
  }
`;
export const QuestionTitle = styled.label`
  font-weight: bold;
  color: #ffffff;
  font-size: 28px;
  margin-bottom: 20px;
  display: block;
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
  margin-right: 25%;
  ::placeholder {
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
    color: ${uiColor};
  }
  :focus {
    padding-bottom: 6px;
    border-bottom-width: 6px;
  }

  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

export const QuestionTextarea = styled.textarea`
  font-weight: 700;
  resize: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 30px;
  border: 2px solid ${uiColor};
  outline: 0;
  color: #ffffff;
  background: transparent;
  padding: 10px;
  box-sizing: border-box;
  transition: all .2s;
  margin-right: 25%;
  width: 800px;
  height: 180px;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
  }
  ::placeholder {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    color: ${uiColor};
  }
  :focus {
    padding-bottom: 6px;
    border-bottom-width: 6px;
  }
`;

export const QuestionInputType = ({ ...props }) => {
  switch (props.type) {
    case 'input':
      return <QuestionInput {...props}/>
      break;
    case 'textarea':
      return <QuestionTextarea {...props}/>;
      break;
    default:
      break;
  }
};

export const FormButton = styled(Soul).attrs({color: '#FFFFFF'})`
  color: #7252B7;
  display: flex;
  justify-content: space-around;
  align-self: flex-end;
  align-items: center;
  font-size: 30px;
  font-weight: 600;
  cursor: pointer;
  @media (max-width: 480px) {
    align-self: center;
    margin: 5vh auto;
    font-size: 25px;
  }
`;

export const FormWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${p => p.show ? '100%' : '0%'};
  height: ${p => p.show ? '100%' : '0%'};
  transition: all .2s;
  background: #8762D9;
  border-radius: ${p => p.show ? '0%' : '100%'};
  overflow: hidden;
`;

export const FormScreenWrapper = styled.div`
  color: #FFFFFF;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  transition: all .2s;
  width: 100vw;
`;

export const FormCompleted = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BackButtonLink = styled.a`
  text-decoration: none;
  position: fixed;
  left: 5vw;
  top: 11vw;
  cursor: pointer;
  z-index: 10;
  @media (max-width: 480px) {
    top: 5vw;
  }
`;

export const BackButton = (props) => <BackButtonLink {...props}>
  <img src={BackWhiteIcon} alt="back"/>
</BackButtonLink>;