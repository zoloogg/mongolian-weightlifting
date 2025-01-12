"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const mongoose_1 = require("mongoose");
const categorySchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    competition: { type: mongoose_1.Schema.Types.ObjectId, ref: 'competitions' },
    isDeleted: { type: Boolean },
    isA: { type: Boolean, default: false },
    isB: { type: Boolean, default: false },
}, {
    timestamps: true,
});
exports.Category = (0, mongoose_1.model)('categories', categorySchema);
