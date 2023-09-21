export const createNewContact = async (email: string) => {
  console.log(email)
  const response = await fetch(`api/contacts`, {
    method: 'POST',
    body: JSON.stringify(email),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return await response.json()
}
