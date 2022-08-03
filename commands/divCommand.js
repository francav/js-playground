"use strict";

import { Command } from '../command.js'
import { mul, div } from './math.js'

export var DivCommand = function (value) {
    return new Command(div, mul, value);
};