async function update(url='', payload={}) {
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(payload)
  }

  let response = await fetch(url, options)

  if (response.ok) {
    return await response.json()
  }
  else {
    console.log(`Error in 'js/update.js' = ${response.status}`)
    throw response.status
  }
}

export default update