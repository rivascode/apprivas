import React from 'react';
import warn from '../../images/UC.png';

const Contact = () => {
	return (
		<div className='warning'>
			<div>
				<h1>About</h1><br/><br/>
			</div>			
			<div>
				<img src={warn} alt='under constructions' />
			</div>			
		</div>
	)
};

export default Contact;
