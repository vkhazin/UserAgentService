//Dependencies
var restify = require('restify');
var cors = require('cors');
var appInfo = require('./package.json');

//Configuration
var port = process.env.port || 1337;
var server = restify.createServer();

//Plug-ins
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.CORS());

//Routes
server.get(/\//, echo);
server.get(/\/(echo)\b/, echo);
server.post(/\/(parse)\b/, parse);

/******************************************************************************
End-points
******************************************************************************/
function echo(req, res) {
    var info = {
        name: appInfo.name,
        version: appInfo.version,
        description: appInfo.description,
        author:{
            name: appInfo.author.name,
            email: appInfo.author.email,
        }
    };
    res.send(info);
}

function parse(req, res) {
    //Parse the data
    var agentString = req.body.userAgent || req.body.UserAgent || req.params['useragent'];
    
    var useragent = require('useragent');
    useragent(true);
    
    var agent = useragent.lookup(agentString);
    res.send(agent.toJSON());
}
/*****************************************************************************/

//Start server
server.listen(port, function () {
    console.log('listening on port: ' + port);
});