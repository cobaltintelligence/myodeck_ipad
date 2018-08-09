// Styles.js
// Yuan Wang

import { StyleSheet } from 'react-native';
import { Black, Blue, Red, Slate, White } from '../helpers/Colors.js'

export const __STYLES__ = StyleSheet.create({
  h1: {
    color: White(1),
    fontSize: 40
  },
  h2: {
  	color: White(1),
  	fontSize: 32
  },
  h3: {
    color: White(1),
    fontSize: 24
  },
  h4: {
    color: White(1),
    fontSize: 18
  },
  p: {
    color: White(1),
    fontSize: 14
  },
  subtitle: {
    color: Black(1),
    fontSize: 18
  },
  paragraph: {
    color: Black(1),
    fontSize: 18
  },
  whiteText: {
  	color: White(1),
  },
  slateText: {
  	color: Slate(1)
  },
  header: {
  	color: Slate(0.8),
  	fontSize: 18,
  	fontWeight: '600'
  },
  shadow: {
    shadowOffset: {  
      width: 3,  
      height: 3
    },
    shadowColor: 'black',
    shadowOpacity: 0.5,
	},
	shadowUp: {
    shadowOffset: {  
      width: 0,  
      height: -5
    },
    shadowColor: 'black',
    shadowOpacity: 0.5,
	},
	smallShadow: {
    shadowOffset: {   
      width: 1,  
      height: 4
    },
    zIndex: 2,
    shadowColor: 'black',
    shadowOpacity: 0.5,
	},
	smallShadowUp: {
    shadowOffset: {   
      width: 0,  
      height: -1
    },
    zIndex: 1,
    shadowColor: 'black',
    shadowOpacity: 0.5,
	}
});