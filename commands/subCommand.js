"use strict";

import { Command } from '../command.js'
import { add, sub } from './math.js'

export var SubCommand = function (value) {
    return new Command(sub, add, value);
};