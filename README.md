# UserAgentService

Parses user agent from web browser request header and returns json object representing browser, os, and device info.
The database of user agent strings is updated automatically.

Wraps up https://www.npmjs.org/package/useragent npm package and exposing it as restful service using node.js

# Sample Request

## Using Postman

Install Postman and import collection: 
http://cases.azoft.com/postman-rest-client-in-a-mobile-development-project/

Collection Source: 
https://www.getpostman.com/collections/b0554888242b16bfc26e

## Using any Http Client

### POST
Azure: http://useragentsvc.azurewebsites.net/parse
OpenShift: http://useragentsvc-smplrsvc.rhcloud.com/parse

### Headers
Content-Type: application/json

### Body
``` Json
{
 "UserAgent": "Mozilla/5.0 (Linux; Android 4.4.2; SGH-I747M Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36"
}
```

## Sample Response
``` Json
{
    "family": "Chrome Mobile",
    "major": "30",
    "minor": "0",
    "patch": "0",
    "device": {
        "family": "Samsung SGH-I747M",
        "major": "0",
        "minor": "0",
        "patch": "0"
    },
    "os": {
        "family": "Android",
        "major": "4",
        "minor": "4",
        "patch": "2"
    }
}
```
