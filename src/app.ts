import { yarg } from "./plugins/args.plugin";
import { ServerApp } from "./presentation/server-app";

console.log(yarg);

(async() => {
    console.log('Funcion auto');
    await main();
})();

async function main(){

    const { b: base, l: limit, s: showTable, n:fileName, d:fileDestination } = yarg
    ServerApp.run({ base, limit, showTable, fileName, fileDestination });
}