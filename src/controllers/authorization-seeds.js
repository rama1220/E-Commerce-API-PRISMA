import prisma from '../config/prisma.js'
import { Role, Permission, PermissionAssignment } from './authorization.js'

const main = async () => {
  await prisma.user.deleteMany()
  await prisma.permissionRole.deleteMany()
  await prisma.role.deleteMany()
  await prisma.permission.deleteMany()

  for (const role in Role) {
    await prisma.role.create({
      data: {
        name: Role[role]
      }
    })
  }

  for (const permission in Permission) {
    await prisma.permission.create({
      data: {
        name: Permission[permission]
      }
    })
  }

  for (const role in PermissionAssignment) {
    const roleRecord = await prisma.role.findUnique({
      where: {
        name: role
      }
    })
    console.log(roleRecord)

    for (const permission of PermissionAssignment[role]) {
      const permissionRecord = await prisma.permission.findUnique({
        where: {
          name: permission
        }
      })
      console.log(permissionRecord)

      await prisma.permissionRole.create({
        data: {
          roleId: roleRecord.id,
          permissionId: permissionRecord.id
        }
      })
    }
  }
}

main().catch((e) => {
  throw e
})
