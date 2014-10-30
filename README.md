# UserAgentService

Wrapped-up https://www.npmjs.org/package/useragent into restful service using node.js

# Sample Request

## POST
http://service-url/parse

## Headers
Content-Type: application/json

## Body
``` Json
{
 "UserAgent": "Mozilla/5.0 (Linux; Android 4.4.2; SGH-I747M Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36"
}
```

# Sample Response:
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


