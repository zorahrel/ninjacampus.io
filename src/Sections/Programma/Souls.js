import React from 'react'
import styled from 'styled-components'
import pups from '@pups/js'

import Soul from 'Sections/Programma/Soul'
import { randomFloat } from '@pups/utility/build/Number'


var lastScrollTop = 0

var getScrollDIrection = function() {
    var st = window.pageYOffset || document.documentElement.scrollTop
    var direction = st > lastScrollTop ? 1 : -1
    lastScrollTop = st <= 0 ? 0 : st
    return direction
}

class Souls extends React.PureComponent
{
    constructor(props)
    {
        super(props)

        this.animate = this.animate.bind(this)
    }

    componentDidMount() 
    {
        const canvas = this.refs.element
        const context = canvas.getContext('2d')
        
        const { width, height } = canvas.getBoundingClientRect()

        const devicePixelRatio = window.devicePixelRatio || 1
        const backingStoreRatio = context.webkitBackingStorePixelRatio ||
            context.mozBackingStorePixelRatio ||
            context.msBackingStorePixelRatio ||
            context.oBackingStorePixelRatio ||
            context.backingStorePixelRatio || 1

        const ratio = devicePixelRatio / backingStoreRatio

        canvas.width = width * ratio
        canvas.height = height * ratio
        canvas.style.width = width + 'px'
        canvas.style.height = height + 'px'

        context.scale(ratio, ratio)
        context.imageSmoothingEnabled = true

        this.context = context
        this.width = width
        this.height = height

        this.createSouls()

        requestAnimationFrame(this.animate)
    }

    createSouls()
    {
        this.souls = []

        const rw = this.width / 100
        const rh = this.height / 100
        this.souls.push( new Soul(5 * rh, 5 * rw, 1, 0) )
        this.souls.push( new Soul(5 * rh, 47 * rw, .25, -80) )
        this.souls.push( new Soul(85 * rh, 15 * rw, 1.2, 50) )
        this.souls.push( new Soul(65 * rh, 25 * rw, -.9, 150) )
        this.souls.push( new Soul(55 * rh, 65 * rw, -1.1, 220) )
        this.souls.push( new Soul(22 * rh, 25 * rw, 1.1, 220) )
        this.souls.push( new Soul(32 * rh, 48 * rw, -.8, 120) )
        this.souls.push( new Soul(35 * rh, 25 * rw, .4, 270) )
        this.souls.push( new Soul(50 * rh, 5 * rw, -.9, 90) )


        window.addEventListener('scroll', () => {
            const direction = getScrollDIrection()
            this.souls.forEach(soul => soul.applyForce(direction))
        })
    }

    animate()
    {
        requestAnimationFrame(this.animate)

        this.context.clearRect(0, 0, this.width, this.height)

        this.souls.forEach(soul => soul.update())
        this.souls.forEach(soul => soul.render(this.context, this.width, this.height))
    }
    
    render()
    {   
        return (
            <SoulsContainer ref="element" />
        )
    }
}

const SoulsContainer = styled.canvas`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
`

export default Souls