/* @license
 * This file is part of the Game Closure SDK.
 *
 * The Game Closure SDK is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.

 * The Game Closure SDK is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.

 * You should have received a copy of the GNU General Public License
 * along with the Game Closure SDK.  If not, see <http://www.gnu.org/licenses/>.
 */

"use import";

import sdkPlugin;
import .GUI;

from util.browser import $;

//no longer used - go look at index.html instead.
exports = Class(sdkPlugin.SDKPlugin, function(supr) {
	this._def = {
		id: 'simulatePane',
		children: [
			{
				tag: 'iframe',
				id: 'simulatePaneFrame'
			}
		]
	};

	this.onBeforeShow = function() {
		if (this._project == this._lastProject) { return; }
		this._lastProject = this._project;

		var frame = this.simulatePaneFrame;
		
		//show a message to choose a project
		if (!this._project) {
			frame.src = "javascript:document.body.innerHTML='Select a project'";
		} else {
			frame.src = '/simulate/' + this._project.appID + '/#hasServer=0&clients=[{"displayName":"woot","device":"iphone","rotation":1,"entry":"intro"}]';
		}
	};

	this.onBeforeHide = function() {
		this._lastProject = null;
		document.getElementById('simulatePaneFrame').src = 'about:blank';
	};
});
