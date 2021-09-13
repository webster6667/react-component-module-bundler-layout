import React from 'react'

import {render} from '@testing-library/react'

import {MyComponent} from '@src/index'

test('loads and displays greeting', async () => {
    const {container} = render(<MyComponent />)

    const abd: string = '1'


    expect(1).toBeTruthy()
})