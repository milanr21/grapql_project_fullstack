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
