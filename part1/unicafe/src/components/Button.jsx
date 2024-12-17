import React from 'react'
import { useState } from 'react'


export const Button = ({text, onClick}) => {

    return (
        <>
          <button onClick={onClick} >
            {text}
          </button>
        </>
    )
}
