// The module 'vscode' contains the VS Code extensibility API
// Import the necessary extensibility types to use in your code below
import * as vscode from 'vscode';

/**
 * get range of indent target
 * @export
 * @param editor ~
 * @param from ~
 * @returns ~
 */
export function getRange(editor: vscode.TextEditor, from: number): Array<{
	range: vscode.Range;
	indents: number;
}> {
	// const lineRegex = /\n.*/g;
	const regex = /^\s+/;
	const document = editor.document;
	const source = document.getText();

	const matches: any[] = [];

	source.split('\n').forEach((line, index) => {
		const match = regex.exec(line);
		const spaceNumber = match && match[0] && match[0].length || 0;
		const indents = Math.floor(spaceNumber / from);

		if (spaceNumber && (spaceNumber / from === indents)) {
			matches.push({
				range: new vscode.Range(new vscode.Position(index, 0), new vscode.Position(index, spaceNumber)),
				indents
			});
		}
	});

	return matches;
}

/**
 * get spaces for replacement
 * @export
 * @param target ~
 * @param indents ~
 * @returns ~
 */
export function getSpaces(target: string, indents: number): string {
	let res = '';

	for (let i = 0; i < indents; i++) {
		res += target;
	}

	return res;
}


const getGlobalTabSize = () => {
    return Number(vscode.workspace.getConfiguration('editor').get('tabSize')) || 4;
};

const createTabIndentFactory = (from: number) => async () => {
	const tabSize = getGlobalTabSize();
	const editor = vscode.window.activeTextEditor!;
	const document = editor.document;

	await vscode.commands.executeCommand('editor.action.detectIndentation');
	await vscode.commands.executeCommand('editor.action.indentationToSpaces');
	editor.options.tabSize = from;

	if (!editor) {
		vscode.window.showErrorMessage('No file is open!');

		return;
	}

	try {
		if (from === 2) {
			const matches = getRange(editor, from);

			await editor.edit((edit) => {
				for (const match of matches) {
					const { range, indents } = match;
					const value = getSpaces('    ', indents);

					edit.replace(range, value);
				}
			});
		}
		
		// 设置tabSize
		editor.options.tabSize = tabSize;
		await vscode.commands.executeCommand('editor.action.indentationToTabs');
	} catch (err) {
		vscode.window.showErrorMessage(`Indent switch error ${err}`);
	}
};

export const formatToIndentBase2 = createTabIndentFactory(2);
export const formatToIndentBase4 = createTabIndentFactory(4);
