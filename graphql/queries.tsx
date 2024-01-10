import { gql } from "@apollo/client";

export const GET_USER = gql`
    query User($email:String!){
        user(email:$email){
            id
            email
            name
            phone
            address{
                city
                locality
                state
                pincode
            }
            orders{                
                item_names
                quantity
                order_total                
            }
            role
        }
    }
`
// # orders{
// #     item_names
// #     order_total
// # }
export const GET_USERS = gql`
    query Users{
        users{
        id
        email
        name
        phone
            orders{
            item_names
            order_total
            }
        address
        role
        }
    }
`

export const GET_PARTICULAR_MENU = gql`
    query ReadParticularMenu($id:ID!){
        readParticularMenu(id:$id){
            menu_id
            item_name
            category
            description
            image
            price
            food_type
        }
    }
`

export const GET_ALL_MENU = gql`
    query ReadAllMenu{
        readAllMenu{
            menu_id
            item_name
            category
            description
            image
            price
            food_type
        }
    }
`

export const GET_MENU_BY_CATEGORY = gql`
    query ReadMenuByCategory($category:String!){
        readMenuByCategory(category:$category){
            menu_id
            item_name
            category
            description
            image
            price
            food_type
        }
    }
`

export const GET_ORDER = gql`
    query GetOrder($id:ID!){
        getOrder(id:$id){
            id
            item_names
            user
            user_id
            order_total
            delivery_status
            address
            addr_id
        }
    }
`