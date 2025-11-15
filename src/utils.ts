import * as vscode from 'vscode';

export const getCurrentExitor = () => {
	const editor = vscode.window.activeTextEditor;
	if (!editor) {
		vscode.window.showErrorMessage('No file is open!');
		return false;
	}

	return editor;
};