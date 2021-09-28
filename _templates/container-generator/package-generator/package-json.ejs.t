---
to: <%= initiatedProjectPath %>/package.json
---
{
  "name": "<%= packageName %>",
  "version": "<%= initialVersion %>",
  "description": "<%= description %>",
  "repository": "<%= repositoryUrl %>",
  "author": "<%= author %>",
  "license": "MIT",
  "scripts": {
    "format": "prettier --write",
    "start": "PORT=3000 react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test"
  },
  "dependencies": {
    "antd": "^4.16.13",
    "react": "^16.8.6",
    "react-app-polyfill": "^0.2.2",
    "react-app-rewire-micro-frontends": "^0.0.1",
    "react-dom": "^16.4.2",
    "react-router-dom": "^4.2.2",
    "react-scripts": "^2.1.8"
  },
  "devDependencies": {
    "enzyme": "^3.3.0",
    "enzyme-adapter-react-16": "^1.1.1",
    "jest-enzyme": "^6.0.2",
    "jest-fetch-mock": "^2.1.2",
    "prettier": "^1.13.5",
    "react-app-rewired": "^2.1.1"
  },
  "config-overrides-path": "node_modules/react-app-rewire-micro-frontends",
  "prettier": {
    "singleQuote": true,
    "trailingComma": "all"
  },
  "browserslist": [
    ">0.2%",
    "not dead",
    "not ie <= 11",
    "not op_mini all"
  ]
}
