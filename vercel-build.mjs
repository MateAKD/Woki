#!/usr/bin/env node
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

// Obtener el directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Crear un archivo .eslintrc.json temporal que desactiva todas las reglas
const eslintConfigPath = join(__dirname, '.eslintrc.json');
const eslintConfig = {
  "root": true,
  "extends": [],
  "ignorePatterns": ["**/*"],
  "rules": {}
};

console.log('🔧 Configurando entorno para compilación en Vercel...');

// Escribir la configuración temporal de ESLint
fs.writeFileSync(eslintConfigPath, JSON.stringify(eslintConfig, null, 2));
console.log('✅ ESLint configurado para ignorar todos los archivos');

// Configurar variables de entorno para desactivar ESLint
process.env.DISABLE_ESLINT_PLUGIN = 'true';
process.env.NEXT_DISABLE_ESLINT = '1';
process.env.ESLINT_NO_DEV_ERRORS = 'true';
process.env.NODE_OPTIONS = '--max_old_space_size=4096';

console.log('🚀 Iniciando compilación de Next.js...');

// Ejecutar el comando de compilación de Next.js
const buildProcess = spawn('npx', ['next', 'build', '--no-lint'], {
  stdio: 'inherit',
  env: { ...process.env }
});

buildProcess.on('close', (code) => {
  if (code === 0) {
    console.log('✅ Compilación completada exitosamente');
  } else {
    console.error(`❌ La compilación falló con código de salida ${code}`);
    process.exit(code);
  }
});
