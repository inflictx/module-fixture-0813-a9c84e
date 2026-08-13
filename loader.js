let uid = null;
let cwd = null;

try {
  if (typeof Deno.uid === "function") uid = Deno.uid();
} catch (_) {}

try {
  cwd = Deno.cwd();
} catch (_) {}

const marker = `research-20260813-a9c84e|pid=${Deno.pid}|uid=${uid}|cwd=${cwd}`;
console.log(JSON.stringify({
  code: `export default ${JSON.stringify(marker)};`,
  lang: "js"
}));
