import { tags as t } from '@lezer/highlight';
import { createTheme } from './theme-helper.mjs';

export const settings = {
  background: '#0f1117',               // fundal întunecat
  lineBackground: '#0f111799',         // fundal linie curentă (translucid)
  foreground: '#f8f8f2',               // text principal alb-cenușiu
  caret: '#f8f8f0',                    // cursor alb
  selection: 'rgba(255, 255, 255, 0.1)',   // selecție translucidă
  selectionMatch: 'rgba(255, 255, 255, 0.2)', // selecție secundară
  gutterBackground: '#0f1117',         // fundal numerotare linii
  gutterForeground: '#6272a4',         // gri-albăstrui pentru numerele de linie
  gutterBorder: 'transparent',         // fără delimitare verticală
  lineHighlight: 'rgba(255, 255, 255, 0.1)', // evidențiere linie activă
  dollarIdent: '#FFC107',              // identificatori $ — galben amber
};

const purple = '#BD93F9';              // mov lavandă
const blue = '#82AAFF';                // albastru deschis
const green = '#99D066';               // verde Material
const amber = '#FFC107';               // galben amber

export default createTheme({
  theme: 'dark',
  settings: {
    background: '#0f1117',
    foreground: '#f8f8f2',
    caret: '#f8f8f0',
    selection: 'rgba(255, 255, 255, 0.1)',
    selectionMatch: 'rgba(255, 255, 255, 0.2)',
    gutterBackground: '#0f1117',
    gutterForeground: '#6272a4',
    gutterBorder: 'transparent',
    lineHighlight: 'rgba(255, 255, 255, 0.1)',
  },
  styles: [
    { tag: t.comment, color: '#6272a4' },                        // comentarii — gri-albăstrui
    { tag: t.string, color: green },                             // stringuri — verde Material
    { tag: [t.atom, t.number], color: purple },                  // atomi / numere — mov lavandă
    { tag: [t.meta, t.variableName], color: '#f8f8f2' },        // metadate / variabile — alb neutru

    { tag: t.keyword, color: '#cf6edf' },                        // cuvinte cheie — mov aprins
    { tag: [t.labelName], color: amber },                        // etichete $drum, $bass etc. — galben amber
    { tag: [t.name, t.deleted, t.character, t.macroName], color: '#56c8d8' }, // identificatori speciali — cyan

    { tag: [t.tagName, t.arithmeticOperator], color: '#ff79c6' }, // tag-uri / operatori — roz neon
    { tag: [t.function(t.variableName), t.propertyName], color: blue }, // funcții / proprietăți — albastru
    { tag: t.atom, color: purple },                              // atomi — mov lavandă
  ],
});
