"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Club = void 0;
const mongoose_1 = require("mongoose");
const clubSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    isDeleted: { type: Boolean },
}, {
    timestamps: true,
});
exports.Club = (0, mongoose_1.model)('clubs', clubSchema);
