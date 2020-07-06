/**
 * 桥接模式
 * 将抽象与实现分离，使它们可以独立变化。它是用组合关系代替继承关系来实现，从而降低了抽象和实现这两个可变维度的耦合度。
 */

//公共接口
interface Implementor {
    callee(s: any): void;
}

//接口实现A
class ConcreateImplementorA implements Implementor{
    public callee(s: any): void {
        console.log("callee of ConcreateImplementorA, ", s);
    }
}

//接口实现B
class ConcreateImplementorB implements Implementor{
    public callee(s: any): void {
        console.log("callee of ConcreateImplementorB, ", s);
    }
}


//抽象类，抽象出具体接口
class Abstraction {
    implementor: Implementor;

    constructor(imp: Implementor) {
        this.implementor = imp;
    }

    public callIt(s: string): void {
        throw new Error("this method is abstract");
    }
}

//抽象类实现A
class RefinedAbstractionA extends Abstraction {
    constructor(imp: Implementor) {
        super(imp);
    }

    public callIt(s: string) {
        console.log("this is RefinedAbstractionA");
        this.implementor.callee(s);
    }
}

//抽象类实现B
class RefinedAbstractionB extends Abstraction {
    constructor(imp: Implementor) {
        super(imp);
    }

    public callIt(s: string) {
        console.log("this is RefinedAbstractionB");
        this.implementor.callee(s);
    }
}


function test() {
    let abstractA = new RefinedAbstractionA(new ConcreateImplementorA());
    let abstractB = new RefinedAbstractionB(new ConcreateImplementorB());

    abstractA.callIt("interface a");
    abstractA.callIt("interface b");
}

test()


