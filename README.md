# msg-js-spa-skeleton
This JavaScript SinglePageApp(SPA) Skeleton is a simple project using the [msg-js-spa-framework](https://github.com/msg-systems/msg-js-spa-framework).

## Purpose
The `msg-js-spa-skeleton` is the skeleton project demonstrating the usage of the [msg-js-spa-framework](https://github.com/msg-systems/msg-js-spa-framework).

It includes:

- A simple mock server (incl. proxy capabilities) for local development
- A grunt based build process
- A component oriented architecture following the [UICA - User Interface Component Architecture](http://componentjs.com/architecture.html)

## Getting started

To run the SPA skeleton project fork and clone it.

The project is based on [node.js](https://nodejs.org/en/). Ensure that you have at least one node virtual machine available on your client.

Once `node.js` and the `msg-js-spa-skeleton` project are available you can use the node package manager (`npm`) to install all projects dependencies (folder node_modules will be created):

```shell
cd %PROJECT_ROOT%
npm install
```

If you are running `npm` behind a company firewall you have to additionally set the proxy for npm:

```shell
npm config set proxy=http://{{proxy name or ip}}:{{proxy port}}/
npm config set https-proxy=https://{{proxy name or ip}}:{{proxy port}}/
```

After the `npm` install is done you can run the `msg-js-spa-skeleton` build process

```shell
npm start
```

The build process is finally starting an `node.js` based web server and provides the application under [http://localhost:5678/#dev](http://localhost:5678/#dev)