import '@testing-library/jest-dom'
import React from 'react'
import { act, render, screen } from '@testing-library/react'
import { My } from './My'
import { promiseTimeout } from './promiseTimeout'

describe('My2', () => {
    it.each(['0', '1', '2', '3'])('', async (p) => {
        act(() => {
            render(<My />)
        })

        await promiseTimeout(60)

        await screen.findByText(`loaded: ${p}`)
    })
})
