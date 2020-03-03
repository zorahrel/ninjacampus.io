import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import isset from 'isset';
import {
  QuestionWrapper,
  QuestionTitle,
  QuestionInputType,
  FormTitle,
  FormButton,
  FormSoul,
  FormCompleted
} from './form-wizard.style';
import Animate, {
  Bounce
} from 'animate-css-styled-components';
import {
  H1,
  H3,
  P,
  B,
} from '../../common/style.common';
import { setStop } from '../soul/soul.components';
import { isStyledComponent } from 'styled-components';
import { hideForm, setHideForm } from '../../forms/join.form';

const props = {
  sendTo: 'attilio' + '@' + 'ninjacampus.io',
  questions: [
    {
      'title': 'Come ti chiami?',
      'name' : 'name',
      'type' : 'input',
      'placeholder': 'Marco Giuseppini'
    },
    {
      'title' : 'Come ti descriveresti?',
      'name' : 'bio',
      'type': 'textarea',
      'placeholder' : 'Marco Giuseppini'
    }
  ]
};

function FormWizard() {
  const [step, setStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [showError, setShowError] = useState(false);
  const { register, handleSubmit, getValues, reset, control } = useForm();
  const rules = { required: true };
  const onSubmit = data => console.log(data);
  
  function handleClick() {
    const values = getValues();
    if (isset(values[props.questions[step].name]) && values[props.questions[step].name] != "") {
      if (step < props.questions.length - 1) {
        setShowError(false);
        setStep(step + 1);
      } else {
        setStep(step + 1);
        setCompleted(true);
      }
    } else {
      setShowError(true);
    }
  }

  return (
    <FormSoul stop={true} size={window.innerWidth}>
      <FormTitle>
        <H1>Unisciti al dojo</H1>
        <H3>Candidati per i corsi</H3>
      </FormTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        {completed && <FormCompleted>
          <B>Grazie per la candidatura!
          Ti informeremo dell’esito in 2 giorni lavorativi</B>
          <FormButton size={0.12*window.innerWidth} onClick={() => window.close()}>Torna al sito</FormButton>
          </FormCompleted>}
        {props.questions.map((question, index) => {
          return <QuestionWrapper show={step === index} prev={step>index}>
            <Animate
              Animation={Bounce}
              duration="1.5s"
              delay="0.3s">
              <QuestionTitle>{question.title}</QuestionTitle>
              <Controller
                {...question}
                as={QuestionInputType}
                control={control}
                defaultValue=""
                rules={rules}
              />
            </Animate>
            <FormButton size={0.12*window.innerWidth} onClick={() => handleClick()}>Continua</FormButton>
          </QuestionWrapper>
        })}
      </form>
    </FormSoul>
  );
}

export default FormWizard;