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
router.delete("/delete/:id", crud_controllers_1.default.deleteData);
router.patch("/patch/:id", crud_controllers_1.default.patchData);
router.put("/put/:id", crud_controllers_1.default.putData);
router.get("/get/:id", crud_controllers_1.default.getOneData);
exports.default = router;
//# sourceMappingURL=crud.routes.js.map