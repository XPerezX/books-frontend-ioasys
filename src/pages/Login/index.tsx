import * as React from 'react';
import { Text } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { ColorModeSwitcher } from '../../components/ColorModeSwitcher';

const Login: React.FC = () => {
	const d = useNavigate();

	return (
		<>
			<Text>Login</Text>
			<Link to="/">go to home</Link>
			<Text onClick={() => d('/', {})}>redirect to home</Text>
			<ColorModeSwitcher />
		</>
	);
};

export default Login;
