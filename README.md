# Setting up the graphql project

# Queries

{
reciever(id: "6") {
name,
description,

}
}

I can specify what data I want to get instead of getting all the data even if I don't want it like in REST API.

# Mutation Query

mutation {
addClient(name: "alex", email: "alex@gmail.com", phoneNo: "9876555412") {
id,
name,
email,
phoneNo
}
}

# Mutation Query to delete the client

mutation{
deleteClient(id: "665b2dd6f67da7abcd82e3f6"){
name
}
}

# Mutation Query Adding a project

mutation{
addProject(name: "Making a UI", description: "Make a ui for the homepage", status: NOT_STARTED, clientId: "665b2aa0785ea8927b7d2fbe")
{
name,
id,
}

}

# Mutation - Project Update Query

mutation{
updateProject(id: "665b40168f32c76cf16d0d00", status: COMPLETED, name: "REACT"){
id,
name,
description,
status

}
}
