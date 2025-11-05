- [Just Publish For OpenVsx](https://open-vsx.org)
- [Document V1.4.1](https://github.com/giovdk21/vscode-sublime-merge)
- `vscsm` -> `deotsm`

## Configuration

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
