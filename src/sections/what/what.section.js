import React from 'react';
import { WhatBody, H1, H3, P, WhatWrapper } from './what.style';

export default function WhatSection() {
  return <WhatWrapper>
    <WhatBody>
      <H1>What??</H1>
      <H3>Un’unica soluzione</H3>
      <P>NinjaCampus è un corso gratuito che accompagna informatici e coders verso una metodologia ninja, fatta di strumenti, competenze e predisposizione alla scelta migliore.</P>
      <P>Il corso base ha una durata di un mese: mezza giornata a settimana con sfide sugli argomenti trattati.
Con un progetto finale sarà possibile lavorare con il team di sviluppo.</P>
      <P>Sei spaesato e non sai da dove cominciare? <br/>Vorresti metterti alla prova e sperimentare con le tecnologie del momento?</P>
      <P>Con NinjaCampus verrai accompagnato da un sensei nel tuo percorso di formazione, per scoprire:</P>
      <P>— tecnologie all’avanguardia</P>
      <P>— un percorso alternativo all’università</P>
      <P>— una comunità attiva su eventi e novità</P>
      <P>— lavoro in remoto e collocamento</P>
    </WhatBody>
  </WhatWrapper>
};