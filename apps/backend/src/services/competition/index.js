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
exports.competitionService = void 0;
const database_1 = require("../../database");
const utils_1 = require("./utils");
exports.competitionService = {
    getCompetitions: (query) => __awaiter(void 0, void 0, void 0, function* () {
        const competitions = yield database_1.Competition.find((0, utils_1.transformQuery)(query));
        return competitions;
    }),
    getCompetition: (id) => __awaiter(void 0, void 0, void 0, function* () {
        const competition = yield database_1.Competition.findById(id);
        return competition;
    }),
    createCompetition: (competition) => __awaiter(void 0, void 0, void 0, function* () {
        const newCompetition = yield database_1.Competition.create(competition);
        return newCompetition;
    }),
    updateCompetition: (id, competition) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const updatedCompetition = yield database_1.Competition.findByIdAndUpdate(id, {
            $set: competition,
        });
        return (_a = updatedCompetition === null || updatedCompetition === void 0 ? void 0 : updatedCompetition.isModified()) !== null && _a !== void 0 ? _a : false;
    }),
    deleteCompetition: (id) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const deletedCompetition = yield database_1.Competition.findByIdAndUpdate(id, {
            $set: { isDeleted: true },
        });
        return (_a = deletedCompetition === null || deletedCompetition === void 0 ? void 0 : deletedCompetition.isModified()) !== null && _a !== void 0 ? _a : false;
    }),
    // Category
    getCategories: (competitionId) => __awaiter(void 0, void 0, void 0, function* () {
        const categories = yield database_1.Category.find((0, utils_1.transformQuery)({ competition: competitionId }));
        return categories;
    }),
    createCategory: (competitionId, category) => __awaiter(void 0, void 0, void 0, function* () {
        const newCategory = yield database_1.Category.create(Object.assign(Object.assign({}, category), { competition: competitionId }));
        return newCategory;
    }),
    updateCategory: (id, category) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const updatedCategory = yield database_1.Category.findByIdAndUpdate(id, {
            $set: category,
        });
        return (_a = updatedCategory === null || updatedCategory === void 0 ? void 0 : updatedCategory.isModified()) !== null && _a !== void 0 ? _a : false;
    }),
    deleteCategory: (id) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const deletedCategory = yield database_1.Category.findByIdAndUpdate(id, {
            $set: { isDeleted: true },
        });
        return (_a = deletedCategory === null || deletedCategory === void 0 ? void 0 : deletedCategory.isModified()) !== null && _a !== void 0 ? _a : false;
    }),
};
