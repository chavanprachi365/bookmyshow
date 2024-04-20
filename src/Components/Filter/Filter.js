import React from "react";
import { IoChevronDown } from "react-icons/io5";
import { Button } from "../Buttons/Button";
import { IoChevronUpSharp } from "react-icons/io5";
import { useState } from "react";

export const Filter = ({ buttons, title }) => {
  const [open, setOpen] = useState(true);
  function togglestate() {
    setOpen(!open);
  }


  return (
    <div >
      <div className="bg-white rounded shadow-sm py-3 p-2 my-3  ">
        <div onClick={togglestate}className="  d-flex justify-content-between align-items-center  p_cursor_pointer a_user_select_none" >
          <div className="d-flex  align-items-center gap-3 ">
            {open ? <IoChevronUpSharp /> : <IoChevronDown />}
            <h6 className={`${open ? "a_redlite_color2" : "text-dark"}`}> {title} </h6>
          </div>
          <h6 className="text-muted">clear</h6>
        </div>
        
        <div>
          {open && (
            <div className="mt-3 d-flex flex-wrap gap-2">
              {buttons.map((value) =>{
                return( <Button key={value} title={value} />)
                
              }
              )}
                
            
            
              
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
