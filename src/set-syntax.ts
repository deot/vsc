import * as vscode from 'vscode';
import { getCurrentExitor } from './utils';

export const setSyntax = async () => {
	const editor = getCurrentExitor();
	if (!editor) {
		return;
	};
	await vscode.commands.executeCommand('workbench.action.editor.changeLanguageMode');
};