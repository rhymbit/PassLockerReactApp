import React, { useState } from "react"
import { useEffect } from "react"
import { darkTheme, lightTheme } from '../../js/themes'

export default function Themes() {

  const [theme, setTheme] = useState("dark")

  const onClick = (e) => {
    const currentTheme = e.target.value
    console.log(currentTheme)
    currentTheme === "dark" ? setTheme("light") : setTheme("dark")
  }

  useEffect(() => {
    theme === "dark" ? darkTheme() : lightTheme()
  }, [theme])

  return (
    <label className="toggle-theme">
      <input 
        id="themeToggle" 
        type="checkbox" 
        value={theme}
        onClick={onClick}
      />
      <span className="slider"></span>
    </label>
  )
}