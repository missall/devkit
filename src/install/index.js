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

var clc = require('cli-color');
var fs = require('fs');
var ff = require('ff');
var path = require('path');
var wrench = require('wrench');

var common = require('../common');
var logger = new common.Formatter("install");

var addonManager = require('../AddonManager');
var Version = require('../shared/Version');

var argv = require('optimist')
	.usage('Install packages from github. Defaults to the gameclosure account')
	.boolean('force')
		.alias('force', 'f')
		.default('force', false)
	.boolean('ssh')
		.describe('ssh', 'Install addon through SSH')
		.default('ssh', false);

exports.install = function (addon, version, cb) {
	if (!addon) {
		argv.showHelp();
		process.exit(2);
	}

	argv = argv.argv; //lolz

	addonManager.install(addon, {version: version, force: argv.force, isSSH: argv.ssh}, function (err) {

	});
}

exports.uninstall = function(addon) {
	if (!addon) {
		process.exit(2);
	}

	addonManager.uninstall(addon, function (err) {

	});
};
