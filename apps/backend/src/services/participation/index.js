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
exports.participationService = void 0;
const database_1 = require("../../database");
const utils_1 = require("./utils");
exports.participationService = {
    getParticipation: (participationId) => __awaiter(void 0, void 0, void 0, function* () {
        return database_1.Participation.findById(participationId);
    }),
    getParticipations: (categoryId) => __awaiter(void 0, void 0, void 0, function* () {
        const participations = yield database_1.Participation.find((0, utils_1.transformQuery)({ category: categoryId }));
        return participations;
    }),
    registerParticipation: (categoryId, athleteId, data) => __awaiter(void 0, void 0, void 0, function* () {
        const participation = yield database_1.Participation.create(Object.assign({ category: categoryId, athlete: athleteId }, data));
        return participation;
    }),
    updateParticipation: (participationId, participation) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const updatedParticipation = yield database_1.Participation.findByIdAndUpdate(participationId, {
            $set: participation,
        });
        return (_a = updatedParticipation === null || updatedParticipation === void 0 ? void 0 : updatedParticipation.isModified()) !== null && _a !== void 0 ? _a : false;
    }),
    removeParticipation: (participationId) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const participation = yield database_1.Participation.findByIdAndUpdate(participationId, {
            $set: { isDeleted: true },
        });
        return (_a = participation === null || participation === void 0 ? void 0 : participation.isModified()) !== null && _a !== void 0 ? _a : false;
    }),
};
