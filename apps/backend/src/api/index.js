"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const athletes_1 = require("./athletes");
const clubs_1 = require("./clubs");
const competitions_1 = require("./competitions");
const participations_1 = require("./participations");
const lifts_1 = require("./lifts");
const board_1 = require("./board");
const clock_1 = require("./clock");
exports.router = (0, express_1.Router)();
exports.router.get('/', (_req, res) => {
    res.json({
        message: 'Mongolian Weightlifting API. v1.0.0 ',
    });
});
exports.router.use('/clubs', clubs_1.clubRouter);
exports.router.use('/athletes', athletes_1.athletesRouter);
exports.router.use('/competitions', competitions_1.competitionRouter);
exports.router.use('/participations', participations_1.participationRouter);
exports.router.use('/lifts', lifts_1.liftRouter);
exports.router.use('/board', board_1.boardRouter);
exports.router.use('/clock', clock_1.clockRouter);
