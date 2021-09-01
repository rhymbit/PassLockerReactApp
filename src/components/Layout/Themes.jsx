import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { darkTheme, lightTheme } from "../../js/themes"
import { setAppTheme } from "../../redux/appSlice"

export default function Themes() {

  const dispatch = useDispatch()
  const currentTheme = useSelector(state => state.app.theme)

  const onClick = (e) => {
    currentTheme === `dark` ? lightTheme() : darkTheme()
    dispatch(setAppTheme(e.target.value === `dark` ? `light` : `dark`))
  }

  useEffect(() => {
  }, [currentTheme])

  return (
    <label className="toggle-theme">
      <input 
        id="themeToggle" 
        type="checkbox" 
        value={currentTheme}
        onClick={onClick}
      />
      <span className="slider"></span>
    </label>
  )
}