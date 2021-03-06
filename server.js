var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {
 'article-one' : {
    title: ' Article One | Bhavani',
    heading: 'Article One',
    date: 'Aug 13',
    content:`  
    <p>
                  This is a content of my first Article. This is a content of my first Article.  This is a content of my first Article. This is a content of my first Article.

              </p>
              <p>
                                    This is a content of my first Article. This is a content of my first Article.  This is a content of my first Article.
                                    
              </p>
              <p>
                                    This is a content of my first Article This is a content of my first Article.
              </p>`
},
 'article-two' : {
    title: ' Article Two | Bhavani',
    heading: 'Article Two',
    date: 'Aug 14',
    content:`  
    <p>
                  This is a content of my first Article. This is a content of my first Article.  This is a content of my first Article. This is a content of my first Article.

              </p>`
             },
 'article-three' : {
    title: ' Article Three | Bhavani',
    heading: 'Article Three',
    date: 'Aug 15',
    content:`  
    <p>
                  This is a content of my first Article. This is a content of my first Article.  This is a content of my first Article. This is a content of my first Article.

              </p>`
}
};
function createtemplate (data){
    var title= data.title;
    var heading =data.heading;
    var date =data.date;
    var content = data.content;

var htmltemplate =`
<html>
    <head>
        <title>
            ${title}
       </title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2.0, minimum-scale=1, user-scalable=yes"/> 
        
         <link href="/ui/style.css" rel="stylesheet" />
    </head>
<body>
    <div class="container">
    <div>
       <a href="/">HOME</a>
    </div>
    <hr/>
    <h3>
          ${heading}
          </h3>
          <div>
              ${date}
          </div>
          <div>
             ${content}
          </div>
    </div>
</body>
</html>`;
return htmltemplate;
}

app.get('/', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter = 0;
app.get('/counter',function(req,res){
    counter = counter + 1;
    res.send( counter.toString());
});
app.get('/:articleName',function(req,res){
    var articleName = req.params.articleName;
 res.send(createtemplate(articles(articleName)));  
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
