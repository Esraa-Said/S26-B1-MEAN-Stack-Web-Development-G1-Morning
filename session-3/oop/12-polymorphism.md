# 🎭 Polymorphism in JavaScript

# 📚 What is Polymorphism?

Polymorphism is one of the core concepts of Object-Oriented Programming (OOP).

The word comes from:

```text
Poly = Many
Morph = Forms
```

Meaning:

> The same method can behave differently depending on the object that calls it.

---

# 🤔 Why Do We Need Polymorphism?

Without polymorphism, we often write many condition statements:

```js
if (userType === "Admin") {
  // admin logic
} else if (userType === "Doctor") {
  // doctor logic
} else if (userType === "Patient") {
  // patient logic
}
```

As the application grows, this becomes difficult to maintain.

Polymorphism allows each object to decide its own behavior.

---

# 🎯 Main Idea

Different objects can respond to the same method name in different ways.

Example:

```js
animal.speak();
```

The method name is always:

```js
speak()
```

But the output depends on the object.

---

# 🐾 Basic Example

```js
class Animal {
  speak() {
    console.log("Generic animal sound");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Meow");
  }
}

class Cow extends Animal {
  speak() {
    console.log("Moo");
  }
}

const animal = new Animal();
const cat = new Cat();
const cow = new Cow();

animal.speak();
cat.speak();
cow.speak();
```

Output:

```text
Generic animal sound
Meow
Moo
```

Notice that all objects use the same method name:

```js
speak()
```

but each object behaves differently.

This is polymorphism.

---

# 🔄 Polymorphism with Arrays

One of the biggest advantages is that we can treat different objects in the same way.

```js
class Animal {
  speak() {
    console.log("Generic animal sound");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Meow");
  }
}

class Cow extends Animal {
  speak() {
    console.log("Moo");
  }
}

const animals = [
  new Animal(),
  new Cat(),
  new Cow()
];

animals.forEach((animal) => {
  animal.speak();
});
```

Output:

```text
Generic animal sound
Meow
Moo
```

We don't care about the actual object type.

We simply call:

```js
animal.speak();
```

Each object handles the method differently.

---

# 👨‍💼 Real World Example: User Roles

Suppose a medical system has different user types:

* Admin
* Doctor
* Patient

Each user performs a different action.

---

## Parent Class

```js
class User {
  constructor(name) {
    this.name = name;
  }

  performAction() {
    console.log(`${this.name} is performing a general action.`);
  }
}
```

---

## Admin

```js
class Admin extends User {
  performAction() {
    console.log(`🛠️ Admin ${this.name} is managing users.`);
  }
}
```

---

## Doctor

```js
class Doctor extends User {
  performAction() {
    console.log(`🩺 Doctor ${this.name} is diagnosing patients.`);
  }
}
```

---

## Patient

```js
class Patient extends User {
  performAction() {
    console.log(`📅 Patient ${this.name} is booking an appointment.`);
  }
}
```

---

## Usage

```js
const users = [
  new Admin("Mona"),
  new Doctor("Esraa"),
  new Patient("Ali")
];

users.forEach((user) => {
  user.performAction();
});
```

Output:

```text
🛠️ Admin Mona is managing users.
🩺 Doctor Esraa is diagnosing patients.
📅 Patient Ali is booking an appointment.
```

Notice that every object receives the same method call:

```js
user.performAction();
```

But each class executes its own version.

---

# 🔄 Method Overriding

Polymorphism is usually achieved through method overriding.

The child class replaces the parent's implementation.

```js
class User {
  login() {
    console.log("User logged in");
  }
}

class Admin extends User {
  login() {
    console.log("Admin logged in");
  }
}
```

The child class overrides the parent method.

---

# 🏦 Another Example: Payment System

```js
class Payment {
  pay(amount) {
    console.log(`Paying ${amount}`);
  }
}

class CreditCardPayment extends Payment {
  pay(amount) {
    console.log(`💳 Paid ${amount} using Credit Card`);
  }
}

class PayPalPayment extends Payment {
  pay(amount) {
    console.log(`🅿️ Paid ${amount} using PayPal`);
  }
}

class CashPayment extends Payment {
  pay(amount) {
    console.log(`💵 Paid ${amount} using Cash`);
  }
}

const payments = [
  new CreditCardPayment(),
  new PayPalPayment(),
  new CashPayment()
];

payments.forEach((payment) => {
  payment.pay(500);
});
```

Output:

```text
💳 Paid 500 using Credit Card
🅿️ Paid 500 using PayPal
💵 Paid 500 using Cash
```

---

# 🔥 Why is Polymorphism Useful?

### Without Polymorphism

```js
if (paymentType === "credit") {
  // credit logic
}

if (paymentType === "paypal") {
  // paypal logic
}

if (paymentType === "cash") {
  // cash logic
}
```

Every new payment type requires modifying existing code.

---

### With Polymorphism

```js
payment.pay(amount);
```

Just create a new class and override the method.

Existing code remains unchanged.

---

# 📊 Polymorphism vs Inheritance

| Inheritance                        | Polymorphism                                  |
| ---------------------------------- | --------------------------------------------- |
| Creates parent-child relationships | Allows different behavior for the same method |
| Focuses on code reuse              | Focuses on flexibility                        |
| Uses `extends`                     | Uses method overriding                        |
| Parent shares functionality        | Child customizes functionality                |

---

# 🎓 Summary

* Polymorphism means "many forms".
* Different objects can respond differently to the same method.
* It is usually implemented through method overriding.
* It makes code flexible and easy to extend.
* It reduces large `if/else` or `switch` statements.
* It works hand-in-hand with inheritance.
* New behaviors can be added without changing existing code.

Think of polymorphism as:

```text
Same Method Name
        ↓
Different Objects
        ↓
Different Behaviors
```
