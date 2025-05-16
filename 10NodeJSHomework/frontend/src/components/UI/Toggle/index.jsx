import { useEffect, useState } from "react"

export default function Toggle() {
  const [theme, setTheme] = useState("cupcake");

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
      document.documentElement.setAttribute("data-theme", localTheme)
    }
    // document.querySelector("html").setAttribute("data-theme", theme)
  }, [])

  const handleTheme = () => {
    const newTheme = theme === "cupcake" ? "night" : "cupcake"
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme)
  }

  return (
    <div >
      <button className="transition-all swap swap-rotate" onClick={handleTheme}>
        {theme === "cupcake" ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  )
}
