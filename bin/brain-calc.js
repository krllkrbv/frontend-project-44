#!/usr/bin/env node
import runGame from '../src/index.js';
import { getGameRound, gameDescription } from '../src/games/calc.js';

runGame(gameDescription, getGameRound);
