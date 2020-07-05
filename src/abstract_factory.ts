/**
 * 抽象工厂模式
 */

enum SHAPE {
    RECTANGLE,
    SQUARE,
    CIRCLE,
}

enum COLOR {
    RED,
    GREEN,
    BLUE,
}

const choiceFactory = {
    shape: "SHAPE",
    color: "COLOR",
}

interface Shape {
    draw(): void;    
}

/**形状类继承接口 */
class Rectangle implements Shape {
    public draw() {
        console.log("Rectangle draw");
    }
}

class Square implements Shape {    
    public draw() {
        console.log("Square draw");
    }
}

class Circle implements Shape {
    public draw() {
        console.log("Circle draw");
    }
}

interface Color {
    fill(): void;
}

/**颜色类继承 */
class Red implements Color {
    public fill() {
        console.log("Red fill");
    }
}

class Green implements Color {
    public fill() {
        console.log("Green fill");
    }
}

class Blue implements Color {
    public fill() {
        console.log("Blue fill");
    }
}

/**抽像工厂抽象 */
abstract class AbstractFactory {
    public abstract getColor(color: number): any;
    public abstract getShape(shape: number): any;
}

/**扩展工厂类 */
class ShapeFactory extends AbstractFactory{
    public getShape(shape: number): Shape {
        switch(shape) {
            case SHAPE.SQUARE:
                return new Square();
            case SHAPE.RECTANGLE:
                return new Rectangle();
            case SHAPE.CIRCLE: 
                return new Circle();
            default:
                break;
        }
    }

    public getColor(color: number) {}
}

class ColorFactory extends AbstractFactory{
    public getShape(shape: number) {}

    public getColor(color: number): Color {
        switch(color) {
            case COLOR.BLUE:
                return new Blue();
            case COLOR.GREEN:
                return new Green();
            case COLOR.RED: 
                return new Red();
            default:
                break;
        }
    }
}

/**获取工厂 */
class FacortyProducer {
    public static getFactory(choice: string): AbstractFactory {
        switch(choice) {
            case choiceFactory.shape: 
                return new ShapeFactory();
            case choiceFactory.color:
                return new ColorFactory();
        }
    }
}


function test() {
    let sf = FacortyProducer.getFactory(choiceFactory.shape);
    let cf = FacortyProducer.getFactory(choiceFactory.color);

    let c_shape: Shape = sf.getShape(SHAPE.CIRCLE);
    c_shape.draw()

    let r_color: Color = cf.getColor(COLOR.RED);
    r_color.fill()
}

// test()


export default FacortyProducer