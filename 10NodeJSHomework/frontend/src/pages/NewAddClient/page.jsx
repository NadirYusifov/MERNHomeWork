import "react-phone-number-input/style.css"
import PhoneInput from "react-phone-number-input";
import { useState } from "react";

export default function NewAddClient() {

  const [value, setValue] = useState();

  return (
    <section className="w-full">
      <div className="container mx-auto px-4">
        <article>
          <h3 className="text-[30px] font-bold mb-5">New add client</h3>
        </article>
        <form className="w-full space-y-3 lg:spcace-y-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 space-y-3 gap-x-3 lg:space-y-0">
            <label className="flex flex-col">
              Name and surname:
              <input className="new-add-client" type="text" placeholder="exp: Nadir Yusifov" />
            </label>
            <label className="flex flex-col">
              Email:
              <input className="new-add-client" type="text" placeholder="exp: example@gmail.com" />
            </label>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 space-y-3 gap-x-3 lg:space-y-0">
            <label>
              Department:
              <input className="new-add-client" type="text" placeholder="exp: Cashier" />
            </label>
            <label>
              Telephone number:
              {/* <input className="new-add-client" type="number" inputMode="numeric" placeholder="XXXXXXXXXX" /> */}
            <PhoneInput className="new-add-client" international countryCallingCodeEditable={false} defaultCountry="AZ" placeholder="Enter phone number" value={value} onChange={setValue}/>
            </label>
          </div>
          <label>
            Note:
            <textarea rows={8} />
          </label>
          <button className="w-full bg-green-700 rounded-lg text-white text-[18px] px-5 py-2 mt-6 cursor-pointer hover:bg-green-800 transition-all">Add</button>
        </form>
      </div>
    </section>
  )
}
