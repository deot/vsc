import * as vscode from 'vscode';

export const setSyntax = async () => {
	const editor = vscode.window.activeTextEditor;
	if (!editor) {
		vscode.window.showErrorMessage('No file is open!');
		return;
	}
	await vscode.commands.executeCommand('workbench.action.editor.changeLanguageMode');
};