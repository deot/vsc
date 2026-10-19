import * as vscode from 'vscode';

export const copyFileLine = async () => {
	const editor = vscode.window.activeTextEditor;
	if (!editor || editor.document.isUntitled) {
		return;
	}

	const uri = editor.document.uri;
	const filePath = vscode.workspace.getWorkspaceFolder(uri)
		? vscode.workspace.asRelativePath(uri, false)
		: uri.fsPath;
	const { start, end } = editor.selection;
	const startLine = start.line + 1;
	const endLine = end.line > start.line && end.character === 0 ? end.line : end.line + 1;
	const lines = startLine === endLine ? `${startLine}` : `${startLine}-${endLine}`;

	await vscode.env.clipboard.writeText(`@${filePath.replace(/\\/g, '/')}:${lines} `);
};
