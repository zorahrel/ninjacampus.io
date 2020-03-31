import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  QuestionWrapper,
  QuestionTitle,
  QuestionInputType,
  FormTitle,
  FormButton,
  FormScreenWrapper,
  FormCompleted,
  Wrapper
} from './form-wizard.style';
import Animate, { Bounce } from 'animate-css-styled-components';
import {
  H1,
  H3,
  B,
} from '../../common/style.common';

function FormWizard(props) {
  const [step, setStep] = useState(0);
  const [showError, setShowError] = useState(false);
  const { handleSubmit, getValues, reset, control } = useForm();
  const onSubmit = data => console.log(data);
  const completed = step === props.questions.length;
  
  function handleNext() {
    const values = getValues();
    if (values[props.questions[step].name] && values[props.questions[step].name] != "") {
      setShowError(false);
      setStep(step + 1);
    } else {
      setShowError(true);
    }
  }

  return (
    <FormScreenWrapper>
      <Wrapper>
        <FormTitle>
          <H1>Unisciti al dojo</H1>
          <H3>Candidati per i corsi</H3>
        </FormTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          {props.questions.map((question, index) => {
            return <QuestionWrapper key={index} show={step === index} prev={step>index}>
              <div>
                <Animate Animation={Bounce} duration="1.5s" delay="0.3s">
                  <QuestionTitle>{question.title}</QuestionTitle>
                </Animate>
                <Controller
                  {...question}
                  as={QuestionInputType}
                  control={control}
                  defaultValue=""
                  rules={{ required: true }} />
              </div>
              <FormButton size={0.12*window.innerWidth} onClick={() => handleNext()}>Continua</FormButton>
            </QuestionWrapper>
          })}
          <QuestionWrapper show={completed}>
            <FormCompleted>
              <B>Grazie per la candidatura!</B>
              <small>Ti informeremo dell’esito in 2 giorni lavorativi</small>
            </FormCompleted>
            <FormButton size={0.12*window.innerWidth} onClick={() => props.onClose()}>Torna al sito</FormButton>
          </QuestionWrapper>
        </form>
      </Wrapper>
    </FormScreenWrapper>
  );
}

export default FormWizard;