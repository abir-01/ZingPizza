export const typeDefs = `#graphql 
type User{
    id:ID
    email:String
    name:String
    password:String
    phone:Int
    orders:[Order]
    role:Role!
    address: Address
}

type Order{
    id:ID
    item_name: String
  user:User
  user_id:String
  order_total:Int
  delivery_status:String
  address:Address
    addr_id:String
}

type Address{
    address_id:ID
  user:User
  user_id:String
  state:String
  city:String
  locality:String
  pincode:Int
  order:Order
}

type Menu{
    menu_id:ID!
    item_name:String
    category:String
    description:String
    image: String
    price: Int
    food_type:String
    # size:Size  
    # size_id :String
    # crust:Crust  
    # crust_id :String
}

type Size{
    id:String
    regular:Int
    medium:Int
    large:Int
    menu:Menu
}

type Crust{
    id:String
    new_hand_tossed:Int
    wheat_thin_crust:Int
    cheese_burst:Int
    fresh_pan_pizza:Int
    menu:Menu
}

enum Role{
    USER
    ADMIN
}

type Query{
    user(email:String):User
    users:[User]
    readParticularMenu(id:ID):Menu
    readAllMenu : [Menu]
    readMenuByCategory(category:String):[Menu]
    getOrder(id:ID):Order
}

type Mutation{
    addUser(email:String, name:String, password:String, phone:Int) : User    
    addOrder(item_name:String, user_id:String, order_total:Int, addr_id:String) : Order
    updateOrder(id:ID, item_name:String, user_id:String, order_total:Int, addr_id:String) : Order
    deleteOrder(id:ID) : Order   
    addAddress(user_id:ID, state:String,city:String,pincode:Int,locality:String):Address
    updateAddress(id:ID, state:String,city:String,pincode:Int,locality:String):Address
    addMenu(item_name:String, category:String, description:String, crust_id:String, size_id:String):Menu
    updateMenu(id:ID,item_name:String, category:String, description:String, crust_id:String, size_id:String):Menu
    addSize(regular:Int, medium:Int, large:Int):Size
    updateSize(id:ID, regular:Int, medium:Int, large:Int):Size
    addCrust(new_hand_tossed:Int,wheat_thin_crust :Int, cheese_burst:Int,fresh_pan_pizza: Int):Crust
    updateCrust(id:ID,new_hand_tossed:Int,wheat_thin_crust :Int, cheese_burst:Int,fresh_pan_pizza: Int):Crust
    deleteMenu(id:ID):Menu    
}

# regular:Int, medium:Int, large:Int, new_hand_tossed:Int,wheat_thin_crust:Int,cheese_burst:Int, fresh_pan_pizza:Int

`;