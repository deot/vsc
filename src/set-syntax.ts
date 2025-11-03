import * as vscode from 'vscode';

const setSyntax = async (languageId: string) => {
	const activeEditor = vscode.window.activeTextEditor;

	if (activeEditor) {
		await vscode.languages.setTextDocumentLanguage(activeEditor.document, languageId);
	}
};

export const setSyntaxs = () => {
	const supportedLanguages = ['abap', 'bat', 'bibtex', 'clojure', 'coffeescript', 'c', 'cpp', 'csharp', 'css', 'diff', 'dockerfile', 'fsharp', 'git-commit', 'git-rebase', 'go', 'groovy', 'handlebars', 'haml', 'html', 'ini', 'java', 'javascript', 'javascriptreact', 'jsx', 'json', 'jsonc', 'latex', 'less', 'lua', 'makefile', 'markdown', 'objective-c', 'objective-cpp', 'perl', 'perl6', 'php', 'plaintext', 'powershell', 'jade', 'pug', 'python', 'r', 'razor', 'ruby', 'rust', 'scss', 'sass', 'shaderlab', 'shellscript', 'slim', 'sql', 'stylus', 'swift', 'typescript', 'typescriptreact', 'tex', 'vb', 'vue', 'vue-html', 'xml', 'xsl', 'yaml'];

	return supportedLanguages.map(command => {
		return vscode.commands.registerCommand(
			`deot.setSyntax.${command}`, () => setSyntax(command)
		);
	});
};