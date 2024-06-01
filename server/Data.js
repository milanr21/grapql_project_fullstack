const sender = [
  {
    id: 1,
    name: 'Alice',
    description: 'A software engineer from New York',
    email: 'alice@example.com',
    status: 'active',
    receiverId: 6, // Paired with Frank
  },
  {
    id: 2,
    name: 'Bob',
    description: 'A graphic designer from San Francisco',
    email: 'bob@example.com',
    status: 'inactive',
    receiverId: 7, // Paired with Grace
  },
  {
    id: 3,
    name: 'Charlie',
    description: 'A product manager from Seattle',
    email: 'charlie@example.com',
    status: 'active',
    receiverId: 8, // Paired with Hank
  },
  {
    id: 4,
    name: 'David',
    description: 'A data scientist from Chicago',
    email: 'david@example.com',
    status: 'inactive',
    receiverId: 9, // Paired with Ivy
  },
  {
    id: 5,
    name: 'Eve',
    description: 'A UX designer from Austin',
    email: 'eve@example.com',
    status: 'active',
    receiverId: 10, // Paired with Jack
  },
];

const receiver = [
  {
    id: 6,
    name: 'Frank',
    description: 'A backend developer from Denver',
    email: 'frank@example.com',
    status: 'active',
    senderId: 1, // Paired with Alice
  },
  {
    id: 7,
    name: 'Grace',
    description: 'A frontend developer from Miami',
    email: 'grace@example.com',
    status: 'inactive',
    senderId: 2, // Paired with Bob
  },
  {
    id: 8,
    name: 'Hank',
    description: 'A DevOps engineer from Portland',
    email: 'hank@example.com',
    status: 'active',
    senderId: 3, // Paired with Charlie
  },
  {
    id: 9,
    name: 'Ivy',
    description: 'A mobile app developer from Dallas',
    email: 'ivy@example.com',
    status: 'inactive',
    senderId: 4, // Paired with David
  },
  {
    id: 10,
    name: 'Jack',
    description: 'A machine learning engineer from Boston',
    email: 'jack@example.com',
    status: 'active',
    senderId: 5, // Paired with Eve
  },
];

module.exports = { sender, receiver };
