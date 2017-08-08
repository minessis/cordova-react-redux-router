'use strict';

const TARGET = process.env.npm_lifecycle_event;

let env;

switch (TARGET) {
  case 'start':
  case 'ios':
  case 'android':
    env = 'development';
    break;
  case 'build':
  default:
    env = 'production';
}

module.exports = env;
