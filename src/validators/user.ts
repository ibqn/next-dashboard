import { z } from 'zod'

export const userSchema = z.object({
  firstName: z.string().min(2, {
    message: 'First name must be at least 2 characters.',
  }),
  lastName: z.string().min(2, {
    message: 'Last name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please provide a valid email address.',
  }),
  phone: z.string().min(5, {
    message: 'Username must be at least 2 characters.',
  }),
  address: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
})

export type UserPayload = z.infer<typeof userSchema>
