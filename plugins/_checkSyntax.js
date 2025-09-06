// plugins/checkSyntax.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function checkAllJS(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            checkAllJS(fullPath); // revisar subcarpetas
        } else if (file.endsWith('.js')) {
            try {
                new Function(fs.readFileSync(fullPath, 'utf-8')); // intenta compilar
            } catch (err) {
                console.log(`❌ Error en ${fullPath}`);
                console.log(err.message);
            }
        }
    }
}

checkAllJS(__dirname); // cambiar si querés revisar todo el proyecto
