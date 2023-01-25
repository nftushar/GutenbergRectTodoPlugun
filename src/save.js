import { useBlockProps } from '@wordpress/block-editor';


export default function save() {
	return (
		<p { ...useBlockProps.save() }>
			{ 'NF Giveaway – hello from the saved content!' }
		</p>
	);
}




// import React, { useEffect, useState } from 'react';

// import React , { useState, useEffect } from "react";


// function Timer() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {

//     // setInterval(() => {
//       setCount('Hello' + Math.random())
//     // }, 1000);

//   },[]);

//   return <h1>I've rendered {count} times!</h1>;
// }

// export default Timer;



