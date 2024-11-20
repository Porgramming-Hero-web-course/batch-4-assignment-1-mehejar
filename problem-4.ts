{
    type Circle = {
        shape: string;
        redius: number;
    }
    type Rectangle = {
        shape: string;
        width: number;
        height: number

    }

    const calculateShapeArea = (shape: Circle | Rectangle) =>{
        if("redius" in shape){
            const area = Math.PI * shape.redius * shape.redius;
             console.log(area)
        } else{
            const area2 = shape.height * shape.width;
            console.log(area2)
        }
    }

    const circleArea = calculateShapeArea({shape:"circle", redius:6})
    // console.log(circleArea)

    const ractangleArea = calculateShapeArea({shape:"rectangle", width: 12, height: 16})
}