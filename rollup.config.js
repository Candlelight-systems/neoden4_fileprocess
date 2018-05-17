import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';

export default {
  input: 'src/index.jsx',
  output: {
    file: 'build/app.js',
    format: 'iife',
    name: "App"
  },
  
  external: [
    
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
	commonjs({
	  namedExports: {
	    'node_modules/react-dom/index.js': [ 'ReactDOM' ],
	    'node_modules/react/index.js': [ 'React', 'Children', 'Component', 'createElement' ]
	  }
	}),
	replace({
      'process.env.NODE_ENV': JSON.stringify( 'production' )
    })
  ]
};