import prisma from "../db"
import { comparePasswords, createJWT, hashPassword } from "../modules/auth"

export const createNewUser = async (req, res) => {
  const user = await prisma.user.create({
    data: {
      username: req.body.username,
      password: await hashPassword(req.body.username)
    }
  })

  const token = createJWT(user)

  res.json({ token })
}

export const signIn = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      username: req.body.username
    }
  })

  if (!user) {
    res.json(401)
    res.json({ message: 'User not found'})

    return
  }

  const isValid = await comparePasswords(req.body.password, user?.password)

  if (!isValid) {
    res.json(401)
    res.json({ message: 'Wrong password '})

    return
  }

  const token = createJWT(user)

  res.json({ token })
}