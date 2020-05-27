import React from 'react';
import { Button,TextButton, TableListRow } from '@getflywheel/local-components';
import { ipcRenderer } from 'electron';

export default function (context) {

	const { hooks } = context;
	//Debugging
	//const remote = context.electron.remote
	//remote.getCurrentWindow().openDevTools()


	hooks.addContent('siteInfoUtilities', (site) => {
		return (
			<TableListRow key="open-terminal-local" label="Terminal">
				<TextButton
					style={{paddingLeft: 0}}
					onClick={(event) => {
						ipcRenderer.send('launch-terminal-local', site.id);
					}}
				>
					Open Terminal
				</TextButton>

				<p>
					<small>Will open default terminal Application</small>
				</p>
			</TableListRow>
		);
	});

	hooks.addContent('SiteInfo_Top_TopRight', (site) => {
		return (
			<Button
				onClick={(event) => {
					ipcRenderer.send('launch-terminal-local', site.id);
				}}
			>
				iTerm
			</Button>
		);
	});
}
