import { registerBlockType } from '@wordpress/blocks';


import './style.scss';


import Edit from './edit';
import save from './save';
import metadata from './block.json';


registerBlockType( metadata, {
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
} );
