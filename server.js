require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const sslRedirect = require('heroku-ssl-redirect');
const bodyParser = require('body-parser')
const path = require('path')
const contentful = require('contentful')

const client = contentful.createClient({
	space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
	accessToken: process.env.REACT_APP_CONTENTFUL_CDA_KEY
})

app.use(sslRedirect());
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));


app.get('/api/getarticles', (req, res) => {
    client.getEntries({content_type: 'blogPost'}).then((entries) => {
      res.send(entries.items);
    }).catch((err) => {
       res.status(500).send(err);
    })
  });
  app.get('/api/getarticle/:id', (req, res) => {
    client.getEntry(`${req.params.id}`).then((entry) => {
      res.send(entry.fields);
    }).catch((err) => {
       res.status(500).send(err);
    })
  });
  app.get('/api/getpersons', (req, res) => {
    client.getEntries({content_type: 'person'}).then((entries) => {
      res.send(entries.items);
    }).catch((err) => {
       res.status(500).send(err);
    })
  });
  app.get('/api/getpagecontent/:id/:lang', (req, res) => {
    client.getEntry(`${req.params.id}`, {locale: `${req.params.lang}`}).then((entry) => {
      res.send(entry.fields);
    }).catch((err) => {
       res.status(500).send(err);
    })
  });
  app.get('/api/getproducts', (req, res) => {
    client.getEntries({content_type: 'product'}).then((entries) => {
      res.send(entries.items);
    }).catch((err) => {
       res.status(500).send(err);
    })
  });
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
app.listen(process.env.PORT || 5000, 
	() => console.log("Server is running..."));

