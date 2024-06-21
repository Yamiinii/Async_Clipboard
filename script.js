var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
document.getElementById('copyTextButton').addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
    var text, textBlob, clipboardItem, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                text = 'Hello, pickled world!';
                textBlob = new Blob([text], { type: 'text/plain' });
                clipboardItem = new ClipboardItem({ 'text/plain': textBlob });
                return [4 /*yield*/, navigator.clipboard.write([clipboardItem])];
            case 1:
                _a.sent();
                alert('Text copied to clipboard');
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                console.error('Failed to copy text: ', err_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
document.getElementById('copyImageButton').addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
    var image, imageBlob, clipboardItem, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                image = "image to be converted into gvml";
                imageBlob = new Blob([image], { type: 'image/png' });
                clipboardItem = new ClipboardItem({ 'image/png': imageBlob });
                return [4 /*yield*/, navigator.clipboard.write([clipboardItem])];
            case 1:
                _a.sent();
                alert('Image copied to clipboard');
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                console.error('Failed to copy image: ', err_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
document.getElementById('copyAudioButton').addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
    var audio, audioBlob, clipboardItem, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                audio = "audio to be converted into gvml";
                audioBlob = new Blob([audio], { type: 'audio/mpeg' });
                clipboardItem = new ClipboardItem({ 'audio/mpeg': audioBlob });
                return [4 /*yield*/, navigator.clipboard.write([clipboardItem])];
            case 1:
                _a.sent();
                alert('Audio copied to clipboard');
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                console.error('Failed to copy audio: ', err_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
document.getElementById('copyVideoButton').addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
    var video, videoBlob, clipboardItem, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                video = "video to be converted into gvml";
                videoBlob = new Blob([video], { type: 'video/mp4' });
                clipboardItem = new ClipboardItem({ 'video/mp4': videoBlob });
                return [4 /*yield*/, navigator.clipboard.write([clipboardItem])];
            case 1:
                _a.sent();
                alert('Video copied to clipboard');
                return [3 /*break*/, 3];
            case 2:
                err_4 = _a.sent();
                console.error('Failed to copy video: ', err_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
document.getElementById('copyHtmlButton').addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
    var htmlContent, htmlBlob, clipboardItem, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                htmlContent = '<p>Hello, <strong>world!</strong></p>';
                htmlBlob = new Blob([htmlContent], { type: 'text/html' });
                clipboardItem = new ClipboardItem({ 'text/html': htmlBlob });
                return [4 /*yield*/, navigator.clipboard.write([clipboardItem])];
            case 1:
                _a.sent();
                alert('HTML copied to clipboard');
                return [3 /*break*/, 3];
            case 2:
                err_5 = _a.sent();
                console.error('Failed to copy HTML: ', err_5);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
document.getElementById('pasteArea').addEventListener('paste', function (event) { return __awaiter(_this, void 0, void 0, function () {
    var pastedText, pastedImage, pastedAudio, pastedVideo, pastedHTML, clipboardItems, _i, clipboardItems_1, clipboardItem, _a, _b, type, blob, data;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                event.preventDefault(); // Prevent the default paste action
                pastedText = '';
                pastedImage = '';
                pastedAudio = '';
                pastedVideo = '';
                pastedHTML = '';
                return [4 /*yield*/, navigator.clipboard.read()];
            case 1:
                clipboardItems = _c.sent();
                _i = 0, clipboardItems_1 = clipboardItems;
                _c.label = 2;
            case 2:
                if (!(_i < clipboardItems_1.length)) return [3 /*break*/, 8];
                clipboardItem = clipboardItems_1[_i];
                _a = 0, _b = clipboardItem.types;
                _c.label = 3;
            case 3:
                if (!(_a < _b.length)) return [3 /*break*/, 7];
                type = _b[_a];
                return [4 /*yield*/, clipboardItem.getType(type)];
            case 4:
                blob = _c.sent();
                return [4 /*yield*/, blob.text()];
            case 5:
                data = _c.sent();
                // Handle different types of content
                switch (type) {
                    case 'text/plain':
                        pastedText = data;
                        break;
                    case 'image/png':
                        pastedImage = data;
                        break;
                    case 'audio/mpeg':
                        pastedAudio = data;
                        break;
                    case 'video/mp4':
                        pastedVideo = data;
                        break;
                    case 'text/html':
                        pastedHTML = data;
                        break;
                    // Add more cases as needed
                }
                _c.label = 6;
            case 6:
                _a++;
                return [3 /*break*/, 3];
            case 7:
                _i++;
                return [3 /*break*/, 2];
            case 8:
                // Update the output with the pasted content
                document.getElementById('output').innerHTML = "\n        <h3>Pasted Content:</h3>\n        <div>\n          <p><strong>Text:</strong> ".concat(pastedText, "</p>\n          <p><strong>Audio:</strong> ").concat(pastedAudio, "</p>\n          <p><strong>Video:</strong> ").concat(pastedVideo, "</p>\n          <p><strong>Image:</strong> ").concat(pastedImage, "</p>\n          <p><strong>HTML:</strong> ").concat(pastedHTML, "</p>\n        </div>\n    ");
                return [2 /*return*/];
        }
    });
}); });
