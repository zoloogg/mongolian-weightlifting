"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boardRouter = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
exports.boardRouter = (0, express_1.Router)();
exports.boardRouter.get('/active-categories', controller_1.boardController.getActiveCategories);
