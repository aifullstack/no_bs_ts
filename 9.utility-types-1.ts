interface MyUser {
  name: string;
  id: number;
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
      id: 2,
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
type UserWithoutID = Omit<MyUser, "id">;

// 每当id的type变化的时候，下面的MyUser['id']自动变化
const mapById = (users: MyUser[]): Record<MyUser["id"], UserWithoutID> => {
  return users.reduce((a, v) => {
    // 把不同的key的值进行拆分
    const { id, ...other } = v;
    return {
      ...a,
      [id]: other,
    };
  }, {});
};

console.log(
  mapById([
    {
      id: 1,
      name: "Mr. foo",
    },
    {
      id: 2,
      name: "Mr. abc",
    },
  ])
);
