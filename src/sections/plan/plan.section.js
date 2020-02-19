import React from 'react';
import { PlanBody, H1, H3, P, B, PlanWrapper } from './plan.style';

export default function PlanSection() {
  return <PlanWrapper>
    <PlanBody>
      <H1>Programma</H1>
      <H3>Usciamo spesso fuori programma</H3>
        <B>XML</B>
        <P>
          tag<br/>
          attributi<br/>
          commenti<br/>
          formattazione
        </P>

        <B>HTML</B>
        <P>
          head e intestazioni, metatags, doctype<br/>
          titoli, paragrafi, testi, corsivo, grassetto<br/>
          citazioni, code, sup e sub, small, time<br/>
          elenchi puntati, numerati e custom<br/>
          tabelle, intestazioni, corpi, colonne e righe, multi riga, multicolonna<br/>
          link, ancore, percorsi relativi e assoluti<br/>
          immagini, svg e base64<br/>
          audio e video<br/>
          mappe immagine<br/>
          iframe<br/>
          form, input, select, checkbox, radio, textarea, button, submit, reset, file<br/>
          SEO
        </P>

        <B>CSS</B>
        <P>
          fogli di stile interni ed esterni, stili inline<br/>
          regole, comenti, direttive<br/>
          selettori: classi, id, attributi, stati, pseudo classi e pseudo elementi<br/>
          ereditarietà e conflitti<br/>
          width, height, overflow<br/>
          padding, margin, border, outline<br/>
          background<br/>
          stile testo<br/>
          cursore<br/>
          display, visibility<br/>
          position e zindex<br/>
          flex<br/>
          media query
        </P>

        <B>JS</B>
        <P>
          file di script esterni e tag script<br/>
          variabili, costanti, dichiarazioni<br/>
          stringhe, numeri e altri tipo di dati<br/>
          espressioni e operatori<br/>
          conversioni fra i tipi<br/>
          array e oggetti, metodi<br/>
          controllo di flusso (if/then/else, switch/case, while, do while, for, break e continue)<br/>
          global e local: scope<br/>
          Classe Math<br/>
          Regex e match<br/>
          Date e orari<br/>
          JSON<br/>
          metodi avanzati su array e oggetti (map, reduce, filter)<br/>
          ES6, Babel, classi, arrow function<br/>
          DOM, window, query e manipolazione<br/>
          Eventi, callback, promise, varianti es6<br/>
          AJAX, fetch: ieri, oggi, domani<br/>
          jQuery: querying, eventi, manipolazioni
        </P>

        <B>React</B>
        <P>
          fondamenti component driven, vs jQuery, vs Angular<br/>
          tools sviluppo: accenni gulp, npm, npx, node, react-scripts<br/>
          JSX, map, reduce, ternary, expressions<br/>
          componenti e props<br/>
          gestione state e immutability<br/>
          component lifecycle<br/>
          hooks: useState, useEffect, useMemo, useContext<br/>
          sample react app<br/>
          navigazione con react router
        </P>

        <B>Strumenti sviluppo</B>
        <P>
          Editor<br/>
          Terminale, zsh<br/>
          ssh, deploy, continuous integration<br/>
          Git<br/>
          NPM, Node<br/>
          DNS<br/>
          Apache, PHP, MySql<br/>
          Postman
        </P>
    </PlanBody>
  </PlanWrapper>
};