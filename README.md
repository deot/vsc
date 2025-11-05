## Deot Preferences

### Theme

- JavaScript

![image](https://dev.azure.com/zrd0921/89a6d063-bc74-42ce-8475-cb2afc486190/_apis/git/repositories/380ad028-8b99-4d22-b602-4199ecfa5323/items?path=%2Fstatic%2Fjs.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

- HTML

![image](https://dev.azure.com/zrd0921/89a6d063-bc74-42ce-8475-cb2afc486190/_apis/git/repositories/380ad028-8b99-4d22-b602-4199ecfa5323/items?path=%2Fstatic%2Fhtml.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

- CSS

![image](https://dev.azure.com/zrd0921/89a6d063-bc74-42ce-8475-cb2afc486190/_apis/git/repositories/380ad028-8b99-4d22-b602-4199ecfa5323/items?path=%2Fstatic%2Fcss.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

- TypeScript

![image](https://dev.azure.com/zrd0921/89a6d063-bc74-42ce-8475-cb2afc486190/_apis/git/repositories/380ad028-8b99-4d22-b602-4199ecfa5323/items?path=%2Fstatic%2Fts.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

- Vue

![image](https://dev.azure.com/zrd0921/89a6d063-bc74-42ce-8475-cb2afc486190/_apis/git/repositories/380ad028-8b99-4d22-b602-4199ecfa5323/items?path=%2Fstatic%2Fvue.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0)

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
- [Document V1.4.1](https://github.com/giovdk21/vscode-sublime-merge)
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
