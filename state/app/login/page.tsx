const LoginPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-100 justify-center items-center">
      <div className="w-100 border border-gray-500 bg-white shadow-md rounded-md flex flex-col gap-2">
        <h1 className="text-3xl text-center">LOGIN ADMIN</h1>
        <div className="flex flex-col gap-2">
          <span>Username</span>
          <input type="text" className="p-2 border border-gray-300" />
        </div>
        <div className="flex flex-col gap-2">
          <span>Password</span>
          <input type="text" className="p-2 border border-gray-300" />
        </div>
        <button className="p-2 bg-blue-800 text-white hover:scale-105 hover:bg-blue-500">
          LOGIN
        </button>
      </div>
    </div>
  );
};
export default LoginPage;