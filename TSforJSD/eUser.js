/**
 * A generic class that manages users of different types (User, Admin, etc.).
 * @template T - The type of user being managed.
 */
var UserAccount = /** @class */ (function () {
    function UserAccount() {
        this.users = [];
    }
    /**
     * Adds a new user to the system.
     * @param {T} user - The user to be added.
     */
    UserAccount.prototype.addUser = function (user) {
        this.users.push(user);
    };
    /**
     * Finds a user by their ID.
     * @param {number} id - The ID of the user to find.
     * @returns {T | undefined} The user if found, otherwise undefined.
     */
    UserAccount.prototype.findUserById = function (id) {
        return this.users.find(function (user) { return user.id === id; });
    };
    /**
     * Displays all users in the system.
     */
    UserAccount.prototype.echoUsers = function () {
        console.log("User List:", this.users);
    };
    return UserAccount;
}());
// Example Usage:
// Creating a normal user
var user1 = { id: 1, name: "Alice" };
// Creating an admin user
var admin1 = { id: 101, name: "Bob", permissions: ["manage-users", "delete-content"] };
// Creating a user manager for normal users
var userManager = new UserAccount();
userManager.addUser(user1);
userManager.echoUsers();
// Creating a user manager for admins
var adminManager = new UserAccount();
adminManager.addUser(admin1);
adminManager.echoUsers();
// Finding a user by ID
var foundUser = userManager.findUserById(1);
console.log("Found User:", foundUser);
console.log("\n", "------", "\n");
console.log("\n", userManager, "\n", adminManager);
