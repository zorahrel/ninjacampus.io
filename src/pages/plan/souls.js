import React from 'react'
import styled from 'styled-components'

import Soul from 'pages/plan/soul'

const getSrollSpeed = (() => {
    var lastPos, newPos, timer, delta, delay = 50
    const clear = () => { lastPos = null; delta = 0 }

    clear()

    return () => {
        newPos = window.scrollY

        if (lastPos != null) 
        { 
            delta = newPos - lastPos;
        }

        lastPos = newPos
        clearTimeout(timer)
        timer = setTimeout(clear, delay)
        return delta
    }
})()

const Souls = () =>
{
    const element = React.useRef()
    let canvas, context, width, height, souls = []

    const init = () => {
        canvas = element.current
        context = canvas.getContext('2d')
        
        const parentRect = canvas.parentElement.getBoundingClientRect()
        width = parentRect.width
        height = parentRect.height

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

        createSouls()
    
        requestAnimationFrame(animate)
    }

    const createSouls = () =>
    {
        souls = []

        const rw = width / 100
        const rh = height / 100
        
        souls.push( new Soul(5 * rh, 5 * rw, 1, 0) )
        souls.push( new Soul(5 * rh, 47 * rw, .25, -80) )
        souls.push( new Soul(85 * rh, 15 * rw, 1.2, 50) )
        souls.push( new Soul(65 * rh, 25 * rw, -.9, 150) )
        souls.push( new Soul(55 * rh, 65 * rw, -1.1, 220) )
        souls.push( new Soul(22 * rh, 25 * rw, 1.1, 220) )
        souls.push( new Soul(32 * rh, 48 * rw, -.8, 120) )
        souls.push( new Soul(35 * rh, 25 * rw, .4, 270) )
        souls.push( new Soul(50 * rh, 5 * rw, -.9, 90) )
    }

    const animate = () => {
        requestAnimationFrame(animate)

        context.clearRect(0, 0, width, height)
        
        souls.forEach(soul => soul.update())
        souls.forEach(soul => soul.render(context, width, height))
    }
    
    window.addEventListener('scroll', () => {
        const speed = getSrollSpeed()
        souls.forEach(soul => soul.applyForce(speed))
    })
    window.addEventListener('resize', init)

    React.useEffect(init)

    return (
        <SoulsContainer ref={element} />
    )
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