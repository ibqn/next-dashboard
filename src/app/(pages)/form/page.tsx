import { Heading } from '@/components/heading'
import { Separator } from '@/components/ui/separator'
import { UserForm } from '@/components/user-form'

export default function Form() {
  return (
    <main className="flex min-h-screen flex-col p-5">
      <Heading title="Create User" description="Create a new user profile" />

      <Separator />

      <UserForm />
    </main>
  )
}
