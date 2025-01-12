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
exports.participationController = void 0;
const services_1 = require("../../services");
exports.participationController = {
    getParticipations: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const participations = yield services_1.participationService.getParticipations(req.params.categoryId);
        res.json(participations);
    }),
    registerParticipation: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const participation = yield services_1.participationService.registerParticipation(req.params.categoryId, req.body.athleteId, req.body);
        res.json(participation);
    }),
    updateParticipation: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const participation = yield services_1.participationService.updateParticipation(req.params.participationId, req.body);
        res.json(participation);
    }),
    removeParticipation: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const participation = yield services_1.participationService.removeParticipation(req.params.participationId);
        res.json(participation);
    }),
};
