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
exports.athleteController = void 0;
const services_1 = require("../../services");
exports.athleteController = {
    createAthlete: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { club } = req.body;
        const existingClub = yield services_1.clubService.getClub(club);
        if (!existingClub) {
            res.status(404).json({ message: 'Club not found' });
            return;
        }
        const athlete = yield services_1.athleteService.createAthlete(req.body);
        res.status(201).json(athlete);
    }),
    getAthletes: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const athletes = yield services_1.athleteService.getAthletes(req.query);
        res.status(200).json(athletes);
    }),
    getAthlete: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const athlete = yield services_1.athleteService.getAthlete(req.params.id);
        res.status(200).json(athlete);
    }),
    updateAthlete: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const athlete = yield services_1.athleteService.updateAthlete(req.params.id, req.body);
        res.status(200).json(athlete);
    }),
    deleteAthlete: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const athlete = yield services_1.athleteService.deleteAthlete(req.params.id);
        res.status(200).json(athlete);
    }),
};
