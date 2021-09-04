async function deleteFunc(url = '', payload = {}) {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  }

  let response = await fetch(url, options)

  if (response.ok) {
    return await response.json()
  }
  else {
    console.log(`Error in deleteFunc.js' = ${response.status}`)
    throw response.status
  }
}

export default deleteFunc