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
exports.competitionController = void 0;
const services_1 = require("../../services");
exports.competitionController = {
    getCompetitions: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const competitions = yield services_1.competitionService.getCompetitions(req.query);
        res.json(competitions);
    }),
    getCompetition: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const competition = yield services_1.competitionService.getCompetition(req.params.id);
        res.json(competition);
    }),
    createCompetition: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const competition = yield services_1.competitionService.createCompetition(req.body);
        res.json(competition);
    }),
    updateCompetition: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const competition = yield services_1.competitionService.updateCompetition(req.params.id, req.body);
        res.json(competition);
    }),
    deleteCompetition: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const competition = yield services_1.competitionService.deleteCompetition(req.params.id);
        res.json(competition);
    }),
    // Category
    getCategories: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const categories = yield services_1.competitionService.getCategories(req.params.id);
        res.json(categories);
    }),
    createCategory: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const category = yield services_1.competitionService.createCategory(req.params.id, req.body);
        res.json(category);
    }),
    updateCategory: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const category = yield services_1.competitionService.updateCategory(req.params.categoryId, req.body);
        res.json(category);
    }),
    deleteCategory: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const category = yield services_1.competitionService.deleteCategory(req.params.categoryId);
        res.json(category);
    }),
};
