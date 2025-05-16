import { useState } from "react"
import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";

export default function RegisterSection() {
const [password, setPassword] = useState(false)

  return (
     <section className="login-section h-screen flex justify-center items-center">
          <div className="container mx-auto px-4 max-w-lg">
            <article className="text-center mb-16">
              <h3 className="text-green-700 font-bold text-[35px]">Welcome to <span className="text-zinc-700">CRM Panel</span></h3>
            </article>
            <div className="login-area">
              <article className="text-center mb-10">
                <h3 className="text-[25px] font-bold">Register</h3>
              </article>
              <form className="flex flex-col justify-center-safe space-y-4">
                <input className="bg-gray-300 rounded-lg px-4 py-2 outline-none" placeholder="Name and surname" type="text" required />
                <input className="bg-gray-300 rounded-lg px-4 py-2 outline-none" placeholder="Email" type="text" required />
                <div className="relative">
                  <div className="z-10 absolute top-2 right-4">
                    <button className="cursor-pointer text-gray-600" type="button" onClick={() => setPassword(!password)}>
                      {password ? <FaUnlock /> : <FaLock />}
                    </button>
                  </div>
                  <input className="w-full bg-gray-300 rounded-lg px-4 py-2 outline-none relative" placeholder="Password" type={!password ? "password" : "text"} required />
                </div>
                <button className="bg-green-700 py-2 rounded-lg text-white transition-all opacity-50 cursor-not-allowed">Register</button>
                <Link className="bg-green-700 py-2 rounded-lg text-white cursor-pointer hover:bg-green-800 transition-all text-center" to={"/allclient"}>
                  <button className="cursor-pointer">Guest</button>
                </Link>
                <article className="text-center">
                  <p>Haven't <Link to={"/"} className="text-green-700 underline">login</Link> yet?</p>
                </article>
              </form>
            </div>
          </div>
        </section>
  )
}
