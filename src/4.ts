class Key {
	private signature: string;
	constructor() {
		this.signature = (Math.random() * 10).toFixed(4);
	}
	getSignature() {
		return this.signature;
	}
}
class Person {
	private key: Key;
	constructor(key: Key) {
		this.key = key;
	}
	getKey(this: Person) {
		return this.key;
	}
}
abstract class House {
	protected door: boolean = false;
	key: Key;
	private tenants: Person[] = [];
	constructor(key: Key) {
		this.key = key;
	}
	public comeIn(person: Person) {
		if (!this.door) return;
		this.tenants.push(person);
	}
	public abstract openDoor(key: Key): void;
}
class MyHouse extends House {
	public openDoor(key: Key) {
		return (this.door = key.getSignature() === this.key.getSignature() ? true : false);
	}
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
