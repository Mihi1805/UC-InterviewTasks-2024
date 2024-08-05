const prompt = require('prompt-sync')();
var sent=prompt('Enter a sentence ');
console.log('Sentence entered by user:'+sent);
sent=sent.toLowerCase();
let dis="";

//finding distinct letters
for(let i=0;i<sent.length;i++)
{
for(let j=i;j>=0;j--)
{
if(dis.includes(sent[i])==false && sent[i]!=' ')
{
dis=dis+sent[j];
}
}
}

//console.log(dis);
console.log(dis.length);
//finding frequency of each letter
var fre =new Array();
for(let j=0;j<dis.length;j++)
{
fre[j]=0;
for(let i=0;i<sent.length;i++)
{
if(dis[j]==sent[i] && sent[i]!=' ')
{
fre[j]=fre[j]+1;
}
}
}
for(let j=0;j<fre.length;j++)
{
console.log(fre[j]);
}

/*for(let j=0;j<fre.length;j++)
{
console.log(dis[j]+':'+fre[j]);
}*/

