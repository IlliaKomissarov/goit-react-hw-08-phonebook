import { NavLink } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { useAuth } from 'hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Box display="flex" alignItems="center" padding="15px">
      <NavLink to="/">
        <Box
          margin="10px"
          backgroundColor="#f5f5f5"
          as="button"
          p={3}
          color="black"
          fontWeight="bold"
          borderRadius="md"
          _hover={{
            background: 'linear-gradient(to bottom, #212121 5%, #ededed 100%)',
            backgroundColor: '#212121',
            color: '#ffffff',
          }}
        >
          Home
        </Box>
      </NavLink>

      {isLoggedIn && (
        <NavLink to="/contacts">
          <Box
            backgroundColor="#f5f5f5"
            as="button"
            p={3}
            color="black"
            fontWeight="bold"
            borderRadius="md"
            mr="0"
            _hover={{
              background:
                'linear-gradient(to bottom, #212121 5%, #ededed 100%)',
              backgroundColor: '#212121',
              color: '#ffffff',
            }}
          >
            Contacts
          </Box>
        </NavLink>
      )}
    </Box>
  );
};
