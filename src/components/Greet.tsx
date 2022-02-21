type GreetProps = {
    name : string
    msgCount : number
    isLoggedIn : boolean
}
export const Greet = (props : GreetProps) => {
  return (
    <div>
        {
            props.isLoggedIn ? `Welcome {props.name}! you have {props.msgCount} unread msg` : `Welcome Guest`
        }
    </div>
  )
}
