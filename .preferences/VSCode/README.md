## 我的配置信息

### 扩展

- Vue(Official)
- ESLint
- StyleLint
```
// 关闭默认的校验规则
"scss.validate": false,
// 注意 vue需要stylelint-config-recommended-vue扩展，否则vue文件提示`Unknown word (CssSyntaxError)Stylelint(CssSyntaxError)`
"stylelint.validate": [
  "css",
  "postcss",
  "less",
  "scss",
  "vue"
],
```
- VSCode Great Icons
- Color Highlight
- Deot Preferences

### 已集成到Deot Preferences
- [Sublime Merge for VSCode - Giovanni Derks](https://github.com/giovdk21/vscode-sublime-merge)


### 其他

- 新版已默认支持，如果要区分大小写`cmd+f`改下就行
```
{
  "key": "cmd+d",
  "command": "editor.action.addSelectionToNextFindMatch",
  "when": "editorFocus"
}
```