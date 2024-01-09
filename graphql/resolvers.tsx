import { Context } from "@/app/api/graphql/route";

export const resolvers = {
    Query: {
        //get user by email
        user: async (_parent: any, args: any, context: Context) => {
            return await context.prisma.user.findUnique({
                where: {
                    email: args.email,
                },
                include: { orders: true, address: true },
            });
        },

        // get all users
        users: async (_parent: any, _args: any, context: Context) => {
            return await context.prisma.user.findMany({
                include: { orders: true, address: true },
            });
        },

        // get particular order details 
        getOrder: async (_parent: any, _args: any, context: Context) => {
            return await context.prisma.order.findFirst({
                where:{
                    id:_args.id
                },
                include: { user: true, address: true },
            });
        },

        // get all menu items
        readAllMenu: async (_parent: any, _args: any, context: Context) => {
            return await context.prisma.menu.findMany();
        },

        // get particular menu item
        readParticularMenu: async (_parent: any, args: any, context: Context) => {
            return await context.prisma.menu.findUnique({
                where: {
                    menu_id: args.id
                }
            });
        },

        // get menu by category
        readMenuByCategory: async (_parent: any, args: any, context: Context) => {
            return await context.prisma.menu.findMany({
                where: {
                    category: args.category
                }
            });
        },

    },
    // nested resolve function to get orders and address in User
    User: {
        orders: async (parent: any, _args: any, context: Context) => {
            return await context.prisma.order.findMany({
                where: {
                    user_id: parent.id,
                },
            });
        },
        address: async (parent: any, _args: any, context: Context) => {
            return await context.prisma.address.findUnique({
                where: {
                    user_id: parent.id,
                },
            });
        },
    },
    Order: {
        user: async (parent: any, _args: any, context: Context) => {
            return await context.prisma.user.findUnique({
                where: {
                    id: parent.user_id,
                },
            });
        },
        address: async (parent: any, _args: any, context: Context) => {
            return await context.prisma.address.findMany({
                where: {
                    address_id: parent.addr_id,
                },
            });
        },
    },

    Mutation: {
        // add user
        addUser: async (_parent: any, args: any, context: Context) => {
            return await context.prisma.user.create({
                data: {
                    email: args.email,
                    name: args.name,
                    password: args.password,
                    phone: args.phone,
                    role: args.role
                },
            });
        },

        // add address
        addAddress: async (_parent: any, args: any, context: Context) => {
            return await context.prisma.address.create({
                data: {
                    user_id: args.user_id,
                    state: args.state,
                    city: args.city,
                    locality: args.locality,
                    pincode: args.pincode
                },
            });
        },

        // update address
        updateAddress: async (_parent: any, args: any, context: Context) => {
            return await context.prisma.address.update({
                where: {
                    address_id: args.id
                },
                data: {
                    state: args.state,
                    city: args.city,
                    locality: args.locality,
                    pincode: args.pincode
                },
            });
        },

        // add order
        addOrder: async (_parent: any, args: any, context: Context) => {
            return await context.prisma.order.create({
                data: {
                    item_name: args.item_name,
                    order_total: args.order_total,
                    user_id: args.user_id,
                    addr_id: args.addr_id
                },
            });
        },


        // update order
        updateOrder: async (_parent: any, args: any, context: Context) => {
            return await context.prisma.order.update({
                where: {
                    id: args.id
                },
                data: {
                    item_name: args.item_name,
                    order_total: args.order_total,
                    user_id: args.user_id,
                    addr_id: args.addr_id
                },
            });
        },

        // delete order
        deleteOrder: async (_parent: any, args: any, context: Context) => {
            return await context.prisma.order.delete({
                where: {
                    id: args.id
                }
            });
        },

        // add menu
        addMenu: async (_parent: any, args: any, context: Context) => {
            return await context.prisma.menu.create({
                data: {
                    item_name: args.item_name,
                    category: args.category,
                    description: args.description,
                    image:args.image,
                    price:args.price,
                    food_type:args.food_type
                    // size_id: args.size_id,
                    // crust_id: args.crust_id
                },
            });
        },


        // update menu
        updateMenu: async (_parent: any, args: any, context: Context) => {
            return await context.prisma.menu.update({
                where: {
                    menu_id: args.id
                },
                data: {
                    item_name: args.item_name,
                    category: args.category,
                    description: args.description,
                    image:args.image,
                    price:args.price,
                    food_type:args.food_type
                },
            });
        },

        // delete menu
        deleteMenu: async (_parent: any, args: any, context: Context) => {
            return await context.prisma.menu.delete({
                where: {
                    menu_id: args.id
                }
            });
        },

        // add size
        addSize: async (_parent: any, args: any, context: Context) => {
            return await context.prisma.size.create({
                data: {
                    regular: args.regular,
                    medium: args.medium,
                    large: args.large,
                },
            });
        },


        // update size
        updateSize: async (_parent: any, args: any, context: Context) => {
            return await context.prisma.size.update({
                where: {
                    id: args.id
                },
                data: {
                    regular: args.regular,
                    medium: args.medium,
                    large: args.large,
                },
            });
        },


        // add crust
        addCrust: async (_parent: any, args: any, context: Context) => {
            return await context.prisma.crust.create({
                data: {
                    new_hand_tossed: args.new_hand_tossed,
                    wheat_thin_crust: args.wheat_thin_crust,
                    cheese_burst: args.cheese_burst,
                    fresh_pan_pizza: args.fresh_pan_pizza,
                },
            });
        },


        // update crust
        updateCrust: async (_parent: any, args: any, context: Context) => {
            return await context.prisma.crust.update({
                where: {
                    id: args.id
                },
                data: {
                    new_hand_tossed: args.new_hand_tossed,
                    wheat_thin_crust: args.wheat_thin_crust,
                    cheese_burst: args.cheese_burst,
                    fresh_pan_pizza: args.fresh_pan_pizza,
                },
            });
        },
    }
}