import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  QuestionWrapper,
  QuestionTitle,
  QuestionInput,
  FormSoul
} from './form-wizard.style';
import { setStop } from '../soul/soul.components';

const props = {
  sendTo: 'attilio' + '@' + 'ninjacampus.io',
  questions: [
    {
      'title': 'Come ti chiami?',
      'name': 'name',
      'placeholder': 'Marco Giuseppini'
    }
  ]
};

function FormWizard() {
  const [step, setStep] = useState(0);
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data); 
   
  return (
    <FormSoul stop={true} size={window.innerWidth}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {(question => {
          return <QuestionWrapper>
            <QuestionTitle>{question.title}</QuestionTitle>
            <QuestionInput placeholder={question.placeholder} name={question.name} ref={register({ required: true })}/>
          </QuestionWrapper>
        })(props.questions[step])}
      </form>
    </FormSoul>
  );
}

export default FormWizard;