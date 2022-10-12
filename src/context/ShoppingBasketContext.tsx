import { createContext, ReactNode, useContext, useState } from 'react'
import { ShoppingCart } from '../components/ShoppingBasket'

type ShoppingBasketProviderProps = {
    children: ReactNode
}

type ShoppingBasketContext = {
    getItemQuantity: (id: number) => number
    increaseItemQuantity: (id: number) => void
    decreaseItemQuantity: (id: number) => void
    removeItemFromCard: (id: number) => void
    openBasket: () => void
    closeBasket: () => void
    basketQuantity: number
    basketItems: BasketItem[]
}

type BasketItem = {
    id: number
    quantity: number
}
const ShoppingBagContext = createContext({} as ShoppingBasketContext)

export function useShoppingBag() {
    return useContext(ShoppingBagContext)
}

export function ShoppingBagProvider({ children }: ShoppingBasketProviderProps) {
    const [cardItems, setCardItems] = useState<BasketItem[]>([])
    const [isOpen, setIsOpen] = useState(false)

    const cardQuantity = cardItems.reduce((quantity, item) => item.quantity + quantity, 0)

    const openCard = () => setIsOpen(true)
    const closeCard = () => setIsOpen(false)

    function getItemQuantity(id: number) {
        return cardItems.find((item) => item.id === id)?.quantity || 0
    }

    function increaseItemQuantity(id: number) {
        setCardItems((currentItems) => {
            if (currentItems.find((item) => item.id === id) == null) {
                return [...currentItems, { id, quantity: 1 }]
            } else {
                return currentItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function decreaseItemQuantity(id: number) {
        setCardItems((currentItems) => {
            if (currentItems.find((item) => item.id === id)?.quantity === 1) {
                return currentItems.filter((item) => item.id == id)
            } else {
                return currentItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function removeItemFromCard(id: number) {
        setCardItems((currentItems) => {
            return currentItems.filter((item) => item.id !== id)
        })
    }

    return (
        <ShoppingBagContext.Provider
            value={{
                getItemQuantity,
                increaseItemQuantity,
                decreaseItemQuantity,
                removeItemFromCard,
                basketItems: cardItems,
                basketQuantity: cardQuantity,
                openBasket: openCard,
                closeBasket: closeCard,
            }}
        >
            {children}
            <ShoppingCart isOpen={isOpen} />
        </ShoppingBagContext.Provider>
    )
}
