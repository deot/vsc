import * as vscode from 'vscode';

const setSyntax = async (languageId: string) => {
	const activeEditor = vscode.window.activeTextEditor;

	if (activeEditor) {
		await vscode.languages.setTextDocumentLanguage(activeEditor.document,
		languageId);
	}
};

export const setSyntaxs = () => {
	const supportedLanguages = [
		'c',
		'cpp',
		'csharp',
		'css',
		'dockerfile',
		'go',
		'handlebars',
		'html',
		'java',
		'javascript',
		'javascriptreact',
		'jsx',
		'json',
		'jsonc',
		'latex',
		'less',
		'lua',
		'makefile',
		'markdown',
		'objective-c',
		'objective-cpp',
		'php',
		'plaintext',
		'powershell',
		'pug',
		'python',
		'r',
		'ruby',
		'rust',
		'scss',
		'sass',
		'shellscript',
		'sql',
		'stylus',
		'swift',
		'typescript',
		'typescriptreact',
		'vb',
		'vue',
		'vue-html',
		'xml',
		'yaml'
	];

	return supportedLanguages.map(command => {
		return vscode.commands.registerCommand(
			`deot.setSyntax.${command}`,
			() => setSyntax(command)
		);
	});
};