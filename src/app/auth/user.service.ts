import { Injectable } from "@angular/core";

export interface User {
    id: number;
    email: string;
    password: string;
    address?: string;
}

@Injectable()
export class UserService {

    currentUser: User = UserService.dummyUserList[0];   // nije must have

    static dummyUserList: Array<User> = [
        {
            id:1,
            email:"client@test.com",
            password: "123"
        },
        {
            id:2,
            email:"admin@test.com",
            password: "123"
        }
    ]

    getUserName(user: User) : string {
        return user.email;
    }

    getUserById(id: number) : User {
        var foundUser!: User;
        UserService.dummyUserList.forEach(user => {
            if(user.id == id) {
                foundUser = user;
            }
        });
        this.currentUser = foundUser;
        return foundUser;
    }

    getUser(userEmail: string) : User {
        // return UserService.dummyUserList.find(userToFind => 
        //     userToFind.email == userEmail
        // )!

        this.currentUser = UserService.dummyUserList.find(userToFind => userToFind.email == userEmail)!;
        return this.currentUser;
    }

    isPasswordCorrect(userEmail: string, password: string) {
        return UserService.dummyUserList.find(userToFind => 
            (userToFind.email == userEmail && userToFind.password == password)) != undefined;
        
    }

    registerUser(email: string, password: string) : User {
        var maxId: number = 0;
        UserService.dummyUserList.forEach(user => {
            if (maxId < user.id) {
                maxId = user.id
            }
        })

        var id = ++maxId;
        var user: User = {id, email, password};
        UserService.dummyUserList.push(user);
        this.currentUser = user;   // da li je neophodno
        console.log(user);
        return user;
    }
}