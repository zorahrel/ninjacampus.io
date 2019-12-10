import { fix } from "@pups/utility/build/Number"

const SoulImage = new Image()

SoulImage.src = '/assets/images/shape_base.svg'


// const SCALEIMPULSE = 0.001
// const DECELERATION = 200
// const SCALEIMPULSE = 0.0001
// const DECELERATION = 2000
const SCALEIMPULSE = 0.001
const DECELERATION = 1000

class Soul
{
    constructor(top, left, scale, rotation)
    {
        this.x = left
        this.y = top
        this.va = 0
        this.scale = scale
        this.rotation = rotation
        this.randomSign = Math.random() > 0.5 ? 1 : -1
    }

    update()
    {
        const va = Math.abs(this.va) - ((2 - this.scale) / DECELERATION)
        this.va = va > 0 ? va * Math.sign(this.va) : 0

        this.y += this.va 
        this.x += (this.va / 5) * this.randomSign
        this.rotation += (2 - this.scale) * this.randomSign / 20
        //this.scale += (2 - this.scale) / 10000 * this.randomSign
    }

    applyForce(speed)
    {
        this.va += SCALEIMPULSE * (speed * -1)
    }

    render(context, width, height)
    {
        context.save()
        
        context.translate(this.x, this.y)
        context.scale(this.scale, this.scale)
        context.rotate(this.rotation * Math.PI / 180)
        //context.filter = 'drop-shadow(0 0 1rem rgba(0,0,0,.1))'
    
        context.drawImage(SoulImage, -SoulImage.width/2, -SoulImage.height/2);

        context.restore()
    }
}

export default Soul