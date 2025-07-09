@echo off
echo === Eliminando historial anterior de Git ===
rd /s /q .git

echo === Iniciando nuevo repositorio Git ===
git init

echo === Añadiendo origen remoto ===
git remote add origin https://github.com/JuarezHemat/hematologo-cusco.git

echo === Creando .gitignore ===
echo node_modules/ > .gitignore
echo .next/ >> .gitignore

echo === Añadiendo archivos al repositorio ===
git add .
git commit -m "Subida limpia sin node_modules"

echo === Subiendo al repositorio remoto (forzado) ===
git push -u origin main --force

echo === Listo! Ahora puedes ir a Vercel y desplegar tu proyecto ===
pause
