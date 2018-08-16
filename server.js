var express = require('express'),
    path = require('path'),
    nodeMailer = require('nodemailer'),
    bodyParser = require('body-parser');

    var app = express();
    app.set('view engine', 'js');
    app.engine('js', require('express-react-views').createEngine());
    app.use(express.static('public'));

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    var port = 3000;
    app.get('/', function (req, res) {
      res.render('SendMail');
    });
    app.post('/send-email', function (req, res) {

          // const { to} = req.query;
      let transporter = nodeMailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
              user: '',
              pass: ''
          }
      });
      let mailOptions = {
          from: req.body.from, // sender address
          to: req.body.to, // list of receivers
          subject: req.body.subject, // Subject line
          text: req.body.body, // plain text body
          html: req.body.body,// html body
      };

      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message %s sent: %s', info.messageId, info.response);
              res.render('SendMail');
          });
      });
          app.listen(port, function(){
            console.log('Server is running at port: ',port);
          });
