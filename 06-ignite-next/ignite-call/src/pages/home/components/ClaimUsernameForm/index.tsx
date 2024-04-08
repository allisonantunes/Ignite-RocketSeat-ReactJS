import { Button, Text, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { Form, FormAnnotation } from './styles'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'

const clainUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Pelo menos 3 letras' })
    .regex(/^([a-z\\-\\_]+)$/i, { message: 'Apenas letras e Underline' })
    .transform((username) => username.toLowerCase()),
})

type ClainUsernameForm = z.infer<typeof clainUsernameFormSchema>

export function ClaimUsernameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ClainUsernameForm>({
    resolver: zodResolver(clainUsernameFormSchema),
  })
  const router = useRouter()

  async function handleClainUsernameForm(data: ClainUsernameForm) {
    const { username } = data
    await router.push(`/register?username=${username}`)
  }
  return (
    <>
      <Form as="form" onSubmit={handleSubmit(handleClainUsernameForm)}>
        <TextInput
          crossOrigin=""
          size="sm"
          prefix="ignite.com/"
          placeholder="seu-usuário"
          {...register('username')}
        />
        <Button size="sm" type="submit" disabled={isSubmitting}>
          Reservar
          <ArrowRight />
        </Button>
        <FormAnnotation>
          <Text size="sm">
            {errors.username
              ? errors.username.message
              : 'Digite o nome do Usuario desejado'}
          </Text>
        </FormAnnotation>
      </Form>
    </>
  )
}
