class TypedJSON {
  public static parse<T>(json: string): T {
    return JSON.parse(json);
  }

  public static stringify<T>(value: T): string {
    return JSON.stringify(value);
  }
}

type Person = {
  name: string;
  age: number;
};

var gosha: Person = {
  age: 22,
  name: "Gosha",
};

const jsonedGosha = TypedJSON.stringify<Person>(gosha);
console.log(TypedJSON.parse<Person>(jsonedGosha).name);
