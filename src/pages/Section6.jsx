import Button from "../components/Button";
import house1 from "../assets/house (1).jpeg"
import house2 from "../assets/house (2).jpeg"
import house3 from "../assets/house (3).jpeg"
import house4 from "../assets/house (4).jpeg"
import house5 from "../assets/house (5).jpeg"
import house6 from "../assets/house (6).jpeg"
import house7 from "../assets/house (7).jpeg"
import house8 from "../assets/house (8).jpeg"
import house9 from "../assets/house (9).jpeg"
import house10 from "../assets/house (10).jpeg"
import house11 from "../assets/house (11).jpeg"
import house12 from "../assets/house (12).jpeg"
import house13 from "../assets/house (13).jpeg"
import house14 from "../assets/house (14).jpeg"
import house15 from "../assets/house (15).jpeg"
import house16 from "../assets/house (16).jpeg"
import house17 from "../assets/house (17).jpeg"
import house18 from "../assets/house (18).jpeg"
import house19 from "../assets/house (19).jpeg"
import house20 from "../assets/house (20).jpeg"
import house21 from "../assets/house (21).jpeg"
import house22 from "../assets/house (22).jpeg"
import house23 from "../assets/house (23).jpeg"
import house24 from "../assets/house (24).jpeg"


export default function Section6() {
  return (
    <main className="flex flex-col justify-between gap-4 mx-auto px-4 py-8 max-w-screen-xl min-h-screen">
      <h1 className="font-bold text-[#54a96a] text-5xl text-primary max-sm:text-3xl max-md:text-4xl">
        Tell us about your House?
      </h1>

      <div className="mt-6">
        <h2 className="mt-4 font-semibold text-3xl">
          Type of architecture:
        </h2>
        <div className="[&_label]:flex-1 gap-8 [&_input]:border-2 [&_input]:border-primary checked:[&_input]:border-[10px] grid grid-cols-3 max-sm:grid-cols-1 mt-6 [&_input]:appearance-none [&_input]:size-8 [&_input]:rounded-full [&_label]:text-[15px] [&_input]:cursor-pointer">
          <div className="flex justify-between items-center gap-4 max-w-60">
            <img className="rounded-md size-12" src={house2} alt="" />
            <label htmlFor="" className="font-medium">Ranch style house</label>
            <input className="border-[#54a96a]" type="radio" name="architecture" id="" />
          </div>
          <div className="flex justify-between items-center gap-4 max-w-60">
          <img className="rounded-md size-12" src={house20} alt="" />
            <label htmlFor="" className="font-medium">Cape cod</label>
            <input className="border-[#54a96a]" type="radio" name="architecture" id="" />
          </div>
          <div className="flex justify-between items-center gap-4 max-w-60">
          <img className="rounded-md size-12" src={house10} alt="" />
            <label htmlFor="" className="font-medium">Mediterranean Revival</label>
            <input className="border-[#54a96a]" type="radio" name="architecture" id="" />
          </div>
          <div className="flex justify-between items-center gap-4 max-w-60">
          <img className="rounded-md size-12" src={house1} alt="" />
            <label htmlFor="" className="font-medium">Townhome</label>
            <input className="border-[#54a96a]" type="radio" name="architecture" id="" />
          </div>
          <div className="flex justify-between items-center gap-4 max-w-60">
          <img className="rounded-md size-12" src={house16} alt="" />
            <label htmlFor="" className="font-medium">Colonial</label>
            <input className="border-[#54a96a]" type="radio" name="architecture" id="" />
          </div>
          <div className="flex justify-between items-center gap-4 max-w-60">
          <img className="rounded-md size-12" src={house9} alt="" />
            <label htmlFor="" className="font-medium">American Craftsmen</label>
            <input className="border-[#54a96a]" type="radio" name="architecture" id="" />
          </div>
          <div className="flex justify-between items-center gap-4 max-w-60">
          <img className="rounded-md size-12" src={house24} alt="" />
            <label htmlFor="" className="font-medium">Farmhouse</label>
            <input className="border-[#54a96a]" type="radio" name="architecture" id="" />
          </div>
          <div className="flex justify-between items-center gap-4 max-w-60">
          <img className="rounded-md size-12" src={house15} alt="" />
            <label htmlFor="" className="font-medium">Tudor</label>
            <input className="border-[#54a96a]" type="radio" name="architecture" id="" />
          </div>
          <div className="flex justify-between items-center gap-4 max-w-60">
          <img className="rounded-md size-12" src={house8} alt="" />
            <label htmlFor="" className="font-medium">Single family home</label>
            <input className="border-[#54a96a]" type="radio" name="architecture" id="" />
          </div>
          <div className="flex justify-between items-center gap-4 max-w-60">
          <img className="rounded-md size-12" src={house23} alt="" />
            <label htmlFor="" className="font-medium">Apartment</label>
            <input className="border-[#54a96a]" type="radio" name="architecture" id="" />
          </div>
          <div className="flex justify-between items-center gap-4 max-w-60">
          <img className="rounded-md size-12" src={house19} alt="" />
            <label htmlFor="" className="font-medium">Tiny home</label>
            <input className="border-[#54a96a]" type="radio" name="architecture" id="" />
          </div>
          <div className="flex justify-between items-center gap-4 max-w-60">
          <img className="rounded-md size-12" src={house7} alt="" />
            <label htmlFor="" className="font-medium">Victorian house</label>
            <input className="border-[#54a96a]" type="radio" name="architecture" id="" />
          </div>
          <div className="flex justify-between items-center gap-4 max-w-60">
          <img className="rounded-md size-12" src={house22} alt="" />
            <label htmlFor="" className="font-medium">Cottage</label>
            <input className="border-[#54a96a]" type="radio" name="architecture" id="" />
          </div>
          <div className="flex justify-between items-center gap-4 max-w-60">
          <img className="rounded-md size-12" src={house14} alt="" />
            <label htmlFor="" className="font-medium">Mid-century modern</label>
            <input className="border-[#54a96a]" type="radio" name="architecture" id="" />
          </div>
          <div className="flex justify-between items-center gap-4 max-w-60">
          <img className="rounded-md size-12" src={house6} alt="" />
            <label htmlFor="" className="font-medium">Bungalow</label>
            <input className="border-[#54a96a]" type="radio" name="architecture" id="" />
          </div>
          <div className="flex justify-between items-center gap-4 max-w-60">
          <img className="rounded-md size-12" src={house21} alt="" />
            <label htmlFor="" className="font-medium">Mobile home</label>
            <input className="border-[#54a96a]" type="radio" name="architecture" id="" />
          </div>
          <div className="flex justify-between items-center gap-4 max-w-60">
          <img className="rounded-md size-12" src={house13} alt="" />
            <label htmlFor="" className="font-medium">Contempory</label>
            <input className="border-[#54a96a]" type="radio" name="architecture" id="" />
          </div>
          <div className="flex justify-between items-center gap-4 max-w-60">
          <img className="rounded-md size-12" src={house5} alt="" />
            <label htmlFor="" className="font-medium">Greek Revival</label>
            <input className="border-[#54a96a]" type="radio" name="architecture" id="" />
          </div>
          <div className="flex justify-between items-center gap-4 max-w-60">
          <img className="rounded-md size-12" src={house18} alt="" />
            <label htmlFor="" className="font-medium">Multifamily home</label>
            <input className="border-[#54a96a]" type="radio" name="architecture" id="" />
          </div>
          <div className="flex justify-between items-center gap-4 max-w-60">
          <img className="rounded-md size-12" src={house12} alt="" />
            <label htmlFor="" className="font-medium">Prairie School</label>
            <input className="border-[#54a96a]" type="radio" name="architecture" id="" />
          </div>
          <div className="flex justify-between items-center gap-4 max-w-60">
          <img className="rounded-md size-12" src={house4} alt="" />
            <label htmlFor="" className="font-medium">Split level home style</label>
            <input className="border-[#54a96a]" type="radio" name="architecture" id="" />
          </div>
          <div className="flex justify-between items-center gap-4 max-w-60">
          <img className="rounded-md size-12" src={house17} alt="" />
            <label htmlFor="" className="font-medium">French country</label>
            <input className="border-[#54a96a]" type="radio" name="architecture" id="" />
          </div>
          <div className="flex justify-between items-center gap-4 max-w-60">
          <img className="rounded-md size-12" src={house11} alt="" />
            <label htmlFor="" className="font-medium">Georgian architecture</label>
            <input className="border-[#54a96a]" type="radio" name="architecture" id="" />
          </div>
          <div className="flex justify-between items-center gap-4 max-w-60">
          <img className="rounded-md size-12" src={house3} alt="" />
            <label htmlFor="" className="font-medium">Cabin</label>
            <input className="border-[#54a96a]" type="radio" name="architecture" id="" />
          </div>
        </div>
      </div>

      <Button backLink="/sec5" nextLink="/sec7" />
    </main>
  )
}