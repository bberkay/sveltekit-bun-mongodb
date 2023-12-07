import { MongoDB } from '$lib/database/mongodb';
import type { User } from '$lib/database/types';
import { selectedUserId } from "$lib/stores/select";

export async function load({ cookies }: {cookies: any}): Promise<{users: Array<User>, currentUserId: string}>
{
    // Get all users from the database
    const db = new MongoDB();
    const users = await db.getAllDocuments('users');
    users.map((user: User) => {
        user._id = user._id.toString();
    });

    // Get the selected user id from the cookies
    const currentUserId = JSON.parse(cookies.get("profile"))._id;

    // Return the users
    return {
        users: users,
        currentUserId: currentUserId
    };
}