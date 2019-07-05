import React from 'react'
import './HomePage.styles.scss'
import Directory from '../../components/Directory/Directory.component'
import {MenuItem} from '../../components/MenuItem/MenuItem.component'

const HomePage = () => (
    <div className='homepage'>
        <Directory><MenuItem/></Directory>
    </div>
)

export default HomePage