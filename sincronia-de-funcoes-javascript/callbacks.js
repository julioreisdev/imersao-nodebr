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

function getUser(id, callback) {
  setTimeout(() => {
    const user = users.find((currently) => currently.id === id)
    return callback(!user, user)
  }, 1000)
}

getUser(0, (err, res) => {
  if (err) {
    console.log('Error: User not found')
    return
  }
  console.log(res)
})