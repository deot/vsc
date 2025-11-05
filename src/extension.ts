import * as vscode from 'vscode';
import { pasteAndIndent } from './paste-and-indent';
import { formatToIndentBase4, formatToIndentBase2 } from './space-to-tab';
import { setSyntax } from './set-syntax';
import { duplicateFile } from './duplicate-file';

export function activate(context: vscode.ExtensionContext) {

	context.subscriptions.push(
		vscode.commands.registerCommand('deot.debug', () => {
			vscode.window.showInformationMessage('Debug !!');
		}),
		vscode.commands.registerCommand('deot.pasteAndIndent', pasteAndIndent),
		vscode.commands.registerCommand('deot.2spaceToTab', formatToIndentBase2),
		vscode.commands.registerCommand('deot.4spaceToTab', formatToIndentBase4),
		vscode.commands.registerCommand('deot.duplicateFile', duplicateFile),
		vscode.commands.registerCommand('deot.setSyntax', setSyntax)
	);
}

export function deactivate() {}
