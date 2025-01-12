"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Competition = void 0;
const mongoose_1 = require("mongoose");
const competitionSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    isDeleted: { type: Boolean },
}, {
    timestamps: true,
});
exports.Competition = (0, mongoose_1.model)('competitions', competitionSchema);
