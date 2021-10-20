interface MyUser {
  name: string;
  id: string;
  email?: string;
}

// Partial makes everything optional
type MyUserOptionals = Partial<MyUser>;
// interface MyUserOptionals {
//   name?: string;
//   id?: string;
//   email?: string;
// }

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
  return {
    ...user,
    ...overrides,
  };
};

console.log(
  merge(
    {
      name: "jack",
      id: "foo",
      email: "ajsd@gal.com",
    },
    {
      email: "adfb@a.com",
    }
  )
);

// make everything required/non-optional
type RequiredMyUser = Required<MyUser>;

// cherry pick the key
type JustEmailAndName = Pick<MyUser, "email" | "name">;

const mapById = (users: MyUser[]): Record<string, MyUser> => {
  return users.reduce((a, v) => {
    return {
      ...a,
      [v.id]: v,
    };
  }, {});
};

console.log(
  mapById([
    {
      id: "foo",
      name: "Mr. foo",
    },
    {
      id: "abc",
      name: "Mr. abc",
    },
  ])
);
