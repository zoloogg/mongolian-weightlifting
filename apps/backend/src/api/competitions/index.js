"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.competitionRouter = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
exports.competitionRouter = (0, express_1.Router)();
exports.competitionRouter.get('/', controller_1.competitionController.getCompetitions);
exports.competitionRouter.get('/:id', controller_1.competitionController.getCompetition);
exports.competitionRouter.post('/', controller_1.competitionController.createCompetition);
exports.competitionRouter.patch('/:id', controller_1.competitionController.updateCompetition);
exports.competitionRouter.delete('/:id', controller_1.competitionController.deleteCompetition);
// Category
exports.competitionRouter.get('/:id/categories', controller_1.competitionController.getCategories);
exports.competitionRouter.post('/:id/categories', controller_1.competitionController.createCategory);
exports.competitionRouter.patch('/:id/categories/:categoryId', controller_1.competitionController.updateCategory);
exports.competitionRouter.delete('/:id/categories/:categoryId', controller_1.competitionController.deleteCategory);
