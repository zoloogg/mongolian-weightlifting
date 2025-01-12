"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.participationRouter = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
exports.participationRouter = (0, express_1.Router)();
exports.participationRouter.get('/:categoryId/athletes', controller_1.participationController.getParticipations);
exports.participationRouter.post('/:categoryId/athletes', controller_1.participationController.registerParticipation);
exports.participationRouter.patch('/:participationId', controller_1.participationController.updateParticipation);
exports.participationRouter.delete('/:participationId', controller_1.participationController.removeParticipation);
