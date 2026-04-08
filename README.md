## Deot Preferences

Seamless viewport theme & Better preference settings for ST developer.

### Namespace Ownership Verification

Publisher/Namespace/GitHub ID/Owner: `deot`

This repository contains VS Code extensions published under the `deot` namespace on:

- [Open VSX Registry](https://open-vsx.org/)
- [VS Code Marketplace](https://marketplace.visualstudio.com/)

### Theme

- JavaScript

![image](https://github.com/deot/vsc/blob/main/static/js.png?raw=true)

- HTML

![image](https://github.com/deot/vsc/blob/main/static/html.png?raw=true)

- CSS

![image](https://github.com/deot/vsc/blob/main/static/css.png?raw=true)

- TypeScript

![image](https://github.com/deot/vsc/blob/main/static/ts.png?raw=true)

- Vue

![image](https://github.com/deot/vsc/blob/main/static/vue.png?raw=true)

### Commands

- `deot.pasteAndIndent`: paste and indent(st4)

```
{
	"key": "cmd+shift+v",
	"command": "deot.pasteAndIndent",
	"when": "editorTextFocus && !editorReadonly"
}
```

- `deot.2spaceToTab`: 2Spaces/Tab -> Tab

```
{
	"key": "cmd+2",
	"command": "deot.2spaceToTab",
	"when": "editorFocus"
}
```

- `deot.4spaceToTab`: 4Spaces/Tab -> Tab

```
{
	"key": "cmd+4",
	"command": "deot.4spaceToTab",
	"when": "editorFocus"
}
```


- `deot.setSyntax`: `cmd+shift+p` -> `ss/Set Syntax`

- `deot.setColumns.*`: One/Two/Three Columns

```
{
	"key": "cmd+alt+1",
	"command": "deot.setColumns.One"
},
{
	"key": "cmd+alt+2",
	"command": "deot.setColumns.Two"
},
{
	"key": "cmd+alt+3",
	"command": "deot.setColumns.Three"
}
```

- `deot.lsp.fix.all`: eslint/stylelint fix

```
{
	"key": "cmd+1",
	"command": "deot.lsp.fix.all",
	"when": "editorFocus"
}
```

### Menu

The right-click menu in the editor window. Setting `false` can disable it.

```
{
	'deot.showMenu': false
}
```

#### editor

> 原生未支持，扩展编辑器下的右键，支持后可移除

- Copy File Path
- Open Terminal Here
- Reveal In Finder

#### explorer

> 原生未支持，扩展文件区域下的右键，支持后可移除

- Duplicate(File/Folder)
- New File(File)
- New Folder(File)


### Sublime Merge

- [Just Publish For OpenVsx](https://open-vsx.org)
- [Document V1.5.2](https://github.com/giovdk21/vscode-sublime-merge)
- `vscsm` -> `deotsm`

```js
{
	"deotsm.debug": false, // Enable debug information in the output panel; default: false
	"deotsm.showInStatusBar": false, // Disables the status bar item if false; default: true
	"deotsm.statusBarItemPosition": "left", // Allows to position the status bar item on the left; default: "right"
	"deotsm.showBranchName": false, // Shows the current branch name in the status bar item; default: false
	"deotsm.smergeExecutablePath": "", // Allows to specify the full path to the "smerge" executable;
	// can also be an object with per-platform paths:
	//  "deotsm.smergeExecutablePath": {
	//    "linux": "/usr/bin/smerge",
	//    "osx": "/Applications/Sublime Merge.app/Contents/SharedSupport/bin/smerge",
	//    "windows": "C:\\Program Files\\Sublime Merge\\smerge.exe",
	//  },

	// Custom contextual menu items visibility:
	// (see inline help for details)
	"deotsm.showMenu.openInSublimeMerge": false,
	"deotsm.showMenu.fileHistoryInSublimeMerge": "always",
	"deotsm.showMenu.lineHistoryInSublimeMerge": "withSelection",
	"deotsm.showMenu.myCommitsInSublimeMerge": "never",
	"deotsm.showMenu.blameInSublimeMerge": "withSelection",
}
```

##### Sublime Merge Preferences

```json
{
	"editor_path": "/Applications/Cursor.app/Contents/Resources/app/bin/code",
	"editor_argument_format": "--goto ${file}:${line}:${col}"
}
```
