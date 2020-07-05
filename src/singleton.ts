/**
 * 单例模式
 * 懒汉式
 * 饿汉试
 * double check
 */

class Singleton {
    private static instance: Singleton;

    private constructor() {}    //私有初始化方法

    public static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}