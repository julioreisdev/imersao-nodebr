const users = [
  {
    id: 1,
    name: 'Tanjiro',
    email: 'onirhashira@email.com'
  },
  {
    id: 2,
    name: 'Kakashi',
    email: 'hatake@email.com'
  }
]

const addresses = [
  {
    id: 1,
    userId: 2,
    address: 'Konoha'
  }
]

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((currently) => currently.id === id)
      if(!user) return reject(new Error('User not found'))
      return resolve(user)
    }, 1000)
  })
}

function getAddress(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const address = addresses.find((currently) => currently.userId === userId)
      if(!address) return resolve(null)
      return resolve(address)
    }, 1000)
  })
}

async function resolve() {
  try {
    const user = await getUser(1)
    const address = await getAddress(user.id)
    console.log({user, address})
  } catch (err) {
    console.error(err)
  }
}

resolve()