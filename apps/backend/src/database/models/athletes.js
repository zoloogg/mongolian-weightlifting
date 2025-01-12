"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Athlete = void 0;
const mongoose_1 = require("mongoose");
const athletesSchema = new mongoose_1.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    club: { type: mongoose_1.Schema.Types.ObjectId, ref: 'clubs', required: true },
    dob: { type: Date },
    isDeleted: { type: Boolean },
}, {
    timestamps: true,
});
exports.Athlete = (0, mongoose_1.model)('athletes', athletesSchema);
