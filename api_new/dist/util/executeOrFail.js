"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function executeOrFail(cb, message = "Internal Server Error") {
    try {
        return cb();
    }
    catch (err) {
        console.error(err);
        throw new Error(message);
    }
}
exports.default = executeOrFail;
//# sourceMappingURL=executeOrFail.js.map