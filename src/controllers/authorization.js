export const Role = {
    REGULAR_USER: 'regular_user',
    SELLER: 'seller'
}

export const Permission = {
    READ_SHOP: 'read_shop',
    EDIT_SHOP: 'edit_shop',

    BROWSE_PRODUCTS: 'browse_products',
    READ_PRODUCT: 'read_product',
    ADD_PRODUCT: 'add_product',
    EDIT_PRODUCT: 'edit_product',
    DELETE_PRODUCT: 'delete_product',

    BROWSE_CATEGORIES: 'browse_categories',
    READ_CATEGORY: 'read_category',
    EDIT_CATEGORY: 'edit_category',
    ADD_CATEGORY: 'add_category',
    DELETE_CATEGORY: 'delete_category',

    ADD_TO_CART: 'add_to_cart',
    READ_CART: 'read_cart',
    DELETE_ITEM_CART: 'delete_item_cart',
    EDIT_ITEM_CART: 'edit_item_cart',
    MAKE_PAYMENT: 'make_payment',
}

export const PermissionAssignment = {
    [Role.REGULAR_USER]: [
        Permission.READ_SHOP,
        Permission.BROWSE_PRODUCTS,
        Permission.READ_PRODUCT,
        Permission.ADD_TO_CART,
        Permission.READ_CART,
        Permission.DELETE_ITEM_CART,
        Permission.EDIT_ITEM_CART,
        Permission.MAKE_PAYMENT
    ],
    [Role.SELLER]: [
        Permission.READ_SHOP,
        Permission.EDIT_SHOP,
        Permission.BROWSE_PRODUCTS,
        Permission.READ_PRODUCT,
        Permission.EDIT_PRODUCT,
        Permission.ADD_PRODUCT,
        Permission.DELETE_PRODUCT,
        Permission.BROWSE_CATEGORIES,
        Permission.READ_CATEGORY,
        Permission.EDIT_CATEGORY,
        Permission.ADD_CATEGORY,
        Permission.DELETE_CATEGORY,
        Permission.ADD_TO_CART,
        Permission.READ_CART,
        Permission.DELETE_ITEM_CART,
        Permission.EDIT_ITEM_CART,
        Permission.MAKE_PAYMENT
    ]
}