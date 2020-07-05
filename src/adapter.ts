/**
 * 适配器模式，老的接口需要放入新的环境中，需要对原来你的接口进行适配
 */

interface target {
    call(name: string): any;
}

class Adaptee {
    public method(name: string): void {
        console.log(`${name} method is being called`);
    }
}

class Adaptee2 {
    public method(name: string): void {
        console.log(`${name} method is being called`);
    }
}

/**
 * 适配器，本来是调用method方法，现在改成调用call了
 */
class Adapter implements target {

    private adaptee: Adaptee;
    private adaptee2: Adaptee2;


    public init(name: string) {
        switch(name) {
            case "Adaptee1":
                this.adaptee = new Adaptee();
            case "Adaptee2":
                this.adaptee2 = new Adaptee2();
        }
        
    }

    public call(name: string) {
        switch(name) {
            case "Adaptee1":
                this.adaptee.method(name);
                break;
            case "Adaptee2":
                this.adaptee2.method(name);
                break;
        }
        
    }
}



function test() {
    let adapter = new Adapter();
    adapter.init("Adaptee1");
    adapter.call("Adaptee1");
    console.log("----------------------")
    let adapter2 = new Adapter();
    adapter2.init("Adaptee2");
    adapter2.call("Adaptee2");
}

test()



export default Adapter