/**
 * 原型模式,在创建耗时的对象的时候，用于减少对象的创建
 */

interface Prototype {
    clone(): Prototype;
    toString(): string;
}

class Concrete1 implements Prototype {
    //创建一份clone对象，具体可以自己实现
    clone() : Prototype {
        console.log("clone 1");
        return new Concrete1();
    }

    toString(): string {
        return "This is Concrete1";
    }
}

class Concrete2 implements Prototype {
    clone() : Prototype {
        console.log("clone 2");
        return new Concrete2();
    }

    toString(): string {
        return "This is Concrete2";
    }
}

class Builder {
    private protoMap = new Map<string, Prototype>();

    constructor() {
        this.protoMap.set("Concrete1", new Concrete1());
        this.protoMap.set("Concrete2", new Concrete2());
    }

    createOne(s: string): Prototype {
        console.log(s);
        return this.protoMap.get(s).clone();
    }
}


function test() {
    let builder = new Builder();
    for (let i = 0; i < 3; i++) {
        builder.createOne("Concrete1");
        builder.createOne("Concrete2");
    }
}

test();

export default Builder