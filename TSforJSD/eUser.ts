/**
 * Represents a basic user with an ID and a name.
 */
interface User {
    readonly id: number; // ID should not be modified after creation
    name: string;
}
/**
 * Represents an administrator with additional privileges.
 */
interface Admin extends User {
permissions: string[]; // List of permissions
}
  
  /**
   * A generic class that manages users of different types (User, Admin, etc.).
   * @template T - The type of user being managed.
   */
  class UserAccount<T extends User> {
    protected users: T[] = [];
  
    /**
     * Adds a new user to the system.
     * @param {T} user - The user to be added.
     */
    addUser(user: T): void {
      this.users.push(user);
    }
  
    /**
     * Finds a user by their ID.
     * @param {number} id - The ID of the user to find.
     * @returns {T | undefined} The user if found, otherwise undefined.
     */
    findUserById(id: number): T | undefined {
      return this.users.find(user => user.id === id);
    }
  
    /**
     * Displays all users in the system.
     */
    echoUsers(): void {
      console.log("User List:", this.users);
    }
  }
  
  // Example Usage:
  
  // Creating a normal user
  const user1: User = { id: 1, name: "Alice" };
  
  // Creating an admin user
  const admin1: Admin = { id: 101, name: "Bob", permissions: ["manage-users", "delete-content"] };
  
  // Creating a user manager for normal users
  const userManager = new UserAccount<User>();
  userManager.addUser(user1);
  userManager.echoUsers();
  
  // Creating a user manager for admins
  const adminManager = new UserAccount<Admin>();
  adminManager.addUser(admin1);
  adminManager.echoUsers();
  
  // Finding a user by ID
  const foundUser = userManager.findUserById(1);
  console.log("Found User:", foundUser);

  console.log("\n", "------", "\n");
  console.log("\n", userManager, "\n", adminManager);

  