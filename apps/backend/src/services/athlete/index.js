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
exports.athleteService = void 0;
const database_1 = require("../../database");
const utils_1 = require("./utils");
exports.athleteService = {
    createAthlete: (athlete) => __awaiter(void 0, void 0, void 0, function* () {
        const newAthlete = new database_1.Athlete(athlete);
        return newAthlete.save();
    }),
    getAthletes: (query) => __awaiter(void 0, void 0, void 0, function* () {
        const athletes = yield database_1.Athlete.find((0, utils_1.transformQuery)(query));
        return athletes;
    }),
    getAthlete: (id) => __awaiter(void 0, void 0, void 0, function* () {
        const athlete = yield database_1.Athlete.findById(id);
        return athlete;
    }),
    updateAthlete: (id, athlete) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const result = yield database_1.Athlete.findByIdAndUpdate(id, {
            $set: athlete,
        });
        return (_a = result === null || result === void 0 ? void 0 : result.isModified()) !== null && _a !== void 0 ? _a : false;
    }),
    deleteAthlete: (id) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const deletedAthlete = yield database_1.Athlete.findByIdAndUpdate(id, {
            $set: { isDeleted: true },
        });
        return (_a = deletedAthlete === null || deletedAthlete === void 0 ? void 0 : deletedAthlete.isModified()) !== null && _a !== void 0 ? _a : false;
    }),
};
