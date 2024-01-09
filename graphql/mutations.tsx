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
    mutation AddOrder($item_name:String, $user_id:String, $order_total:Int, $addr_id:String){
        addOrder(item_name:$item_name, user_id:$user_id, order_total:$order_total, addr_id:$addr_id){
            id
            item_name
            user
            user_id
            order_total
            delivery_status
            address
            addr_id
        }
    }

`

