interface User {
    name: string;
    id: number;
  }
  
  class UserAcc {
    name: string;
    id: number;
  
    constructor(name: string, id: number) {
      this.name = name;
      this.id = id;
    }
  }
  
  const usr: User = new UserAcc("Murphy", 1);
  console.log(usr);