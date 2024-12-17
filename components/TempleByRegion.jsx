import React from "react";

const TempleByRegion = () => {
  return (
    <div id="temple" className="templeall container mx-auto p-4">
      <h1 className="text-center text-3xl font-bold mb-6">TEMPLE BY REGION</h1>
      <p className="text-center mb-6">ค้นหาข้อมูลวัดตามภูมิภาค</p>

     
      <div className="flex overflow-x-auto gap-4">
       
        <div id="watthai" className="wat shrink-0">
          <img
            id="imagewatthai"
            className="imagewatthai2 w-[300px] h-[300px] object-cover"
            src="/images/force.jpg" 
            alt="ภาคเหนือ"
          />
          <p className="text-center mt-2">ภาคเหนือ</p>
        </div>

       
        <div id="watthai" className="wat shrink-0">
          <img
            id="imagewatthai"
            className="imagewatthai2 w-[300px] h-[300px] object-cover"
            src="/images/force.jpg" 
            alt="ภาคกลาง"
          />
          <p className="text-center mt-2">ภาคกล</p>
        </div>

       
        <div id="watthai" className="wat shrink-0">
          <img
            id="imagewatthai"
            className="imagewatthai2 w-[300px] h-[300px] object-cover"
            src="/images/force.jpg" 
            alt="ภาคตะวันออกเฉียงเหนือ"
          />
          <p className="text-center mt-2">ภาคตะวันออกเฉียงเหนือ</p>
        </div>

        
        <div id="watthai" className="wat shrink-0">
          <img
            id="imagewatthai"
            className="imagewatthai2 w-[300px] h-[300px] object-cover"
            src="/images/force.jpg" 
            alt="ภาคตะวันตก"
          />
          <p className="text-center mt-2">ภาคตะวันตก</p>
        </div>
      </div>
    </div>
  );
};

export default TempleByRegion;
