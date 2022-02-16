
export interface RegisterUserForm{
    name:string,
    email:string,
    password:string,
    state:string,
    city:string,
    phone:number
}

export interface RegisterUserBack{
    name:string,
    userId:string,
    role:string
}