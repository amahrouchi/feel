# Feel

## Dependencies

### NPM

At the time I am writing this I use the version `6.1` of NPM

### Package.json
```json
{
  "scripts": {
    "start" : "webpack && docker-compose up -d"
  },
  "dependencies": {
    "phaser": "^3.12.0"
  },
  "devDependencies": {
    "babel-core": "^6.26.3",
    "babel-loader": "^7.1.5",
    "babel-preset-env": "^1.7.0",
    "expose-loader": "^0.7.5",
    "webpack": "^4.17.2",
    "webpack-cli": "^3.1.0"
  }
}

```

## Docker

## Build

To build the phaser app using webpack and launch it in a Docker container, use:
```bash
npm start
```

The game is accessible at the URL: http://localhost:8888/
