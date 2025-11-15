import * as vscode from 'vscode';
import { getCurrentExitor } from './utils';

export const lintJS = async () => {
	const editor = getCurrentExitor();
	if (!editor) {
		return;
	};
	await vscode.commands.executeCommand('eslint.executeAutofix');
};

export const restartJS = async () => {
	const editor = getCurrentExitor();
	if (!editor) {
		return;
	};
	await vscode.commands.executeCommand('eslint.restart');
};

export const lintCSS = async () => {
	const editor = getCurrentExitor();
	if (!editor) {
		return;
	};
	await vscode.commands.executeCommand('stylelint.executeAutofix');
};

export const restartCSS = async () => {
	const editor = getCurrentExitor();
	if (!editor) {
		return;
	};
	await vscode.commands.executeCommand('stylelint.restart');
};

export const restartVue = async () => {
	const editor = getCurrentExitor();
	if (!editor) {
		return;
	};
	await vscode.commands.executeCommand('vue.action.restartServer');
};

export const restartTS = async () => {
	const editor = getCurrentExitor();
	if (!editor) {
		return;
	};
	await vscode.commands.executeCommand('typescript.restartTsServer');
};

export const lintAll = async () => {
	await lintJS();
	await lintCSS();
};

export const restartAll = async () => {
	await restartJS();
	await restartCSS();
	await restartVue();
	await restartTS();
};

export const setLSPs = () => {
	const supported = {
		'fix.all': lintAll,
		'fix.js': lintJS,
		'fix.css': lintCSS,
		'restart.all': restartAll,
		'restart.js': restartJS,
		'restart.css': restartCSS,
		'restart.vue': restartVue,
		'restart.ts': restartTS
	};
	return Object.entries(supported).map(([command, lint]) => {
		return vscode.commands.registerCommand(
			`deot.lsp.${command}`,
			lint
		);
	});
};