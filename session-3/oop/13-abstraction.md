# 🎭 Abstraction in JavaScript

# 📚 What is Abstraction?

Abstraction is one of the core Object-Oriented Programming (OOP) principles.

The idea is simple:

> Hide unnecessary implementation details and expose only what users need to interact with.

Users should know **what an object can do**, not **how it does it internally**.

---

# 🤔 Why Do We Need Abstraction?

Imagine using a car.

You know how to:

* Start the engine
* Accelerate
* Brake

But you don't need to know:

* How fuel is injected
* How the engine starts
* How the transmission works

The complex logic is hidden.

This is abstraction.

---

# 🎯 Goal of Abstraction

* Hide complexity
* Expose a simple interface
* Reduce dependencies
* Make code easier to maintain
* Prevent misuse of internal logic

---

# ❌ Without Abstraction

```js
class EmailService {
  connectSMTP() {
    console.log("Connecting to SMTP...");
  }

  validateEmail(email) {
    console.log(`Validating ${email}`);
  }

  sendEmail(email, message) {
    console.log(`Sending "${message}" to ${email}`);
  }
}

const emailer = new EmailService();

emailer.connectSMTP();
emailer.validateEmail("esraa@mail.com");
emailer.sendEmail("esraa@mail.com", "Welcome!");
```

The user is responsible for calling every step.

If they forget one step, the process may fail.

---

# ✅ With Abstraction

```js
class EmailService {
  send(email, message) {
    this.#connectSMTP();
    this.#validateEmail(email);

    console.log(`Sending "${message}" to ${email}`);
  }

  #connectSMTP() {
    console.log("Connected to SMTP server");
  }

  #validateEmail(email) {
    console.log(`Validated ${email}`);
  }
}

const emailer = new EmailService();

emailer.send("esraa@mail.com", "Welcome!");
```

Output:

```text
Connected to SMTP server
Validated esraa@mail.com
Sending "Welcome!" to esraa@mail.com
```

The user only calls:

```js
emailer.send(...)
```

All internal details remain hidden.

---

# 🛒 Real World Example: Order System

When a user places an order, many operations happen internally:

* Check inventory
* Process payment
* Send confirmation email

The user shouldn't perform these steps manually.

```js
class OrderSystem {
  placeOrder(productName, quantity) {
    this.#checkInventory(productName, quantity);
    this.#processPayment();
    this.#sendConfirmationEmail();

    console.log(`Order placed for ${quantity} x ${productName}`);
  }

  #checkInventory(productName, quantity) {
    console.log(`Checking stock for ${quantity} of ${productName}...`);
  }

  #processPayment() {
    console.log("Processing payment securely...");
  }

  #sendConfirmationEmail() {
    console.log("Sending confirmation email...");
  }
}

const order = new OrderSystem();

order.placeOrder("Laptop", 2);
```

Output:

```text
Checking stock for 2 of Laptop...
Processing payment securely...
Sending confirmation email...
Order placed for 2 x Laptop
```

The caller only needs:

```js
order.placeOrder(...)
```

Everything else is hidden.

---

# 🏦 Example: Bank Account

```js
class BankAccount {
  deposit(amount) {
    this.#validateAmount(amount);
    this.#updateBalance(amount);

    console.log(`Deposited ${amount}`);
  }

  #validateAmount(amount) {
    if (amount <= 0) {
      throw new Error("Invalid amount");
    }
  }

  #updateBalance(amount) {
    console.log(`Balance updated by ${amount}`);
  }
}

const account = new BankAccount();

account.deposit(1000);
```

The user deposits money without knowing how balance validation or updates are handled.

---

# 🔒 Abstraction vs Encapsulation

| Encapsulation                                 | Abstraction                                  |
| --------------------------------------------- | -------------------------------------------- |
| Protects data                                 | Hides complexity                             |
| Focuses on controlling access                 | Focuses on simplifying usage                 |
| Uses private fields and getters/setters       | Uses public methods that hide internal steps |
| Example: Protect balance from invalid updates | Example: Hide payment and inventory logic    |

---

# 📌 How JavaScript Implements Abstraction

Common techniques:

### Public Methods

```js
user.login();
```

### Private Fields

```js
#password
```

### Private Methods

```js
#validatePassword()
```

### Internal Helper Functions

Used only inside the class and hidden from external code.

---

# 🎓 Summary

* Abstraction means hiding implementation details.
* Users interact with a simple public interface.
* Internal logic stays hidden.
* It reduces complexity and improves maintainability.
* Private fields and private methods help implement abstraction.
* Good abstractions make code easier to use and harder to misuse.

Think of abstraction as:

```text
"What can this object do?"
```

instead of

```text
"How does this object do it?"
```
