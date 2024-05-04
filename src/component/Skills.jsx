const Skills = () => {
    return (
      <div className=" w-screen flex justify-around items-center gap-12  border-b-4 border-black">
        <div className="h-1/3 w-1/3 flex justify-center align-middle ">
          <img
            src="https://img.freepik.com/premium-vector/skills-icon-with-settings-sign-skills-icon-customize-setup-manage-process-symbol-vector-icon_775815-966.jpg"
            alt=""
            className="h-24 w-24 rounded-full border bg-blue-400"
          />
        </div>
        <div className=" h-52 w-1/3 flex justify-center items-center border-r-4 border-black flex-col">
          <div className="flex gap-4 flex-col">
            <div className="flex  gap-4">
              <h1 className="text-2xl font-serif font-bold">writing :</h1>
              <div className="h-4 w-4 bg-blue-400 rounded-full"></div> 
              <div className="h-4 w-4 bg-blue-400 rounded-full"></div> 
              <div className="h-4 w-4 bg-blue-400 rounded-full"></div> 
              <div className="h-4 w-4 bg-blue-400 rounded-full"></div> 
            </div>
            <div className="flex  gap-4">
              <h1 className="text-2xl font-serif font-bold">Editing</h1>
              <div className="h-4 w-4 bg-blue-400 rounded-full"></div> 
              <div className="h-4 w-4 bg-blue-400 rounded-full"></div> 
              <div className="h-4 w-4 bg-blue-400 rounded-full"></div> 
              <div className="h-4 w-4 bg-blue-400 rounded-full"></div> 
            </div>
            <div className="flex gap-4">
              <h1 className="text-2xl font-serif font-bold">Social Media</h1>
              <div className="h-4 w-4 bg-blue-400 rounded-full"></div> 
              <div className="h-4 w-4 bg-blue-400 rounded-full"></div> 
              <div className="h-4 w-4 bg-blue-400 rounded-full"></div> 
              <div className="h-4 w-4 bg-blue-400 rounded-full"></div> 
              <div className="h-4 w-4 bg-blue-400 rounded-full"></div> 
              
            </div>
            
            <div className="flex gap-4">
              <h1 className="text-2xl font-serif font-bold">Reasearching</h1>
              <div className="h-4 w-4 bg-blue-400 rounded-full"></div> 
              <div className="h-4 w-4 bg-blue-400 rounded-full"></div> 
              <div className="h-4 w-4 bg-blue-400 rounded-full"></div> 
              <div className="h-4 w-4 bg-blue-400 rounded-full"></div> 
              <div className="h-4 w-4 bg-blue-400 rounded-full"></div> 
              
            </div>
          </div>
        </div>
        <div className="h-1/3 w-1/3 flex justify-center align-middle flex-col  ">
        <div className="flex flex-col gap-10">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold">nDash </h1>
              <div>
                <h1 className="text-xl ">why genralist writer lead to lost profits in B2B tech </h1>
               
              </div>
            </div>
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold">Zaipier </h1>
              <div>
                <h1 className="text-xl ">Organise your life with agile methode </h1>
                
              </div>
            </div>
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold">spoke</h1>
              <div>
                <h1 className="text-xl ">is 40 hours a week too much ? </h1>
                <h1 className="text-xl ">here what history and since say </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Skills;