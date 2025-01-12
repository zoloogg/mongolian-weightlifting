"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformQuery = void 0;
const transformQuery = (query) => {
    query.isDeleted = { $ne: true };
    return query;
};
exports.transformQuery = transformQuery;
