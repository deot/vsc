import { basename, dirname } from "path";
import { Uri, window, workspace, TextDocument } from "vscode";

function getCopyName(original: string, attempt: number): [string, number] {
	let lastIndex = original.lastIndexOf(".");
	if (original.includes(".test.")) {
		lastIndex -= 5;
	}

	let name = lastIndex === -1 ? original : original.slice(0, lastIndex);
	let ext = lastIndex === -1 ? "" : original.slice(lastIndex);

	name += "-copy";
	name += attempt ? attempt + 1 : "";

	return [name + ext, name.length];
}

async function executeCopy(uri: Uri, attempt: number = 0) {
	const { fsPath } = uri;
	const file = basename(fsPath);
	const [copyName, copyNameLength] = getCopyName(file, attempt);

	const input = await window.showInputBox({
		title: 'confirm',
		value: copyName,
		valueSelection: [0, copyNameLength]
	});

	if (input === void 0) { return; }
	const directory = Uri.file(dirname(fsPath));
	const oldFile = Uri.file(fsPath);
	const newFile = Uri.joinPath(directory, input);

	await workspace.fs.copy(oldFile, newFile);

	try {
		if (newFile.path.endsWith('.ipynb')) {
			const doc = await workspace.openNotebookDocument(newFile);
			await window.showNotebookDocument(doc);
		} else {
			const doc = await workspace.openTextDocument(newFile);
			await window.showTextDocument(doc);
		}
		// await commands.executeCommand("revealInExplorer");
		// await commands.executeCommand("renameFile");
	} catch (e) {
		console.log(e);
	}
}

const _duplicate = async (uri: Uri) => {
	let attempt = 0;
	let err = null;
	while (attempt < 10) {
		try {
			await executeCopy(uri, attempt);
			return;
		} catch (error: any) {
			attempt++;
			err = error && 'message' in error ? error?.message: error?.toString();
		}
	}

	window.showErrorMessage("Refusing to overwrite existing copy: " + err);
};

export const duplicateFile = (uri: TextDocument | Uri) => {
	if (!uri || !(<Uri>uri).fsPath) {
		const editor = window.activeTextEditor;
		if (!editor) { return; };
		return _duplicate(<Uri>editor.document.uri);
	}

	_duplicate(<Uri>uri);
};
