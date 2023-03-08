import React from 'react'

interface ButtonProps {
    styles: string
}

export function Button({ styles }: ButtonProps) {
    return (
        <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles}`}>
            Get Started
        </button>
    )
}