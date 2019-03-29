const path = require( 'path' );
const loader = require( 'ynn/lib/loader' );

module.exports = ( app, options ) => {
    const { path : p, name } = options;
    app[ name ] = {};
    const dir = path.resolve( app.root, p );
    Object.assign( app[ name ], loader.files( dir ) );
}
