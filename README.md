# uica-skeleton
This User Interface Component Architecture (UICA) Skeleton for single page applications is a simple project using the [uica-stack](https://github.com/msg-systems/uica-stack).

## Purpose
The `uica-skeleton` is the skeleton project demonstrating the usage of the [uica-stack](https://github.com/msg-systems/uica-stack).

It includes:

- A simple mock server (incl. proxy capabilities) for local development
- A grunt based build process
- A component oriented architecture following the [UICA - User Interface Component Architecture](http://componentjs.com/architecture.html)

## Getting started

To run the SPA skeleton project fork and clone it.

The project is based on [node.js](https://nodejs.org/en/). Ensure that you have at least one node virtual machine available on your client.

Once `node.js` and the `uica-skeleton` project are available you can use the node package manager (`npm`) to install all projects dependencies (folder node_modules will be created):

```shell
cd %PROJECT_ROOT%
npm install
```

If you are running `npm` behind a company firewall you have to additionally set the proxy for npm:

```shell
npm config set proxy=http://{{proxy name or ip}}:{{proxy port}}/
npm config set https-proxy=https://{{proxy name or ip}}:{{proxy port}}/
```

After the `npm` install is done you can run the `uica-skeleton` build process

```shell
npm start
```

The build process is finally starting an `node.js` based web server and provides the application under [http://localhost:5678/#dev](http://localhost:5678/#dev)