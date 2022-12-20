import React, {useRef} from 'react';
import '@styles/Login.scss';
import Link from 'next/link';
import Image from 'next/image';

const Login = () => {
	const form = useRef(null);

const handleSubmit = (event)=>{
	event.preventDefault();
	const formData = new FormData(form.current);
	const data = {
		username: formData.get('email'),
		password: formData.get('password')
	};
	console.log(data);
};

	return (
		<div className="Login">
			<div className="Login-container">
				<Image src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
				<form action="/" className="form" ref={form}>
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" name="email" placeholder="platzi@example.cm" className="input input-email" />
					<label htmlFor="password" className="label">Password</label>
					<input type="password" name="password" placeholder="*********" className="input input-password" />
					<button type="submit"  className="primary-button login-button" onClick={handleSubmit}>
						Log in
					</button>
					<Link href="/">Forgot my password</Link>
				</form>
				<button 
					className="secondary-button signup-button"
					>
					Sign up
				</button>
			</div>
		</div>
	);
};

export default Login;
