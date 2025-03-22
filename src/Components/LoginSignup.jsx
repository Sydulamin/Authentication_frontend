const LoginSignup = () => {
    return (
        <div className="flex justify-center items-center bg-blue-500 h-screen">
            <div className="bg-white w-[900px] h-[500px] rounded-md shadow-lg">
                <div className="my-9 text-center">
                    <form className="flex flex-col p-10 items-center">
                        <h1 className="font-bold border, bg-slate-300 underline underline-offset-auto text-4xl">Login</h1>
                        <div className="m-4  border p-2 rounded-md w-3/4">
                            <input type="text" placeholder="Username" className="p-2 w-full rounded-md hover:text-xl cursor-pointer bg-gray-200" />
                        </div>
                        <div className="m-2 border p-2 rounded-md w-3/4">
                            <input type="password" placeholder="Password" className="p-2 w-full hover:text-xl  cursor-pointer rounded-md bg-gray-200" />
                        </div>
                        <button className="m-2 p-2 w-1/4 ease-in-out  bg-blue-600 text-white rounded-md transition hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;
