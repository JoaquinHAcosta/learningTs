import React from "react"

type ButtomProps = {
    variant: 'primary' | 'secondary'
    children: string
} & Omit<React.ComponentProps<'button'>, 'children'>

export const CustomButtom = ({ variant, children, ...rest }: ButtomProps) => {
    return <button className={`class-with-${variant}`} {...rest}>{children}</button>
}