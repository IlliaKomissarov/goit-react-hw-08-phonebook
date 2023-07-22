import { Box, Text } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <Box
     backgroundColor="#004c97"
paddingTop="20px"
      backgroundImage="linear-gradient(rgba(47, 48, 58, 0.4), 
rgba(47, 48, 58, 0.4)
    )"
    >
      <Helmet>
        <title>Save Contacts</title>
      </Helmet>
      <Text
height="100%"
textAlign="center"
margin="15px"
fontWeight="bold"
color="white" /* змінено колір тексту на темний */
fontSize="24px"
      >
        Preserve your contacts - this is a user-friendly app that is readily available, eliminating the need to search for vital contacts in your notes. Now, all your contacts are stored on your phone. The intuitive interface enables quick addition of new contacts, and a handy filter allows sorting contacts by name, saving you from endlessly scrolling through long lists of contacts.
        <div>Keep your contacts safe and enjoy a wonderful day!</div>
      </Text>
    </Box>
  );
}
