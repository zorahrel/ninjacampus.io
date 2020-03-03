import React from 'react';
import styled from 'styled-components';
import Soul from '../soul/soul.components';

const uiColor = '#7252B7';

export const Wrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const FormTitle = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 27%;
  align-items: flex-start;
`;

export const QuestionWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-around;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, ${p => p.show ? '-50%' : (p.prev ? '100vh' : '-100vh')});
  transition: all .3s;
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
`;

export const QuestionTextarea = styled.textarea`
  font-weight: 700;
  resize: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 30px;
  border: 2px solid ${uiColor};
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
  
`;

export const FormSoul = styled(Soul)`
  color: #FFFFFF;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
`;

export const FormCompleted = styled.div`
  position: fixed;
  top: 50%;
  left: 12%;
  display: flex;
  align-items: flex-end;
  margin-right: 35%;
`;