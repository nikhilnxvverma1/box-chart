import {ServerApp} from './server-app'

var serverApp = new ServerApp();

serverApp.setRoutes();

serverApp.startServer();