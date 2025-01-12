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
exports.liftService = void 0;
const models_1 = require("../../database/models");
const utils_1 = require("./utils");
const participation_1 = require("../participation");
const category_1 = require("../category");
exports.liftService = {
    getLifts: (query) => __awaiter(void 0, void 0, void 0, function* () {
        return models_1.Lift.find((0, utils_1.transformQuery)(query));
    }),
    createLift: (lift) => __awaiter(void 0, void 0, void 0, function* () {
        return models_1.Lift.create(lift);
    }),
    deleteLift: (id) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const lift = yield models_1.Lift.findOneAndUpdate({ id }, {
            $set: {
                isDeleted: true,
            },
        });
        return (_a = lift === null || lift === void 0 ? void 0 : lift.isModified()) !== null && _a !== void 0 ? _a : false;
    }),
    updateLift: (_id, lift) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const updatedLift = yield models_1.Lift.findOneAndUpdate({ _id }, { $set: lift });
        return (_a = updatedLift === null || updatedLift === void 0 ? void 0 : updatedLift.isModified()) !== null && _a !== void 0 ? _a : false;
    }),
    getRank: (participationId, liftType) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const participation = yield participation_1.participationService.getParticipation(participationId);
        if (!participation) {
            return 0;
        }
        const participations = yield participation_1.participationService.getParticipations(participation.category.toString());
        const lifts = yield models_1.Lift.find({
            participation: { $in: participations.map((p) => p._id) },
        });
        const records = {};
        for (const lift of lifts) {
            records[lift.participation.toString()] = [
                ...((_a = records[lift.participation.toString()]) !== null && _a !== void 0 ? _a : []),
                lift,
            ];
        }
        return lifts.length;
    }),
    vote: (liftId, idx, vote) => __awaiter(void 0, void 0, void 0, function* () {
        const lift = yield models_1.Lift.findById(liftId);
        if (!lift || lift.verdict !== 'pending') {
            return false;
        }
        lift.results[idx] = vote;
        yield lift.save();
        if (lift.results.every((v) => v !== null)) {
            lift.verdict =
                lift.results.filter((v) => v === true).length >= 2 ? 'success' : 'fail';
            console.log('Verdict', lift.verdict);
            yield lift.save();
            return yield exports.liftService.handleFinishedLift(lift);
        }
        return false;
    }),
    handleFinishedLift: (lift) => __awaiter(void 0, void 0, void 0, function* () {
        console.log('Handling', lift.idx);
        if ([1, 2, 4, 5].includes(lift.idx)) {
            const nextLift = lift.verdict ? lift.weight + 1 : lift.weight;
            yield models_1.Lift.create({
                participation: lift.participation,
                weight: nextLift,
                idx: lift.idx + 1,
            });
        }
        if (lift.idx <= 3) {
            const lifts = yield models_1.Lift.find({
                participation: lift.participation,
                verdict: 'success',
                idx: { $lte: 3 },
            });
            const maxWeight = Math.max(...lifts.map((l) => l.weight));
            yield participation_1.participationService.updateParticipation(lift.participation.toString(), {
                snatch: maxWeight,
            });
        }
        if (lift.idx >= 4 && lift.idx <= 6) {
            const lifts = yield models_1.Lift.find({
                participation: lift.participation,
                verdict: 'success',
                idx: { $gte: 4 },
            });
            const maxWeight = Math.max(...lifts.map((l) => l.weight));
            yield participation_1.participationService.updateParticipation(lift.participation.toString(), {
                cleanAndJerk: maxWeight,
            });
        }
        yield exports.liftService.handleLive();
        return true;
    }),
    handleLive: () => __awaiter(void 0, void 0, void 0, function* () {
        const activeCategories = yield category_1.categoryService.getActiveCategories();
        console.log('activeCategories', activeCategories);
        const lll = [];
        for (const category of activeCategories) {
            console.log('category', category);
            const participations = yield participation_1.participationService.getParticipations(category._id.toString());
            console.log('participations X', participations);
            const lifts = yield models_1.Lift.find({
                participation: { $in: participations.map((p) => p._id) },
                verdict: 'pending',
            });
            console.log('lifts X', lifts);
            lll.push(...lifts);
        }
        lll.sort((a, b) => {
            if (a.weight > b.weight)
                return 1;
            if (a.weight < b.weight)
                return -1;
            if (a._id.toString() > b._id.toString())
                return -1;
            if (a._id.toString() < b._id.toString())
                return 1;
            return 0;
        });
        console.log('L', lll);
        yield models_1.Lift.updateMany({}, {
            $set: {
                isLive: false,
            },
        });
        yield models_1.Lift.updateOne({
            _id: lll[0],
        }, {
            $set: {
                isLive: true,
            },
        });
        return true;
    }),
};
