/**
 * 组合模式
 * 用于将任意的类型组装起来，以任意方式组合起来
 */

//统一组件接口
interface Component {
    operation(): void;
}

//组装类
class Composite implements Component {

    private list: Array<Component>;
    private s: string;

    constructor(s: string) {
        this.list = [];
        this.s = s;
    }

    public operation() {
        console.log("operation of Composite", this.s);
        for (let item of this.list) {
            item.operation();
        }
    }

    public add(c: Component) {
        this.list.push(c);
    }

    public remove(i: number) {
        if (this.list.length <= i) {
            throw new Error("index out of bound");
        }
        this.list.splice(i, 1);
    }

}

class Leaf implements Component {
    
    private s: string;

    constructor(s: string) {
        this.s = s;
    }
    
    public operation() {
        console.log("operation of Leaf ", this.s);
    }
}

function test() {

    let CompositeA: Composite = new Composite("mainA");
    let CompositeB: Composite = new Composite("mainB");

    let Leaf1: Leaf = new Leaf("leaf1");
    let Leaf2: Leaf = new Leaf("Leaf2");
    let Leaf3: Leaf = new Leaf("Leaf3");

    CompositeA.add(Leaf1);
    CompositeA.add(Leaf2);
    CompositeA.add(Leaf3);
    CompositeA.remove(1);
    CompositeA.operation();


    CompositeB.add(Leaf2);
    CompositeB.add(Leaf1);
    CompositeB.add(Leaf3);
    CompositeB.operation();

}

test();