/**
 * 建造者模式
 * 只关注数据，而不关注构造数据的过程
 */

class UserBuilder {
    private name: string;
    private age: number;
    private address: string;

    public setName(name: string) {
        this.name = name;
        return this;    //链式调用
    }
    public get Name() {
        return this.name;
    }

    public setAge(age: number) {
        this.age = age;
        return this;
    }
    public get Age() {
        return this.age;
    }

    public setAddress(addr: string) {
        this.address = addr;
        return this;
    }
    public get Address() {
        return this.address;
    }

    public build(): User {
        return new User(this);
    }

}

class User {
    private name: string;
    private age: number;
    private address: string;

    constructor(build: UserBuilder) {
        this.name = build.Name;
        this.address = build.Address;
        this.age = build.Age;
    }

    public get Name() {
        return this.name;
    }

    public get Age() {
        return this.age;
    }

    public get Address() {
        return this.address;
    }

}

function test() {
    let user: User = new UserBuilder()
                        .setAddress("address")
                        .setAge(18)
                        .setName("yc")
                        .build();

    console.log(user.Name, user.Age, user.Address);
}

test();

export default UserBuilder;

