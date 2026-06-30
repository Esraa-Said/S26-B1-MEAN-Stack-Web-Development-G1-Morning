# 🧬 Inheritance in JavaScript

# 📚 What is Inheritance?

Inheritance is one of the core concepts of Object-Oriented Programming (OOP).

It allows a class to inherit properties and methods from another class.

This helps us:

- Avoid code duplication.
- Reuse existing functionality.
- Keep code organized.
- Extend classes with new features.

---

# 🤔 Why Do We Need Inheritance?

Imagine we have two classes:

```js
class User {
  constructor(userName, userId, userEmail) {
    this.userName = userName;
    this.userId = userId;
    this.userEmail = userEmail;
  }

  login(password) {}

  sendMessage(message) {}
}
```

```js
class Admin {
  constructor(userName, userId, userEmail, permissions) {
    this.userName = userName;
    this.userId = userId;
    this.userEmail = userEmail;
    this.permissions = permissions;
  }

  login(password) {}

  sendMessage(message) {}

  deleteUser(user) {}
}
```

Notice that both classes contain:

- userName
- userId
- userEmail
- login()
- sendMessage()

This is duplicated code.

Instead of rewriting the same logic, we can create a parent class and let other classes inherit from it.

---

# 🎯 Parent Class

The parent class contains the common properties and methods.

```js
class User {
  constructor(userName, userId, userEmail) {
    this.userName = userName;
    this.userId = userId;
    this.userEmail = userEmail;
  }

  login(password) {
    console.log(`Login with password ${password}`);
  }

  sendMessage(message) {
    console.log(message);
  }
}
```

---

# 🎯 Child Class

A child class inherits from the parent class using the `extends` keyword.

```js
class Admin extends User {
  constructor(userName, userId, userEmail, permissions) {
    super(userName, userId, userEmail);
    this.permissions = permissions;
  }

  deleteUser() {
    console.log("User is deleted");
  }
}
```

---

# 🔍 What Does extends Mean?

```js
class Admin extends User
```

means:

> Admin inherits everything from User.

So Admin automatically gets:

- userName
- userId
- userEmail
- login()
- sendMessage()

without rewriting them.

---

# 🔍 What Does super() Mean?

Inside a child constructor, we use:

```js
super(userName, userId, userEmail);
```

to call the parent constructor.

Without `super()`, the parent properties will not be initialized.

---

# ✅ Example

```js
class User {
  constructor(userName, userId, userEmail) {
    this.userName = userName;
    this.userId = userId;
    this.userEmail = userEmail;
  }

  login(password) {
    console.log(`Login with password ${password}`);
  }

  sendMessage(message) {
    console.log(message);
  }
}

class Admin extends User {
  constructor(userName, userId, userEmail, permissions) {
    super(userName, userId, userEmail);
    this.permissions = permissions;
  }

  deleteUser() {
    console.log("User is deleted");
  }
}

const admin = new Admin(
  "Ahmed",
  1,
  "ahmed@gmail.com",
  "Delete"
);

admin.login(12345);
admin.sendMessage("Hello");
admin.deleteUser();
```

Output:

```text
Login with password 12345
Hello
User is deleted
```

---

# 🏥 Real World Example

Suppose every user in a medical system can:

- Login
- Store name and email

But each type of user has additional features.

---

## Parent Class

```js
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  login() {
    console.log(`${this.name} logged in`);
  }
}
```

---

## Doctor Class

```js
class Doctor extends User {
  constructor(name, email, specialty) {
    super(name, email);
    this.specialty = specialty;
  }

  diagnose() {
    console.log(`${this.name} is diagnosing patients`);
  }
}
```

---

## Admin Class

```js
class Admin extends User {
  deleteUser(userName) {
    console.log(`${this.name} deleted ${userName}`);
  }
}
```

---

## Usage

```js
const doctor = new Doctor(
  "Esraa",
  "esraa@gmail.com",
  "Cardiology"
);

doctor.login();
doctor.diagnose();

const admin = new Admin(
  "Mona",
  "mona@gmail.com"
);

admin.login();
admin.deleteUser("Ahmed");
```

---

# 🏥 Another Example

```js
class MedicalStaff {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  clockIn() {
    console.log(
      `${this.name} (${this.role}) clocked in`
    );
  }
}
```

---

## Nurse

```js
class Nurse extends MedicalStaff {
  assist() {
    console.log(
      `${this.name} is assisting the doctor`
    );
  }
}
```

---

## Surgeon

```js
class Surgeon extends MedicalStaff {
  operate() {
    console.log(
      `${this.name} is performing surgery`
    );
  }
}
```

---

## Usage

```js
const nurse = new Nurse(
  "Noura",
  "Nurse"
);

nurse.clockIn();
nurse.assist();

const surgeon = new Surgeon(
  "Dr. Ali",
  "Surgeon"
);

surgeon.clockIn();
surgeon.operate();
```

Output:

```text
Noura (Nurse) clocked in
Noura is assisting the doctor

Dr. Ali (Surgeon) clocked in
Dr. Ali is performing surgery
```

---

# 🔍 How JavaScript Searches for Methods

```js
admin.login();
```

JavaScript looks for `login()`:

1. Inside the admin object.
2. If not found, inside Admin.prototype.
3. If not found, inside User.prototype.
4. If found, execute it.

This behavior comes from the prototype chain.

---

# 🎯 Method Overriding

A child class can replace a parent method.

```js
class User {
  login() {
    console.log("User login");
  }
}

class Admin extends User {
  login() {
    console.log("Admin login");
  }
}

const admin = new Admin();

admin.login();
```

Output:

```text
Admin login
```

The child version overrides the parent version.

---

# 📊 Inheritance Keywords

| Keyword | Purpose |
|----------|----------|
| extends | Inherit from another class |
| super() | Call parent constructor |
| super.method() | Call parent method |

---

# 🎓 Summary

- Inheritance allows one class to reuse properties and methods from another class.
- The parent class contains shared functionality.
- The child class extends the parent using `extends`.
- `super()` calls the parent constructor.
- Child classes can add new methods.
- Child classes can override parent methods.
- Inheritance helps reduce duplication and makes code easier to maintain.