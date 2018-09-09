# Feel

## Dependencies

### NPM

At the time I am writing this I use the version `6.1` of NPM

### Package.json
```json
{
  "scripts": {
    "build": "webpack"
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

Using your terminal, go to the project directory and build the docker env with the command:

```bash
docker-compose up -d --build
```

Then, to build the app, run:
```bash
npm run build
```

