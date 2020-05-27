import * as Local from '@getflywheel/local';
import * as LocalMain from '@getflywheel/local/main';

export default function(context) {
    const { notifier, electron } : { notifier: any, electron: typeof Electron } = context;

    electron.ipcMain.on('launch-terminal-local', async (event, siteId: Local.Site['id']) => {
        const site = LocalMain.SiteData.getSite(siteId);
        try {
          var open = 'open -a ';
          var app  = 'iTerm ';
          var path = site.paths.webRoot
          var escapedPath = path.replace(/(\s)/, "\\ ");
          var exec = open.concat(app, escapedPath);

          require('child_process').exec( exec );
        } catch (e) {
            notifier.notify({
                title: 'Open Terminal',
                message: `Unable to open iTerm`,
            });

            electron.dialog.showErrorBox('Open Terminal', e.stack);
        }
    });
}
