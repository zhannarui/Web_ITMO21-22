"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const path_1 = require("path");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useStaticAssets((0, path_1.join)(__dirname, '..', '/public'));
    app.setBaseViewsDir((0, path_1.join)(__dirname, '..', '/views'));
    app.setViewEngine('pug');
    const PORT = process.env.PORT || 12345;
    await app.listen(PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map