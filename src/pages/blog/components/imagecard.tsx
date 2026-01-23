import Blogimgcard from "@/assets/blogimgcard.png"
import MyButton from "@/components/button.tsx"
import Rdicon from "@/assets/rdicon.png"
import Calendar from "@/assets/clander.png"
import Clock from "@/assets/clock.png"

export default function imagecard () {

  return (
    <div className="container">
        
<div className=" mx-auto bg-white rounded-[24px] shadow-lg overflow-hidden flex flex-col md:flex-row">
  {/* Image */}
  <div className="">
    <img
      src={Blogimgcard}
      alt="Blog Image"
      className="w-full max-w-[787px] rounded-[24px] h-full object-cover"
    />
  </div>

  {/* Content */}
  <div className="md:w-2/3 w-full p-6 flex flex-col justify-between">
  <div className="flex justify-between items-center">
  <span className="services-badge-secondry">Design</span>
  <img src={Rdicon} alt="" className="w-[30px] h-[30px] md:w-[70px] md:h-[60px]"/>
</div>

   

    {/* Title */}
   <div className="flex flex-col gap-3">

         <h1 className="card-heading">
      Neural Interface Protocol
    </h1>

    {/* Description */}
    <p className="dark-text">
      Developing next-generation human-computer interaction through advanced neural networks
    </p>
    </div>
   

    {/* Info: Date + read time + author */}
   <div className="flex flex-wrap items-center text-gray-500 text-sm my-4 gap-4">
  <span className="flex items-center gap-1">
    <img src={Calendar} width={22} alt="calendar" />
    Nov 15, 2025
  </span>

  <span className="flex items-center gap-1">
    <img src={Clock} width={22} alt="clock" />
    8 min read
  </span>
</div>


    {/* Read More Button */}
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center md:gap-0 gap-2    ">
        <p className="dark-text">Blog By: Sarah Chen</p>
      <MyButton text="READ MORE" />
    </div>
  </div>
</div>

    </div>
  );
};
