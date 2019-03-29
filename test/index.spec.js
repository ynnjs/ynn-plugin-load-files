const path = require( 'path' );
const Ynn = require( 'ynn' );

function create( p, name ) {
    return new Ynn( {
        root : __dirname,
        debugging : Ynn.DEBUGGING_DANGER,
        logging : false,
        plugins : {
            'load-testing-files' : {
                path : '../src',
                options : { path : p, name  }
            }
        }
    } );
}

describe( 'ynn-plugin-load-files', () => {
    it( 'load files', async () => {
        const app = create( path.join( __dirname, 'files' ), 'testing-files' );
        await app.ready();
        expect( app[ 'testing-files' ] ).toEqual( {
            a : { a : 1 },
            b : { b : 2 }
        } );

        console.log( app[ 'testing-files' ] );
    } );
} );
