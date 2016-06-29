/*
@Company: Medimojo
@Author: Prashant Sudeep
*/

var port = process.env.PORT || 4002;

module.exports = {
	conf: {
		host: '127.0.0.1',
		port: port,
		maxHttpConnections: 1000,
		maxFSDescriptor: 1000
	},
	mongo: {
		hosts: [ '127.0.0.1' ],
		dbname: 'mydatabase',
		auth: {
			enabled: false,		// Note: username pwd will ONLY be used if enabled === true
			username: '',
			password: ''
		},
		poolSize: 20
	}
};
