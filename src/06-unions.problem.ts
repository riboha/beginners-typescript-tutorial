/* interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: Role
} */

// merging types
type User = (
  // base type
  {
    id: number;
    firstName: string;
    lastName: string;
  }
) & (
  // discriminated union
  // discriminate based on common key 'role'
  UserRoleAttributes
);


type UserRoleAttributes =    
| {
  role: 'admin';
  adminPassword: string;
}
| {
  role: 'user';
} 
| {
  role: 'super-admmin';
  superAdminPassword: string;
};

//type Role = 'admin' | 'super' | 'super-admin';
type Role = UserRoleAttributes['role'];


export const defaultUser: User = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  role: "admin",
  adminPassword: '' // when role is 'admin', this will be necessary
};

const logRole = (role: Role) => {

};

// logRole('adfasd');

enum Role1 {
  admin,
  user,
  'suer-admin'
}