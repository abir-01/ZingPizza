import { gql } from "@apollo/client";

export const ADD_USER = gql`
	mutation AddUser($email: String, $name: String, $password:String, $phone:Int ) {
		addUser(email: $email,  name: $name, password: $password, phone: $phone) {
			id
            email
            name
            phone
            role
		}
	}
`;

export const ADD_ORDER = gql`
    mutation AddOrder($item_names:[String],$quantity:[Int], $user_id:String, $order_total:Int, $addr_id:String){
        addOrder(item_names:$item_names, quantity:$quantity, user_id:$user_id, order_total:$order_total, addr_id:$addr_id){
            id
            item_names
            quantity
            user{
                email
                name                
            }
            order_total
            delivery_status
            address{
                state
                city
                locality
                pincode
            }
        }
    }
`

export const UPDATE_ORDER = gql`
    mutation UpdateOrder($id:ID,$item_names:[String],$quantity:[Int], $user_id:String, $order_total:Int, $addr_id:String){
        updateOrder(id:$id, item_names:$item_name, quantity:$quantity, user_id:$user_id, order_total:$order_total, addr_id:$addr_id){
            id
            item_names
            quantity
            user
            user_id
            order_total
            delivery_status
            address
            addr_id
        }
    }
`;
export const DELETE_ORDER = gql`
    mutation DeleteOrder($id:ID){
        deleteOrder(id:$id){
            id
            item_names
            quantity
            user
            user_id
            order_total
            delivery_status
            address
            addr_id
        }
    }
`;

export const ADD_ADDRESS = gql`
    mutation AddAddress($user_id:String,$state:String,$city:String,$locality:String, $pincode:String){
        addAddress(user_id:$user_id,state:$state,city:$city,locality:$locality,pincode:$pincode){
            address_id
            user_id
            state
            city
            locality
            pincode
        }
    }
`
export const UPDATE_ADDRESS = gql`
    mutation UpdateAddress($address_id:address_id,$state:String,$city:String,$locality:String, $pincode:Int){
        updateAddress(address_id:$address_id,state:$state,city:$city,locality:$locality,pincode:$pincode){
            address_id
            user_id
            state
            city
            locality
            pincode
        }
    }
`
export const ADD_MENU = gql`
    mutation AddMenu($item_name:String,$category:String,$description:String,$image:String,$price:Int,$food_type:String){
        addMenu(item_name:$item_name,category:$category,description:$description,image:$image,price:$price,food_type:$food_type){
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
export const UPDATE_MENU = gql`
    mutation UpdateMenu($id:ID, $item_name:String,$category:String,$description:String,$image:String,$price:Int,$food_type:String){
        updateMenu(id:$ID, item_name:$item_name,category:$category,description:$description,image:$image,price:$price,food_type:$food_type){
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
export const DELETE_MENU = gql`
    mutation DeleteMenu($id:ID){
        deleteMenu(id:$ID){
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





