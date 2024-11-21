{
    type Circle = {
        shape: string;
        radius: number;
    }
    type Rectangle = {
        shape: string;
        width: number;
        height: number

    }

    const calculateShapeArea = (shape: Circle | Rectangle) => {
        if ("radius" in shape) {
            const area = Math.PI * shape.radius * shape.radius;
            console.log(area)
        } else {
            const area2 = shape.height * shape.width;
            console.log(area2)
        }
    }

    const circleArea = calculateShapeArea({ shape: "circle", radius: 6 })
    // console.log(circleArea)

    const ractangleArea = calculateShapeArea({ shape: "rectangle", width: 12, height: 16 })
}