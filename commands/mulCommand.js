"use strict";

import { Command } from '../command.js'
import { mul, div } from './math.js'

export var MulCommand = function (value) {
    return new Command(mul, div, value);
};