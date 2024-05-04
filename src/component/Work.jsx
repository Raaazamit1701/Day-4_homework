
const Work = () => {
    return (
      <div className="w-screen flex justify-around items-center gap-12 border-b-4 border-black py-8">
        <div className="flex justify-center items-center">
          <img
            src="https://image.similarpng.com/very-thumbnail/2020/11/Blue-massage-icon-on-transparent-background-PNG.png"
            alt="massage icon"
            className="h-24 w-24 rounded-full border bg-blue-400"
          />
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold">Present -  </h1>
            <div>
              <h1 className="text-xl font-bold">Jessica Green - Freelance writer</h1>
              <p>Create blog posts, landing pages, e-books, and case studies for clients.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold">2016 - </h1>
            <div>
              <h1 className="text-xl font-bold">Jessica Green - Freelance writer</h1>
              <p>Create blog posts, landing pages, e-books, and case studies for clients.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold">2013-2016 - </h1>
            <div>
              <h1 className="text-xl font-bold">Jessica Green - Freelance writer</h1>
              <p>Create blog posts, landing pages, e-books, and case studies for clients.</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Work;