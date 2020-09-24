import app              from './app'
import http             from 'http'

const { PORT = 8080 } = process.env;
app.set('port', PORT);

/**
 * Create HTTP server.
 */
var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(PORT);
