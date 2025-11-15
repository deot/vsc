import * as vscode from 'vscode';

export const createColumnsFactory = (v?: string) => async () => {
	const editor = vscode.window.activeTextEditor;
	const viewColumn = (vscode.ViewColumn[v as any] || 1) as number;
	if (viewColumn === 1) {
		await vscode.commands.executeCommand(`workbench.action.editorLayoutSingle`);
		return;
	} 
	if ([2, 3].includes(viewColumn)) {
		await vscode.commands.executeCommand(`workbench.action.editorLayout${v}Columns`);
	}
		
	if (editor && editor.document) {
		await vscode.window.showTextDocument(editor.document, {
			viewColumn,
			preview: false
		});
	}
};

export const setColumns = () => {
	const supported = ['One', 'Two', 'Three'];
	return supported.map(v => {
		return vscode.commands.registerCommand(
			`deot.setColumns.${v}`,
			createColumnsFactory(v)
		);
	});
};

