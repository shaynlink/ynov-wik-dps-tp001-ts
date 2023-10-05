# wik-dps-tp001 (TypeScript)

## Build project
```sh
npx tsc
```

## Start project
### Start project without setting port
```sh
node ./build/index.js
```

Default port is `3000`

### Start project with setting port
```sh
export PING_LISTEN_PORT=3000 && node ./build/index.js
```

# Usage

## Ping
### Request
http://localhost:3000/ping

###  `GET` /ping
```sh
curl http://localhost:3000/ping
```
### Response
```json
200 OK

{
    "Host":"localhost:3000",
    "User-Agent":"curl/8.1.2",
    "Accept":"*/*"
}
```

## 404

### Response
```json
404 not found
```