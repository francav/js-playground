const stream = require("getstream");

// Instantiate new client with a user token
const client = stream.connect(
  "qpkb2vb8bnhm",
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiYWdlZC13b29kLTgifQ.25pd6mSf4bm16LWfRDKE2Wk61ua7n3GIP2CMp0CS7k0",
  "1209198"
);

const chris = client.feed("user", "chris");
chris.addActivity({
  actor: "SU:eric",
  tweet: "Hello world",
  verb: "tweet",
  object: 1,
});

// Add an Activity; message is a custom field - tip: you can add unlimited custom fields!
// chris.addActivity({
//   actor: "chris",
//   verb: "add",
//   object: "picture:10",
//   foreign_id: "picture:10",
//   message: "Beautiful bird!",
// });

// // Create a following relationship between Jack's "timeline" feed and Chris' "user" feed:
// const jack = client.feed("timeline", "jack");
// await jack.follow("user", "chris");

// // Read Jack's timeline and Chris' post appears in the feed:
// const results = await jack.get({ limit: 10 });

// // Remove an Activity by referencing it's Foreign Id:
// await chris.removeActivity({ foreignId: "picture:10" });
