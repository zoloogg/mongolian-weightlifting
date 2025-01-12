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
exports.clubService = void 0;
const mongoose_1 = require("mongoose");
const database_1 = require("../../database");
const utils_1 = require("./utils");
exports.clubService = {
    createClub: (club) => __awaiter(void 0, void 0, void 0, function* () {
        const newClub = yield database_1.Club.create(club);
        return newClub;
    }),
    getClub: (id) => __awaiter(void 0, void 0, void 0, function* () {
        const club = yield database_1.Club.findById(new mongoose_1.Types.ObjectId(id));
        return club;
    }),
    getClubs: (query) => __awaiter(void 0, void 0, void 0, function* () {
        const clubs = yield database_1.Club.find((0, utils_1.transformQuery)(query));
        return clubs;
    }),
    updateClub: (id, club) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield database_1.Club.findByIdAndUpdate(new mongoose_1.Types.ObjectId(id), {
            $set: club,
        });
        return (result === null || result === void 0 ? void 0 : result.isModified()) === true;
    }),
    deleteClub: (id) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield database_1.Club.findByIdAndUpdate(new mongoose_1.Types.ObjectId(id), {
            $set: { isDeleted: true },
        });
        return (result === null || result === void 0 ? void 0 : result.isModified()) === true;
    }),
};
