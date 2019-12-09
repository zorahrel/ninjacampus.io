const SoulImage = new Image()

SoulImage.src = '/assets/images/shape_base.svg'


const SCALEIMPULSE = .8
const DECELERATION = 70

class Soul
{
    constructor(top, left, scale, rotation)
    {
        this.x = left
        this.y = top
        this.va = 0
        this.scale = scale
        this.rotation = rotation
        this.vr = Math.random() > 0.5 ? 1 : -1
        
        this.bForce = false
    }

    update()
    {
        this.y += this.va * this.forceDirection
        
        this.va = Math.abs(this.va) - (((1 + this.scale) / 2) / DECELERATION)

        this.rotation += (((1 - this.scale) + 1) * 2 / 100) * this.vr
        if (this.va <= 0)
        {
            this.va = 0
            this.bForce = false
        }
    }

    applyForce(direction)
    {
        if (!this.bForce)
        {
            this.va = this.scale * SCALEIMPULSE
            this.bForce = true
            this.forceDirection = direction * -1
        } 
        else
        {
            this.forceDirection = direction * -1
        }
    }

    render(context, width, height)
    {
        context.save()
        
        context.translate(this.x, this.y)
        context.scale(this.scale, this.scale)
        context.rotate(this.rotation * Math.PI / 180)
    
        context.drawImage(SoulImage, -SoulImage.width/2, -SoulImage.height/2);

        context.restore()
    }
}

export default Soul