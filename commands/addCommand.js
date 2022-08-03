"use strict";

import { Command } from '../command.js'
import { add, sub } from './math.js'

export var AddCommand = function (value) {
    return new Command(add, sub, value);
};