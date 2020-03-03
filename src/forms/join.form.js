import React from 'react';
import FormWizard from '../components/form-wizard/form-wizard.component';
import { FormSoul } from '../components/form-wizard/form-wizard.style';

function JoinForm() {
  return <FormSoul stop={true} size={window.innerWidth}>
    <FormWizard />
  </FormSoul>;
}

export default JoinForm;