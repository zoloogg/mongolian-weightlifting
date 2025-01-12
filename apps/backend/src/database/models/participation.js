"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Participation = void 0;
const mongoose_1 = require("mongoose");
const participationSchema = new mongoose_1.Schema({
    athlete: { type: mongoose_1.Schema.Types.ObjectId, ref: 'athletes', required: true },
    category: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'categories',
        required: true,
    },
    group: { type: String, default: 'A' },
    order: { type: Number, default: 0 },
    isDeleted: { type: Boolean },
    snatch: { type: Number },
    cleanAndJerk: { type: Number },
}, {
    timestamps: true,
});
exports.Participation = (0, mongoose_1.model)('participations', participationSchema);
