import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { Box, Text } from '@chakra-ui/react';
import { Button } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box display="flex" alignItems="center">
      <Text fontSize="16px" margin="15px" color="#f5f5f5">
        Welcome, {user.name}{' '}
      </Text>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Box>
  );
};
