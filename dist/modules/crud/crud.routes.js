"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const crud_controllers_1 = __importDefault(require("./crud.controllers"));
const router = (0, express_1.Router)();
router.get("/get", crud_controllers_1.default.getAllData);
router.post("/add", crud_controllers_1.default.addNewData);
exports.default = router;
//# sourceMappingURL=crud.routes.js.map