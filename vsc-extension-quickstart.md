## 如何调试

1. F5 打开Debug模式，新窗口打开当前文件夹，定位到`demo/*`
2. 按下 `Command+Shift+P` 打开命令面板输入`Developer: Inspect Editor Tokens and Scopes`, 光标查看属性
3. 直接修改`themes/deot-theme-color-theme.json`

## 其他技巧

- 主题配置的所有属性：https://code.visualstudio.com/api/references/theme-color
- 打开`Developer Tools`查看样式，看是否有`Css Vars`支持

## 如何发布

> 确保登录：vsce login deot 
> 获取Personal Access Token（Full Access(避免发版时401)）：https://dev.azure.com/

1. 手动调整版本号(package.json)
2. `npm install -g @vscode/vsce`
3. `npm run publish`
4. 查看发版进度`https://marketplace.visualstudio.com/manage/publishers/deot`

