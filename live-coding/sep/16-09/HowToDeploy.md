## How to deploy Node.js app on to server

#### Install

first we need to install globally now (will be abel to upload your project)
`npm install -g now`
we also going to use (will take care of any updates + previews or Production )
`npm install -g vercel`

#### adding vercel.json

````{
    "version": 2,
    "builds": [{ "src": "index.js", "use": "@now/node-server" }],
}```
````
