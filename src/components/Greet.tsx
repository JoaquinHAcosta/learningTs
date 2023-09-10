type GreetProps = {
    name: string
    messageCount: number
    isLoggedIn: boolean
}

export const Greet = ( props: GreetProps ) => {
    return(
        <div>
            <h2>
            {
                props.isLoggedIn ?
                `Welcome welcome ${props.name}! You have ${props.messageCount} messages` :
                `Welcome Guest`
            }
            </h2>
        </div>
    )
}

 