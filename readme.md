# Debugging node.js app

## Debugging backend scripts

1. Start the app `npm start`

2. Start debugging session (**Attach by process ID**). Pick option which says `node app.js`.

3. Now backend breakpoints will be hit (e.g. in `app.js`). However, frontend script breakpoints (in Public folder, e.g. `script.js`) won't hit. 

## Debugging frontend scripts

These scripts can be debugged in the browser directly. If desired to debug in vscode, follow these steps:

1. Start the app `npm start`

2. Start chrome with remote debugging enabled with `--remote-debugging-port=9222` option

Change path to chrome as needed. Powershell example:

`& "C:/Program Files/Google/Chrome/Application/chrome.exe" --remote-debugging-port=9222`

3. Start debugging session (**Attach to Chrome**).

4. Now frontend script breakpoints (in Public folder, e.g. `script.js`) will hit. However, backend breakpoints won't hit (e.g. in `app.js`)

## Debugger configuration

Using this debugger configuration (launch.json)

```json
{
    "version": "0.2.0",
    "configurations": [        
        {
            "type": "node",
            "request": "attach",
            "name": "Attach by Process ID",
            "processId": "${command:PickProcess}",
            "skipFiles": [
                "<node_internals>/**"
            ]
        },
        
        {
            "name": "Attach to Chrome",
            "type": "chrome",
            "request": "attach",
            "port": 9222,
            "webRoot": "${workspaceFolder}/public",
            "urlFilter": "*",
            "sourceMapPathOverrides": {
              "webpack:///*": "${webRoot}/*", 
              "file:///*": "${webRoot}/*"
            }
          }
    ]
}
```

Node packages (packages.json)

```json
  "scripts": {
    "start": "node app.js"
  }
```
