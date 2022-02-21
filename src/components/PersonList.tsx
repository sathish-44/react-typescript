type PersonListProps = {
    names : {
        fName : string,
        lName : string
    }[]
}

export const PersonList = (props : PersonListProps) => {
  return (
    <div>
        {
            props.names.map(name => {
                return (
                    <h2 key={name.fName}>
                        {name.fName} {name.lName}
                    </h2>
                )
            })
        }
    </div>
  )
}
