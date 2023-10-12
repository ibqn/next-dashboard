type Props = {
  title: string
  description: string
}

export const Heading = (props: Props) => {
  const { title, description } = props
  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}
