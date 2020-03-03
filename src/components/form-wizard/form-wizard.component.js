import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  QuestionWrapper,
  QuestionTitle,
  QuestionInput,
  FormButton,
  FormSoul
} from './form-wizard.style';
import Animate, {
  Flash,
  Bounce
} from 'animate-css-styled-components';
import { setStop } from '../soul/soul.components';
import { isStyledComponent } from 'styled-components';

const props = {
  sendTo: 'attilio' + '@' + 'ninjacampus.io',
  questions: [
    {
      'title': 'Come ti chiami?',
      'name': 'name',
      'placeholder': 'Marco Giuseppini'
    },
    {
      'title' : 'Come ti descriveresti?',
      'name' : 'bio',
      'placeholder' : 'Marco Giuseppini'
    }
  ]
};

function FormWizard() {
  const [step, setStep] = useState(0);
  const [animationState, setAnimationState] = useState("paused");
  const { register, handleSubmit, getValues, reset, control } = useForm();
  const onSubmit = data => console.log(data);
  
  function handleClick(){
    const values = getValues();
    if (step < 2 && values[props.questions[step].name] != '') {
      setStep(step + 1);
      setAnimationState("running");
    } else {
      
    }
    
  }

  return (
    <FormSoul stop={true} size={window.innerWidth}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {(question => {
          return <QuestionWrapper>
            <Animate
              Animation={[Flash, Bounce]}
              duration="0.8s"
              delay="0.2s"
              playState={animationState}>
              <QuestionTitle>{question.title}</QuestionTitle>
                <Controller
                  as = {<QuestionInput placeholder={question.placeholder} name={question.name} ref={register({ required: true })}/>}
                  name = {question.name}
                  control = {control}
                  defaultValue = ""
                />
            </Animate>
          </QuestionWrapper>
        })(props.questions[step])}
        <FormButton size={0.12*window.innerWidth} onClick={() => handleClick()}>Continua</FormButton>
      </form>
    </FormSoul>
  );
}

export default FormWizard;