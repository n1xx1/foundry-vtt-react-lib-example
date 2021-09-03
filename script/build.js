const esbuild = require("esbuild");
const { externalGlobalPlugin } = require("esbuild-plugin-external-global");
const { mkdir, copyFile } = require("fs/promises");

(async () => {
  await mkdir("dist").catch(() => Promise.resolve());
  await copyFile("./static/module.json", "./dist/module.json");

  const prod = process.argv[process.argv.length - 1] === "production";
  const watch = process.argv[process.argv.length - 1] === "watch";

  await esbuild.build({
    bundle: true,
    entryPoints: { module: "src/module.tsx" },
    outdir: "dist",
    logLevel: "info",
    minify: prod,
    watch: watch,
    plugins: [
      externalGlobalPlugin({
        react: "foundryLibReact.React",
        "react-dom": "foundryLibReact.ReactDOM",
        "react-foundry": "foundryLibReact.ReactFoundry",
      }),
    ],
  });
})();
