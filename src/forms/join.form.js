import React, { useState, useEffect } from 'react';
import FormWizard from '../components/form-wizard/form-wizard.component';
import { FormSoul } from '../components/form-wizard/form-wizard.style';

function JoinForm() {
  const [hideForm, setHideForm] = useState(true);

  return <FormSoul stop={true} size={window.innerWidth} hideForm={true}>
    <FormWizard />
  </FormSoul>;
}

export default JoinForm;