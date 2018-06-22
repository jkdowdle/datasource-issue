class Hobbit {
  constructor(name) {
    this.name = name
  }

  greeting() {
    console.log('Hello! I am', this.name)
  }
}

const sam = new Hobbit('Samwise')

sam.greeting()

class SpecialHobbit extends Hobbit {
  constructor(name, power) {
    super(name)

    this.power = power
  }

  statePower() {
    console.log(this.name, 'power:', this.power)
  }
}

const frodo = new SpecialHobbit('Frodo', 'Invisibility')

frodo.greeting()

frodo.statePower()
