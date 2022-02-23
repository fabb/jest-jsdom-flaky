import '@testing-library/jest-dom'
import React from 'react'
import { findByText, render, screen, waitFor } from '@testing-library/react'
import { My } from './My'
import { promiseTimeout } from './promiseTimeout'
import { act } from 'react-dom/test-utils'

describe('My1', () => {
    it.each(['0', '1', '2', '3'])('', async (p) => {
        act(() => {
            render(<My />)
        })

        await promiseTimeout(100)

        await screen.findByText(`loaded: ${p}`)
    })
})
