function darkTheme() {

  let r = document.querySelector(':root')
  passwordsTableTheme(`dark`)

  r.style.setProperty(`--gray0`, `#e5eaee`)
  r.style.setProperty(`--gray1`, `#dbe1e8`)
  r.style.setProperty(`--gray2`, `#b2becd`)
  r.style.setProperty(`--gray3`, `#6c7983`)
  r.style.setProperty(`--gray4`, `#454e56;`)
  r.style.setProperty(`--gray5`, `#2a2e35`)
  r.style.setProperty(`--gray6`, `#1a2327`)
}

function lightTheme() {

  let r = document.querySelector(':root')
  passwordsTableTheme()
  
  r.style.setProperty(`--gray0`, `#1a2327`)
  r.style.setProperty(`--gray1`, `#2a2e35`)
  r.style.setProperty(`--gray2`, `#454e56;`)
  r.style.setProperty(`--gray3`, `#6c7983`)
  r.style.setProperty(`--gray4`, `#b2becd`)
  r.style.setProperty(`--gray5`, `#dbe1e8`)
  r.style.setProperty(`--gray6`, `#e5eaee`)
}

function passwordsTableTheme(theme) {

  let table = document.querySelector(`[passwordstable]`)

  if (table) {
    theme === `dark` ? 
        table.classList.add(`table-dark`) 
      : 
        table.classList.remove(`table-dark`)
  }
}

export { darkTheme, lightTheme, passwordsTableTheme }