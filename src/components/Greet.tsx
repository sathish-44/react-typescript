type GreetProps = {
    name : string
}
export const Greet = (props : GreetProps) => {
  return (
    <div>Welcome {props.name}! you have 10 unread msg</div>
  )
}
