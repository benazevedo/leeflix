import { app } from '@electron/remote';
import path from 'path';

/**
 * Check if the app is running in Electron.
 */
export function isElectron(): boolean {
  return !!(window && window.process && window.process.type);
}

/**
 * Resolve file paths for Electron (file:// protocol).
 * If not running in Electron, return the relative path.
 */
export function resolvePathForElectron(filePath: string): string {
  if (isElectron()) {
    const appPath = app.getAppPath(); // Get the base path of the Electron app
    return `file://${path.join(appPath, 'public', filePath)}`;
  }
  return `/${filePath}`; // Use relative path for non-Electron environments
}
