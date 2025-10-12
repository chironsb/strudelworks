# StrudelWorks

Custom themes and songs for Strudel.

## Themes

### chirongreen
Dark theme with green accents.

**Installation:**
1. Copy `themes/chirongreen.mjs` to Strudel's `packages/codemirror/themes/`
2. Add to `themes.mjs`:
   ```javascript
   import chirongreen, { settings as chirongreenSettings } from './themes/chirongreen.mjs';
   export const themes = { chirongreen, ... };
   export const settings = { chirongreen: chirongreenSettings, ... };
   ```
3. Restart Strudel, select "chirongreen"

## Songs

### nightfall
Dark ambient piece.

## Usage
Load theme, copy song, Ctrl+Enter.