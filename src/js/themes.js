function darkTheme() {

  let r = document.querySelector(':root')

  r.style.setProperty(`--gray0`, `#f8f8f8`)
  r.style.setProperty(`--gray1`, `#dbe1e8`)
  r.style.setProperty(`--gray2`, `#b2becd`)
  r.style.setProperty(`--gray3`, `#6c7983`)
  r.style.setProperty(`--gray4`, `#454e56;`)
  r.style.setProperty(`--gray5`, `#2a2e35`)
  r.style.setProperty(`--gray6`, `#12181b`)
}

function lightTheme() {

  let r = document.querySelector(':root')

  r.style.setProperty(`--gray0`, `#12181b`)
  r.style.setProperty(`--gray1`, `#2a2e35`)
  r.style.setProperty(`--gray2`, `#454e56;`)
  r.style.setProperty(`--gray3`, `#6c7983`)
  r.style.setProperty(`--gray4`, `#b2becd`)
  r.style.setProperty(`--gray5`, `#dbe1e8`)
  r.style.setProperty(`--gray6`, `#f8f8f8`)
}

export { darkTheme, lightTheme }