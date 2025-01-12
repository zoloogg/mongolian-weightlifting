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
exports.clubController = void 0;
const services_1 = require("./../../services/");
exports.clubController = {
    getClubs: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const clubs = yield services_1.clubService.getClubs(req.query);
        res.status(200).json(clubs);
    }),
    getClub: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const club = yield services_1.clubService.getClub(req.params.id);
        if (!club) {
            res.status(404).json({ message: 'Club not found' });
        }
        res.status(200).json(club);
    }),
    createClub: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(req.body);
        const club = yield services_1.clubService.createClub(req.body);
        res.status(201).json(club);
    }),
    updateClub: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield services_1.clubService.updateClub(req.params.id, req.body);
        res.status(200).json(result);
    }),
    deleteClub: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield services_1.clubService.deleteClub(req.params.id);
        res.status(200).json(result);
    }),
};
