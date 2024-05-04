
const Header = () => {
    return (
      <div className=" w-screen flex justify-around items-center gap-12  border-b-4 border-black">
        <div className="h-1/3 w-1/3 flex justify-center align-middle ">
          <img
            src="https://png.pngtree.com/png-clipart/20230922/original/pngtree-blue-user-icon-profile-and-account-vector-design-vector-sign-vector-png-image_12652714.png"
            alt=""
            className="h-24 w-24 rounded-full border bg-blue-400"
          />
        </div>
        <div className=" h-52 w-1/3 flex justify-center items-center border-r-4 border-black flex-col">
    <h1 className="font-bold">Jessica Green</h1>
    <h1 className="font-medium">Freelance writer</h1>
  </div>
        <div className="h-1/3 w-1/3 flex justify-center align-middle flex-col  ">
          <h1 className="mb-2 text-2xl p-6">
            Specializes in writing long-form blog content, case studies, e-books,
            and white papers for B2B tech startups and marketing agencies
          </h1>
          <h1>Email: abc@gmail.com</h1>
          <h1>Website: myWebsite.com</h1>
        </div>
      </div>
    );
  };
  
  export default Header;