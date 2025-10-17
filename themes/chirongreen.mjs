import { tags as t } from '@lezer/highlight';
import { createTheme } from './theme-helper.mjs';

export const settings = {
  background: '#0f1117',               
  lineBackground: '#0f111799',         
  foreground: '#f8f8f2',               
  caret: '#f8f8f0',                    
  selection: 'rgba(255, 255, 255, 0.1)',   
  selectionMatch: 'rgba(255, 255, 255, 0.2)', 
  gutterBackground: '#0f1117',         
  gutterForeground: '#6272a4',         
  gutterBorder: 'transparent',         
  lineHighlight: 'rgba(255, 255, 255, 0.1)',
  dollarIdent: '#FFC107',             
};

const purple = '#BD93F9';              
const blue = '#82AAFF';                
const green = '#99D066';               
const amber = '#FFC107';               

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
    { tag: t.comment, color: '#6272a4' },                        
    { tag: t.string, color: green },                            
    { tag: [t.atom, t.number], color: purple },                 
    { tag: [t.meta, t.variableName], color: '#f8f8f2' },        

    { tag: t.keyword, color: '#cf6edf' },                        
    { tag: [t.labelName], color: amber },                        
    { tag: [t.name, t.deleted, t.character, t.macroName], color: '#56c8d8' }, 

    { tag: [t.tagName, t.arithmeticOperator], color: '#ff79c6' }, 
    { tag: [t.function(t.variableName), t.propertyName], color: blue }, 
    { tag: t.atom, color: purple },                              
  ],
});
