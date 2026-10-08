import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";
import ts from "typescript";

export function loadTypeScript(file, globals = {}) {
  const { outputText } = ts.transpileModule(readFileSync(file, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 }
  });
  const module = { exports: {} };
  runInNewContext(outputText, { ...globals, module, exports: module.exports }, { filename: file });
  return module.exports;
}
