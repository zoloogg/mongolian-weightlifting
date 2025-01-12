"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.liftController = void 0;
const lift_1 = require("../../services/lift");
exports.liftController = {
    getLifts: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const lifts = yield lift_1.liftService.getLifts(req.query);
        res.json(lifts);
    }),
    createLift: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const existing = yield lift_1.liftService.getLifts({
            participation: req.body.participation,
        });
        const lift = yield lift_1.liftService.createLift(Object.assign(Object.assign({}, req.body), { idx: existing.length + 1 }));
        res.json(lift);
    }),
    deleteLift: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const deleted = yield lift_1.liftService.deleteLift(req.params.id);
        res.json(deleted);
    }),
    updateLift: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const lift = yield lift_1.liftService.updateLift(req.params.id, req.body);
        res.json(lift);
    }),
    getRank: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { participationId, liftType } = req.query;
        const rank = yield lift_1.liftService.getRank(participationId, liftType);
        res.json(rank);
    }),
    vote: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        const { idx, vote } = req.body;
        const voted = yield lift_1.liftService.vote(id, idx, vote);
        res.json(voted);
    }),
    fixLive: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const live = yield lift_1.liftService.handleLive();
        res.json(live);
    }),
};
