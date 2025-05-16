import Toggle from "../../components/UI/Toggle";

export default function SettingsSection() {
    return (
        <section className="w-full">
            <div className="">
                <div className="container px-4">
                    <article className="font-bold text-[30px] mt-2 mb-8">
                        <h3>Settings</h3>
                    </article>
                </div>
                <div className=" px-4 py-2">
                    <div className="container mx-auto px-4 flex justify-between items-center">
                        <article>
                            <p>Dark and light mode</p>
                        </article>
                        <Toggle />
                    </div>
                </div>

                {/* <div className="text-center font-bold text-4xl">
                    <h3>
                        Coming soon...
                    </h3>
                </div> */}
                <div>
                </div>
            </div>
        </section>
    )
}
