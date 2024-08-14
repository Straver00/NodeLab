import DBLocal from 'db-local'
import dotenv from 'dotenv'
import crypto from 'crypto'
import bcrypt from 'bcrypt'
import { z } from 'zod'

dotenv.config()

const { Schema } = new DBLocal({ path: './db' })

// Definición del modelo User con DBLocal
const User = Schema('User', {
  _id: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true }
})

export class UserRepository {
  static async create ({ username, password }) {
    // Esquema de validación de Zod para el username
    const usernameSchema = z.string()
      .min(3, 'El nombre de usuario debe tener al menos 3 caracteres')
      .max(20, 'El nombre de usuario no puede tener más de 20 caracteres')
      .regex(/^[a-zA-Z0-9_]+$/, 'El nombre de usuario solo puede contener letras, números y guiones bajos')

    // Esquema de validación de Zod para la password
    const passwordSchema = z.string()
      .min(8, 'La contraseña debe tener al menos 8 caracteres')
      .max(100, 'La contraseña no puede tener más de 100 caracteres')
      .regex(/[A-Z]/, 'La contraseña debe contener al menos una letra mayúscula')
      .regex(/[a-z]/, 'La contraseña debe contener al menos una letra minúscula')
      .regex(/[0-9]/, 'La contraseña debe contener al menos un número')
      .regex(/[\W_]/, 'La contraseña debe contener al menos un carácter especial')

    // Validaciones de username usando zod
    const usernameValidationResult = usernameSchema.safeParse(username)
    if (!usernameValidationResult.success) {
      const errors = usernameValidationResult.error.errors.map(error => error.message)
      throw new Error(`Error de validación de username: ${errors.join(', ')}`)
    }

    // Validaciones de password usando zod
    const passwordValidationResult = passwordSchema.safeParse(password)
    if (!passwordValidationResult.success) {
      const errors = passwordValidationResult.error.errors.map(error => error.message)
      throw new Error(`Error de validación de password: ${errors.join(', ')}`)
    }

    // 2. Asegurarse que el username no exista
    const user = User.findOne({ username })
    if (user) throw new Error('El nombre de usuario ya existe')

    const id = crypto.randomUUID()
    const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS))

    User.create({
      _id: id,
      username,
      password: hashedPassword
    }).save()

    return id
  }

  static login ({ username, password }) {
    // Implementación del método login
  }
}
