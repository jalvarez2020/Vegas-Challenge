const {server} = require('./serverConfig')
const port = 5000;






server.listen(port, () => {
    console.log(`Server listening on ${port}`);
})