console.log(require('fs').readFileSync(require('path').resolve(__dirname,'input.txt')).toString().split("").map((v:string,i:number)=>[i,v]).find((v:[number,string],i:number,a:[number,string][])=>i > 3 && [...new Set(...[a.map(v=>v[1]).slice(i-4, i)])].length == a.map(v=>v[1]).slice(i-4, i).length)[0]);