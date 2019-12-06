
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("You have 4news sources available:");
for(let i=1;i<5;i++){
console.log("press "+i+" for news source "+i);
}

let reply;

rl.question('Enter your choice here:',(answer) => {
    // TODO: Log the answer in a database}
    reply= answer;

  reply=parseInt(reply);
  
  switch(reply){
    case 1: //console.log('news source '+reply);
    func('https://api.nytimes.com/svc/books/v3/lists.json?api-key=K7VAoD6IfbfEGlo6op9fpgwJSwkIQI0C&published_date=2017-09-24&list=Combined Print and E-Book Fiction');
    break;

    case 2: //console.log('news source '+reply);
    func('https://newsapi.org/v2/everything?q=bitcoin&from=2019-11-06&sortBy=publishedAt&apiKey=5e7854ce4c384d0abd3eb858cbe35426&pageSize=10');
    break;

    case 3: //console.log('news source '+reply);
    func('https://newsapi.org/v2/everything?q=bitcoin&from=2019-11-06&sortBy=publishedAt&apiKey=5e7854ce4c384d0abd3eb858cbe35426');
    break;

    case 4: //console.log('news source '+reply);
    func('https://api.nytimes.com/svc/books/v3/lists.json?api-key=K7VAoD6IfbfEGlo6op9fpgwJSwkIQI0C&published_date=2017-09-24&list=Combined Print and E-Book Fiction');
    break;

    default: console.log('input incorrect. choose a valid value!');
    break;
}
  
  rl.close();
    
  });


  function func(url){
   // console.log("news source "+num);
    console.log('about to fetch data');
    
    const https = require('https');

    https.get(url, (resp) => {
      let data = '';
    
      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
        data += chunk;
      });
    
      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        console.log(JSON.parse(data));
      });
    
    }).on("error", (err) => {
      console.log("Error: " + err.message);
  });

  return 0;
}
