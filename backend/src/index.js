const app = require('./app');
require('./database');


async function main(){
    await app.listen(app.get('port'));
    console.log('Servidor en puerto', app.get('port'));
}

main()
