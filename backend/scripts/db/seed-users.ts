import { PrismaClient } from '@prisma/client'
import { PasswordHasher } from '@/services/passwordHasher'

const prisma = new PrismaClient()

async function main() {
  await prisma.movifierAppUser.create({
    data: {
      email: 'admin@gmail.com',
      name: 'Admin',
      username: 'admin',
      password: await PasswordHasher.hashPassword('12345'),
      role: 'ADMIN'
    }
  })

  await prisma.movifierAppUser.create({
    data: {
      email: 'tester@gmail.com',
      name: 'Tester',
      username: 'tester',
      password: await PasswordHasher.hashPassword('12345'),
      role: 'USER'
    }
  })
}

main()
  .then(() => console.log('Seed was successful'))
  .catch((e) => console.error(e))
