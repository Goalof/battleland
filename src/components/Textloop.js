import React from 'react';
import atomize from "@quarkly/atomize";
import TextLoop from "react-text-loop";
const Box = atomize.div();

const Loop = ({
	list = 'some,text,here',
	...props
}) => <Box {...props}>
	  
	<TextLoop {...props}>
		 
    
		{list.split(',').map(item => <div>
			{item}
		</div>)}
		  
	</TextLoop>
	 
</Box>;

export default atomize(Loop)({
	name: "Loop",
	effects: {
		hover: ":hover"
	},
	description: {
		en: "Loop — my awesome component"
	},
	propInfo: {
		interval: {
			control: "input",
			category: 'Main',
			weight: 1
		},
		list: {
			control: "input",
			category: 'Main',
			weight: 1
		}
	}
});