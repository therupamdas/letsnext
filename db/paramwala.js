import User from '@/models/User';
export async function findUserByUsername(username) {

    const user = await User.findOne({ username: username });
    return user;
};

