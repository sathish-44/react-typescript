type GreetProps = {
    name : string
    msgCount ?: number
    isLoggedIn : boolean
}
export const Greet = (props : GreetProps) => {
    const { msgCount = 0 } = props
  return (
    <div>
        {
            props.isLoggedIn ? `Welcome {props.name}! you have ${msgCount} unread msg` : `Welcome Guest`
        }
    </div>
  )
}
