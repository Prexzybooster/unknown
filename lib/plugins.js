/** Copyright (C) 2024.
Licensed under the  MIT License;
You may not use this file except in compliance with the License.
* @project_name : QUEEN-PRIYA-V1
* @author : PREXZYVILLA
* @credits : @author
* @note : you can copy this codes but dont copy!❤️🙏🏼
**/

const config = require("../config");
const commands = [];

function clash(commandInfo, func) {
commandInfo.function = func;
if (commandInfo.pattern) {
commandInfo.pattern =
new RegExp(`${config.HANDLERS}( ?${commandInfo.pattern})`, "is") || false;
}
commandInfo.dontAddCommandList = commandInfo.dontAddCommandList || false;
commandInfo.fromMe = commandInfo.fromMe || false;
commandInfo.type = commandInfo.type || "misc";
commands.push(commandInfo);
return commandInfo;
}

module.exports = {clash, commands};
