"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lift = void 0;
const mongoose_1 = require("mongoose");
const liftSchema = new mongoose_1.Schema({
    participation: { type: String, required: true },
    weight: { type: Number, required: true },
    results: {
        type: [Boolean, Boolean, Boolean],
        default: [null, null, null],
    },
    override: { type: Boolean },
    isLive: { type: Boolean },
    idx: { type: Number },
    verdict: { type: String, default: 'pending' },
}, {
    timestamps: true,
    virtuals: true,
});
exports.Lift = (0, mongoose_1.model)('lifts', liftSchema);
