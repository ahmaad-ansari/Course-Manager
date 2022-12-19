import React, { useRef, useState, useEffect } from 'react';
import App from '../App';
import { SiCoursera } from 'react-icons/si';
import { useStateContext } from '../contexts/ContextProvider';
import { checkLogin } from '../api/account';


const Login = () => {
	const { loginInfo, setLoginInfo, success, setSuccess } = useStateContext();

	const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

	const handleSubmit = async (e) => {
		e.preventDefault();

		try{
			let res = await checkLogin({ username: user, password: pwd });
			setLoginInfo(res.data[0]);
			setSuccess(true);
		} catch(err) {
			setErrMsg("Unauthorized")
		}
	}

	return (
		<>
			{success ? (
                <App />
            ) : (
				<section class="bg-gray-50 dark:bg-gray-900">
					<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
						<a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
							<SiCoursera /> <span className="ml-2">Course Manager</span>
						</a>
						<div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
							<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
								<h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
									Sign in to your account
								</h1>
								<form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
									<div>
										<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
										<input type="text" name="username" id="username" ref={userRef} autoComplete="off" onChange={(e) => setUser(e.target.value)} value={user} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
									</div>
									<div>
										<label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
										<input type="password" name="password" id="password" onChange={(e) => setPwd(e.target.value)} value={pwd} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
									</div>
									<button type="submit" className="w-full text-white bg-blue-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
								</form>
								<p ref={errRef} className={errMsg ? "errmsg text-center" : "offscreen text-center"} aria-live="assertive">{errMsg}</p>
							</div>
						</div>
					</div>
			  	</section>
			)}
		</>
    )
}

export default Login