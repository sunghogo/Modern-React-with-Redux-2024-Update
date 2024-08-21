/*
    - TS lets you define optional properties and parameters uing '?' suffix
        - Can access using a type guard, or optional chaining using '?'
            if (object.optionalProp) {object.optionalProp...}
            object?.optionalProp
*/

interface UserProfile {
  likes: string[];
}

interface User {
  id: string;
  username: string;
  profile?: UserProfile;
}

function logValue(value: string, message?: string) {
  if (message) {
    console.log(message, value);
  } else {
    console.log(value);
  }
}

const user1: User = {
  id: 'abc',
  username: 'me',
  profile: {
    likes: ['cats'],
  },
};

const user2: User = {
  id: 'def',
  username: 'you',
};

// user1.profile.likes // Error since optional property
// Option 1
if (user1.profile) {
  user1.profile.likes;
}
user2?.profile; // Option 2

logValue('value');
logValue('value', 'message');
