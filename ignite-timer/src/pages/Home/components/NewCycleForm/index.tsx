import { useForm } from 'react-hook-form'
import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

export function NewCycleForm() {
  const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a Tarefa'),
    minutesAmount: zod
      .number()
      .min(5, 'o ciclo precia ser de no minimo 5 minutos')
      .max(60, 'o ciclo precia ser de no maximo 60 minutos'),
  })

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })
  return (
    <FormContainer onSubmit={handleSubmit(hadleCreateNewCycle)}>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="De um nome para o seu projeto"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Projeto 1"></option>
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minuto.</span>
    </FormContainer>
  )
}
