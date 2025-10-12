# StrudelWorks

A collection of custom Strudel themes and musical pieces created by Chiron.

## Contents

- **themes/**: Custom CodeMirror themes for Strudel
- **pieces/**: Musical compositions created with Strudel

## Themes

### chirongreen

A dark theme with green accents. Features:
- Dark background (`#0f1117`) for comfortable coding
- Green strings (`#99D066`) and amber identifiers (`#FFC107`)
- Purple keywords (`#cf6edf`) and blue functions (`#82AAFF`)
- Optimized for Strudel syntax highlighting

## Installation

### Installing the chirongreen theme

1. Copy `themes/chirongreen.mjs` to your Strudel installation:
   ```bash
   cp themes/chirongreen.mjs /path/to/strudel/packages/codemirror/themes/
   ```

2. Add the theme to `packages/codemirror/themes.mjs`:
   
   Add the import at the top:
   ```javascript
   import chirongreen, { settings as chirongreenSettings } from './themes/chirongreen.mjs';
   ```
   
   Add to the `themes` object:
   ```javascript
   export const themes = {
     strudelTheme,
     chirongreen,  // <-- add this line
     // ... other themes
   };
   ```
   
   Add to the `settings` object:
   ```javascript
   export const settings = {
     strudelTheme: strudelThemeSettings,
     chirongreen: chirongreenSettings,  // <-- add this line
     // ... other settings
   };
   ```

3. Restart Strudel and select "chirongreen" from the theme menu.

## Pieces

### nightfall

## Usage

1. Load the theme following the installation instructions above
2. Copy any piece from `pieces/` into your Strudel editor
3. Press Ctrl+Enter to start the composition

## License

This project is released under the MIT License. Feel free to use and modify the themes and pieces for your own projects.

## Contributing

Feel free to submit issues or pull requests if you have suggestions for improvements or new themes/pieces.
